import { LitElement, html, nothing } from "lit";
import { cardStyles } from "../styles.js";
import { localize } from "../localize.js";
import "../editors/sensors-editor.js";

export class AlpicairSensorsCard extends LitElement {
  static properties = { hass: {}, _config: { state: true }, _pending: { state: true } };
  static styles = cardStyles;

  static getConfigElement() { return document.createElement("alpicair-sensors-card-editor"); }
  static getStubConfig() { return { type: "custom:alpicair-sensors-card" }; }

  setConfig(config) {
    this._config = {
      show_target_slider: true,
      language: "auto",
      min_temp: 15,
      max_temp: 30,
      step: 0.5,
      ...config,
    };
  }

  getCardSize() { return 4; }
  _t(k) { return localize(this.hass, this._config, k); }

  _metric(entity, label) {
    const st = entity && this.hass.states[entity];
    if (!st) return nothing;
    const unit = st.attributes.unit_of_measurement || "°C";
    return html`<div class="metric">
      <div class="label">${label}</div>
      <div class="value">${st.state} <span style="font-size:13px">${unit}</span></div>
    </div>`;
  }

  _setTarget(value) {
    const ent = this._config.target_entity;
    if (!ent) return;
    const domain = ent.split(".")[0];
    if (domain === "climate")
      this.hass.callService("climate", "set_temperature", { entity_id: ent, temperature: value });
    else
      this.hass.callService(domain, "set_value", { entity_id: ent, value });
  }

  render() {
    if (!this.hass || !this._config) return nothing;
    const targetSt = this._config.target_entity && this.hass.states[this._config.target_entity];
    const target = targetSt
      ? Number(targetSt.attributes.temperature ?? targetSt.state)
      : null;

    return html`
      <ha-card>
        <div class="header">
          <div class="icon"><ha-icon icon=${this._config.icon || "mdi:thermometer"}></ha-icon></div>
          <div class="titles">
            <div class="title">${this._config.name || this._t("sensors")}</div>
          </div>
        </div>

        <div class="metric-grid">
          ${this._metric(this._config.outdoor_entity, this._t("outdoor"))}
          ${this._metric(this._config.indoor_entity, this._t("indoor"))}
          ${this._metric(this._config.supply_entity, this._t("supply_air"))}
          ${this._metric(this._config.extract_entity, this._t("extract_air"))}
        </div>

        ${this._config.show_target_slider && target !== null && Number.isFinite(target)
          ? html`<div class="slider-row">
              <div class="bar-top">
                <span>${this._t("target_temperature")}</span>
                <span class="val">${target.toFixed(1)} °C</span>
              </div>
              <input type="range" min=${this._config.min_temp} max=${this._config.max_temp}
                step=${this._config.step} .value=${String(target)}
                aria-label=${this._t("target_temperature")}
                @change=${(e) => this._setTarget(Number(e.target.value))} />
            </div>`
          : nothing}
      </ha-card>`;
  }
}

customElements.define("alpicair-sensors-card", AlpicairSensorsCard);
