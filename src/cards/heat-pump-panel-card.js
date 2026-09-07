import { LitElement, html, svg, nothing } from "lit";
import { cardStyles } from "../styles.js";
import { UiSettingsMixin } from "../ui-settings.js";
import { localize } from "../localize.js";
import { PanelMixin, panelHeader, ringOverlay } from "../panel.js";
import "../editors/heat-pump-panel-editor.js";

const MODES = [
  { id: "heating", icon: "mdi:radiator" },
  { id: "hot_water", icon: "mdi:water-boiler" },
  { id: "heating_water", icon: "mdi:home-thermometer" },
];

const EXTRAS = [
  { id: "quick_heat", icon: "mdi:flash", cfg: "show_quick_heat", entity: "quick_heat_entity", tone: "boost" },
  { id: "quiet_mode", icon: "mdi:volume-off", cfg: "show_quiet_mode", entity: "quiet_mode_entity" },
  { id: "disinfection", icon: "mdi:shield-sun", cfg: "show_disinfection", entity: "disinfection_entity", tone: "perf" },
];

export class AlpicairHeatPumpPanelCard extends PanelMixin(UiSettingsMixin(LitElement)) {
  static properties = { hass: {}, _config: { state: true }, _pending: { state: true }, _sheet: { state: true } };
  static styles = cardStyles;

  static getConfigElement() {
    return document.createElement("alpicair-heat-pump-panel-card-editor");
  }
  static getStubConfig() {
    return { type: "custom:alpicair-heat-pump-panel-card" };
  }

  setConfig(config) {
    this._config = {
      show_power: true,
      show_mode: true,
      show_extras: true,
      show_current_temperature: true,
      ring_size: 260,
      ring_thickness: 18,
      language: "auto",
      ...config,
    };
    this._pending = {};
  }

  getCardSize() { return 6; }
  _t(k) { return localize(this.hass, this._config, k); }
  _st(id) { return id && this.hass && this.hass.states[id]; }
  _num(id) {
    const st = this._st(id);
    if (!st) return null;
    const v = Number(st.state);
    return Number.isFinite(v) ? v : null;
  }

  _target(id) {
    if (this._pending[id] != null) return this._pending[id];
    const st = this._st(id);
    if (!st) return null;
    if (id.startsWith("climate.") || id.startsWith("water_heater.")) {
      const v = Number(st.attributes.temperature);
      return Number.isFinite(v) ? v : null;
    }
    const v = Number(st.state);
    return Number.isFinite(v) ? v : null;
  }
  _limits(id, fb) {
    const st = this._st(id);
    const a = (st && st.attributes) || {};
    return { min: a.min ?? a.min_temp ?? fb.min, max: a.max ?? a.max_temp ?? fb.max, step: a.step ?? a.target_temp_step ?? fb.step };
  }
  _setTarget(id, value) {
    if (!id) return;
    this._pending = { ...this._pending, [id]: value };
    clearTimeout(this._d);
    this._d = setTimeout(() => {
      const domain = id.split(".")[0];
      if (domain === "number" || domain === "input_number")
        this.hass.callService(domain, "set_value", { entity_id: id, value });
      else if (domain === "water_heater")
        this.hass.callService("water_heater", "set_temperature", { entity_id: id, temperature: value });
      else this.hass.callService("climate", "set_temperature", { entity_id: id, temperature: value });
      this._pending = {};
    }, 500);
  }

  get _panelOn() {
    const p = this._config.power_entity;
    if (p) {
      const st = this._st(p);
      return st ? !["off", "unavailable", "unknown"].includes(st.state) : false;
    }
    return true;
  }
  _togglePower() {
    const p = this._config.power_entity;
    if (p) this.hass.callService("homeassistant", "toggle", { entity_id: p });
  }
  _isOn(id) {
    const st = this._st(id);
    return st ? !["off", "unavailable", "unknown"].includes(st.state) : false;
  }
  _toggle(id) { if (id) this.hass.callService("homeassistant", "toggle", { entity_id: id }); }

  _optionFor(mode) { return this._config[`option_${mode}`] || mode; }
  _isMode(mode) {
    const st = this._st(this._config.mode_entity);
    return !!st && st.state === this._optionFor(mode);
  }
  _setMode(mode) {
    const ent = this._config.mode_entity;
    if (!ent) return;
    const domain = ent.split(".")[0];
    if (domain === "select" || domain === "input_select")
      this.hass.callService(domain, "select_option", { entity_id: ent, option: this._optionFor(mode) });
    else if (domain === "climate")
      this.hass.callService("climate", "set_preset_mode", { entity_id: ent, preset_mode: this._optionFor(mode) });
    this._sheet = null;
  }

  get _hasOpenPanel() { return this._sheet != null; }
  _closePanels() { this._sheet = null; }
  _toggleSheet(sheet) { this._sheet = this._sheet === sheet ? null : sheet; }

  get _waterNow() { return this._num(this._config.water_current_entity); }
  get _waterLimits() { return this._limits(this._config.water_target_entity, { min: 30, max: 65, step: 1 }); }
  get _floorLimits() { return this._limits(this._config.floor_target_entity, { min: 15, max: 35, step: 0.5 }); }

