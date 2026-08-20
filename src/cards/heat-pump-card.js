import { LitElement, html, nothing } from "lit";
import { cardStyles } from "../styles.js";
import { localize } from "../localize.js";
import "../editors/heat-pump-editor.js";

export class AlpicairHeatPumpCard extends LitElement {
  static properties = { hass: {}, _config: { state: true }, _pending: { state: true } };
  static styles = cardStyles;

  static getConfigElement() {
    return document.createElement("alpicair-heat-pump-card-editor");
  }
  static getStubConfig() {
    return { type: "custom:alpicair-heat-pump-card" };
  }

  setConfig(config) {
    this._config = {
      show_power: true,
      show_floor: true,
      show_water: true,
      show_modes: true,
      show_quick_heat: true,
      show_quiet_mode: true,
      show_disinfection: true,
      language: "auto",
      ...config,
    };
    this._pending = {};
  }

  getCardSize() { return 6; }
  _t(k) { return localize(this.hass, this._config, k); }
  _st(id) { return id && this.hass.states[id]; }

  _setTemp(entity, value) {
    this._pending = { ...this._pending, [entity]: value };
    clearTimeout(this._d);
    this._d = setTimeout(() => {
      this.hass.callService("climate", "set_temperature", { entity_id: entity, temperature: value });
      this._pending = {};
    }, 400);
  }

  _toggle(entity) {
    if (entity) this.hass.callService("homeassistant", "toggle", { entity_id: entity });
  }

  _isOn(entity) {
    const st = this._st(entity);
    return st ? !["off", "unavailable", "unknown"].includes(st.state) : false;
  }

  _setMode(mode) {
    const ent = this._config.mode_entity;
    if (!ent) return;
    const domain = ent.split(".")[0];
    if (domain === "select" || domain === "input_select")
      this.hass.callService(domain, "select_option", { entity_id: ent, option: mode });
    else if (domain === "climate")
      this.hass.callService("climate", "set_preset_mode", { entity_id: ent, preset_mode: mode });
  }

  render() {
    if (!this.hass || !this._config) return nothing;
    const power = this._config.power_entity;
    const on = power ? this._isOn(power) : true;
    const modeState = this._st(this._config.mode_entity);
    const modes = [
      { id: "heating", icon: "mdi:radiator" },
      { id: "hot_water", icon: "mdi:water-boiler" },
      { id: "heating_water", icon: "mdi:home-thermometer" },
    ];

    return html`
      <ha-card>
        <div class="header">
          <div class="icon"><ha-icon icon=${this._config.icon || "mdi:heat-pump"}></ha-icon></div>
          <div class="titles">
            <div class="title">${this._config.name || this._t("heat_pump")}</div>
            <div class="subtitle">${on ? (modeState ? this._t(modeState.state) : this._t("running")) : this._t("off")}</div>
          </div>
          ${this._config.show_power && power
            ? html`<button class="power ${on ? "on" : ""}" aria-label=${this._t("power")}
                @click=${() => this._toggle(power)}><ha-icon icon="mdi:power"></ha-icon></button>`
            : nothing}
        </div>

        <div class="${on ? "" : "dimmed"}" style="display:flex;flex-direction:column;gap:14px;">
          ${this._config.show_floor ? this._climate(this._config.floor_entity, this._t("floor"), "mdi:heating-coil") : nothing}
          ${this._config.show_water ? this._climate(this._config.water_entity, this._t("hot_water"), "mdi:water-thermometer") : nothing}

          ${this._config.show_modes && this._config.mode_entity
            ? html`<div class="grid c3">
                ${modes.map((m) => html`
                  <button class="mode ${modeState && modeState.state === m.id ? "active" : ""}"
                    @click=${() => this._setMode(m.id)}>
                    <ha-icon icon=${m.icon} style="--mdc-icon-size:18px"></ha-icon>${this._t(m.id)}
                  </button>`)}
              </div>`
            : nothing}

          ${this._quickRow()}
        </div>
      </ha-card>`;
  }

  _quickRow() {
    const items = [
      { cfg: "show_quick_heat", entity: this._config.quick_heat_entity, icon: "mdi:flash", key: "quick_heat", tone: "boost" },
      { cfg: "show_quiet_mode", entity: this._config.quiet_mode_entity, icon: "mdi:volume-off", key: "quiet_mode" },
      { cfg: "show_disinfection", entity: this._config.disinfection_entity, icon: "mdi:shield-sun", key: "disinfection" },
    ].filter((i) => this._config[i.cfg] !== false && i.entity);
    if (!items.length) return nothing;
    return html`<div class="grid c3">
      ${items.map((i) => html`
        <button class="mode ${this._isOn(i.entity) ? `active ${i.tone || ""}` : ""}"
          @click=${() => this._toggle(i.entity)}>
          <ha-icon icon=${i.icon} style="--mdc-icon-size:18px"></ha-icon>${this._t(i.key)}
        </button>`)}
    </div>`;
  }

  _climate(entity, label, icon) {
    const st = this._st(entity);
    if (!st) return nothing;
    const a = st.attributes;
    const min = a.min_temp ?? 5;
    const max = a.max_temp ?? 60;
    const step = a.target_temp_step ?? 0.5;
    const target = this._pending[entity] ?? a.temperature ?? min;
    return html`
      <div class="slider-row">
        <div class="bar-top">
          <span style="display:flex;align-items:center;gap:6px">
            <ha-icon icon=${icon} style="--mdc-icon-size:16px"></ha-icon>${label}
          </span>
          <span class="val">${Number(target).toFixed(step < 1 ? 1 : 0)} °C${
            a.current_temperature != null ? html` <span style="color:var(--secondary-text-color)">/ ${a.current_temperature} °C</span>` : ""
          }</span>
        </div>
        <input type="range" min=${min} max=${max} step=${step} .value=${String(target)}
          aria-label=${label} @input=${(e) => this._setTemp(entity, Number(e.target.value))} />
      </div>`;
  }
}

customElements.define("alpicair-heat-pump-card", AlpicairHeatPumpCard);
