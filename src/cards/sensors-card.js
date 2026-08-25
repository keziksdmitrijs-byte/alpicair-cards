import { LitElement, html, nothing } from "lit";
import { cardStyles } from "../styles.js";
import { UiSettingsMixin } from "../ui-settings.js";
import { localize } from "../localize.js";
import "../editors/sensors-editor.js";

export class AlpicairSensorsCard extends UiSettingsMixin(LitElement) {
  static properties = { hass: {}, _config: { state: true }, _pending: { state: true } };
  static styles = cardStyles;

  static getConfigElement() { return document.createElement("alpicair-sensors-card-editor"); }
  static getStubConfig() { return { type: "custom:alpicair-sensors-card" }; }

  setConfig(config) {
    this._config = {
      show_target_slider: true,
      show_target_steppers: true,
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

  _clamp(v) {
    const min = Number(this._config.min_temp), max = Number(this._config.max_temp);
    return Math.min(max, Math.max(min, Math.round(v * 10) / 10));
  }

  render() {
    if (!this.hass || !this._config) return nothing;
    const c = this._config;
    const targetSt = c.target_entity && this.hass.states[c.target_entity];
    const target = targetSt ? Number(targetSt.attributes.temperature ?? targetSt.state) : null;
    const step = Number(c.step) || 0.5;

    return html`
      <ha-card>
        <div class="header">
          <div class="icon"><ha-icon icon=${c.icon || "mdi:thermometer"}></ha-icon></div>
          <div class="titles">
            <div class="title">${c.name || this._t("sensors")}</div>
          </div>
        </div>

        <div class="metric-grid horiz">
          ${this._metric(c.outdoor_entity, this._t("outdoor"))}
          ${this._metric(c.indoor_entity, this._t("indoor"))}
          ${this._metric(c.supply_entity, this._t("supply_air"))}
          ${this._metric(c.extract_entity, this._t("extract_air"))}
        </div>

        ${target !== null && Number.isFinite(target)
          ? html`<div class="target-box">
              <div class="target-head">
                <span class="k">${this._t("target_temperature")}</span>
                <span class="v">${target.toFixed(1)}<small>°C</small></span>
              </div>

              ${c.show_target_steppers !== false
                ? html`<div class="tempstep">
                    <span class="lbl">${this._t("target_temperature")}</span>
                    <button class="stepbtn" aria-label="−"
                      @click=${() => this._setTarget(this._clamp(target - step))}>−</button>
                    <span class="v heat">${target.toFixed(1)}°</span>
                    <button class="stepbtn" aria-label="+"
                      @click=${() => this._setTarget(this._clamp(target + step))}>+</button>
                  </div>`
                : nothing}

              ${c.show_target_slider !== false
                ? html`
                    <input class="heat" type="range" min=${c.min_temp} max=${c.max_temp}
                      step=${step} .value=${String(target)}
                      aria-label=${this._t("target_temperature")}
                      @change=${(e) => this._setTarget(Number(e.target.value))} />
                    <div class="range-legend"><span>${c.min_temp}°</span><span>${c.max_temp}°</span></div>`
                : nothing}
            </div>`
          : nothing}
      </ha-card>`;
  }
}

customElements.define("alpicair-sensors-card", AlpicairSensorsCard);