  render() {
    if (!this.hass || !this._config) return nothing;
    const c = this._config;
    const on = this._panelOn;
    const water = this._waterNow;
    const wl = this._waterLimits;
    const pct = water != null ? Math.min(1, Math.max(0, (water - wl.min) / (wl.max - wl.min))) : 0;
    const size = Number(c.ring_size) || 260;
    const thickness = Number(c.ring_thickness) || 18;
    const r = (size - thickness) / 2 - 2;
    const circ = 2 * Math.PI * r;
    const ringColor = on ? "var(--alp-water, #039be5)" : "var(--disabled-text-color)";
    const activeMode = MODES.find((m) => this._isMode(m.id));
    const extras = EXTRAS.filter((e) => c[e.cfg] !== false && c[e.entity]);

    return html`
      <ha-card class="panel-card">
        ${(c.show_power !== false || c.back_path || c.back_action) ? panelHeader(this) : nothing}

        <div class="ring-wrap" style=${`width:${size}px;height:${size}px`}>
          <svg width=${size} height=${size} class="ring" style="transform:rotate(-90deg)">
            ${svg`<circle cx=${size / 2} cy=${size / 2} r=${r} fill="none"
              stroke="var(--secondary-background-color)" stroke-width=${thickness} stroke-linecap="round" />`}
            ${svg`<circle cx=${size / 2} cy=${size / 2} r=${r} fill="none"
              stroke=${ringColor} stroke-width=${thickness} stroke-linecap="round"
              stroke-dasharray=${circ} stroke-dashoffset=${circ * (1 - (on ? pct : 0))}
              style="transition:stroke-dashoffset .5s, stroke .3s" />`}
          </svg>

          <button class="ring-center" @click=${() => this._toggleSheet("temp")}>
            <span class="rc-cap"><ha-icon icon="mdi:water-thermometer" style="--mdc-icon-size:16px;color:var(--alp-water,#039be5)"></ha-icon> ${this._t("hot_water")}</span>
            <span class="rc-target" style=${on ? "color:var(--alp-water,#039be5)" : ""}>${water != null ? water.toFixed(1) + "°" : "—"}</span>
            <span class="rc-sub">${activeMode ? this._t(activeMode.id) : (on ? this._t("running") : this._t("off"))}</span>
          </button>

          ${this._sheet === "temp"
            ? ringOverlay(this, () => this._sheet = null, html`
                <div class="ring-target-rows">
                  ${this._targetRow("floor", "mdi:heating-coil", c.floor_target_entity, this._floorLimits, "heat")}
                  ${this._targetRow("water", "mdi:water-thermometer", c.water_target_entity, wl, "water")}
                </div>`)
            : nothing}
        </div>

        <div class="grid c2 ring-tiles">
          ${c.show_mode && c.mode_entity
            ? html`<button class="tile ${this._sheet === "mode" ? "sel" : ""}" @click=${() => this._toggleSheet("mode")}>
                <span class="tile-icon"><ha-icon icon="mdi:tune" style="--mdc-icon-size:18px"></ha-icon></span>
                <span class="tile-val">${activeMode ? this._t(activeMode.id) : this._t("settings")}</span>
              </button>`
            : nothing}
          ${c.show_extras && extras.length
            ? html`<button class="tile ${this._sheet === "extra" ? "sel" : ""}" @click=${() => this._toggleSheet("extra")}>
                <span class="tile-icon"><ha-icon icon="mdi:flash" style="--mdc-icon-size:18px"></ha-icon></span>
                <span class="tile-val">${this._t("settings")}</span>
                <span class="tile-dots">
                  ${extras.map((e) => html`<span class="dot ${this._isOn(c[e.entity]) ? (e.tone || "active") : ""}"></span>`)}
                </span>
              </button>`
            : nothing}
        </div>

        ${this._sheet === "mode"
          ? html`<div class="opt-row">
              ${MODES.map((m) => html`
                <button class="opt ${this._isMode(m.id) ? "active" : ""}" @click=${() => this._setMode(m.id)}>
                  <ha-icon icon=${m.icon} style="--mdc-icon-size:18px"></ha-icon><span>${this._t(m.id)}</span>
                </button>`)}
            </div>`
          : nothing}

        ${this._sheet === "extra"
          ? html`<div class="opt-row">
              ${extras.map((e) => html`
                <button class="opt ${this._isOn(c[e.entity]) ? `active ${e.tone || ""}` : ""}" @click=${() => this._toggle(c[e.entity])}>
                  <ha-icon icon=${e.icon} style="--mdc-icon-size:18px"></ha-icon><span>${this._t(e.id)}</span>
                </button>`)}
            </div>`
          : nothing}
      </ha-card>`;
  }

  _targetRow(key, icon, entityId, limits, tone) {
    const val = this._target(entityId);
    const st = Number(limits.step) || 0.5;
    const dec = st < 1 ? 1 : 0;
    const clamp = (v) => Math.min(Number(limits.max), Math.max(Number(limits.min), Math.round(v * 10) / 10));
    const v = val ?? Number(limits.min);
    const color = tone === "water" ? "var(--alp-water, #039be5)" : "var(--alp-heat, #f4511e)";
    return html`<div class="rt-row">
      <button class="stepbtn round" @click=${() => this._setTarget(entityId, clamp(v - st))}>−</button>
      <span class="rt-inner">
        <span class="rt-label"><ha-icon icon=${icon} style=${`--mdc-icon-size:15px;color:${color}`}></ha-icon> ${this._t(key)}</span>
        <span class="rt-val" style=${`color:${color}`}>${Number(v).toFixed(dec)}°</span>
      </span>
      <button class="stepbtn round" @click=${() => this._setTarget(entityId, clamp(v + st))}>+</button>
    </div>`;
  }
}

customElements.define("alpicair-heat-pump-panel-card", AlpicairHeatPumpPanelCard);
