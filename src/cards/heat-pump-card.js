import { LitElement, html, nothing } from "lit";
import { cardStyles } from "../styles.js";
import { localize } from "../localize.js";
import { UiSettingsMixin } from "../ui-settings.js";
import "../editors/heat-pump-editor.js";

export class AlpicairHeatPumpCard extends UiSettingsMixin(LitElement) {
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
      show_hero: true,
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

  _num(id) {
    const st = this._st(id);
    if (!st) return null;
    const v = Number(st.state);
    return Number.isFinite(v) ? v : null;
  }

  /** Target value: number / input_number entity (fallback: climate temperature). */
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
    return {
      min: a.min ?? a.min_temp ?? fb.min,
      max: a.max ?? a.max_temp ?? fb.max,
      step: a.step ?? a.target_temp_step ?? fb.step,
    };
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
      else
        this.hass.callService("climate", "set_temperature", { entity_id: id, temperature: value });
      this._pending = {};
    }, 500);
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
      this.hass.callService(domain, "select_option", { entity_id: ent, option: this._optionFor(mode) });
    else if (domain === "climate")
      this.hass.callService("climate", "set_preset_mode", { entity_id: ent, preset_mode: this._optionFor(mode) });
  }

  /** Allows mapping logical modes to entity options via the visual editor. */
  _optionFor(mode) {
    return this._config[`option_${mode}`] || mode;
  }

  _isMode(mode) {
    const st = this._st(this._config.mode_entity);
    return !!st && st.state === this._optionFor(mode);
  }

  render() {
    if (!this.hass || !this._config) return nothing;
    const c = this._config;
    const power = c.power_entity;
    const on = power ? this._isOn(power) : true;
    const modeState = this._st(c.mode_entity);
    const modes = [
      { id: "heating", icon: "mdi:radiator" },
      { id: "hot_water", icon: "mdi:water-boiler" },
      { id: "heating_water", icon: "mdi:home-thermometer" },
    ];

    const floor = {
      label: this._t("floor"),
      icon: "mdi:heating-coil",
      current: this._num(c.floor_current_entity),
      targetId: c.floor_target_entity,
      target: this._target(c.floor_target_entity),
      tone: "heat",
      limits: this._limits(c.floor_target_entity, { min: 15, max: 35, step: 0.5 }),
    };
    const water = {
      label: this._t("hot_water"),
      icon: "mdi:water-thermometer",
      current: this._num(c.water_current_entity),
      targetId: c.water_target_entity,
      target: this._target(c.water_target_entity),
      tone: "water",
      limits: this._limits(c.water_target_entity, { min: 30, max: 65, step: 1 }),
    };
    const shown = [c.show_floor !== false ? floor : null, c.show_water !== false ? water : null].filter(Boolean);

    return html`
      <ha-card>
        <div class="header">
          <div class="icon"><ha-icon icon=${c.icon || "mdi:heat-pump"}></ha-icon></div>
          <div class="titles">
            <div class="title">${c.name || this._t("heat_pump")}</div>
            <div class="subtitle">${on ? (modeState ? modeState.state : this._t("running")) : this._t("off")}</div>
          </div>
          ${c.show_power && power
            ? html`<button class="power ${on ? "on" : ""}" aria-label=${this._t("power")}
                @click=${() => this._toggle(power)}><ha-icon icon="mdi:power"></ha-icon></button>`
            : nothing}
        </div>

        <div class="${on ? "" : "dimmed"}" style="display:flex;flex-direction:column;gap:14px;">
          ${c.show_hero !== false && shown.length ? this._hero(shown) : nothing}
          ${shown.filter((s) => s.targetId).map((s) => this._stepRow(s))}

          ${c.show_modes && c.mode_entity
            ? html`<div class="grid c3">
                ${modes.map((m) => html`
                  <button class="mode ${this._isMode(m.id) ? "active" : ""}"
                    @click=${() => this._setMode(m.id)}>
                    <ha-icon icon=${m.icon} style="--mdc-icon-size:22px"></ha-icon>${this._t(m.id)}
                  </button>`)}
              </div>`
            : nothing}

          ${this._quickRow()}
        </div>
      </ha-card>`;
  }

  _hero(items) {
    return html`<div class="hero">
      ${items.map((s, i) => html`
        ${i > 0 ? html`<div class="hero-sep"></div>` : nothing}
        <div class="hero-col">
          <div class="hero-label"><ha-icon icon=${s.icon} style="--mdc-icon-size:18px"></ha-icon>${s.label}</div>
          <div class="hero-current ${s.tone}">${s.current != null ? `${s.current.toFixed(1)}°` : "—"}</div>
          <div class="hero-target ${s.tone}">${s.target != null ? `${s.target.toFixed(1)}°` : "—"}</div>
        </div>`)}
    </div>`;
  }

  _stepRow(s) {
    const { min, max, step } = s.limits;
    const st = Number(step) || 0.5;
    const val = s.target ?? Number(min);
    const dec = st < 1 ? 1 : 0;
    const clamp = (v) => Math.min(Number(max), Math.max(Number(min), Math.round(v * 10) / 10));
    return html`
      <div class="tempstep">
        <span class="lbl" style="display:flex;align-items:center;gap:6px">
          <ha-icon icon=${s.icon} style="--mdc-icon-size:18px"></ha-icon>${s.label}
          ${s.current != null ? html`<span class="sub">· ${s.current.toFixed(1)}°</span>` : nothing}
        </span>
        <button class="stepbtn" aria-label="−"
          @click=${() => this._setTarget(s.targetId, clamp(val - st))}>−</button>
        <span class="v ${s.tone}">${Number(val).toFixed(dec)}°</span>
        <button class="stepbtn" aria-label="+"
          @click=${() => this._setTarget(s.targetId, clamp(val + st))}>+</button>
      </div>`;
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
          <ha-icon icon=${i.icon} style="--mdc-icon-size:22px"></ha-icon>${this._t(i.key)}
        </button>`)}
    </div>`;
  }
}

customElements.define("alpicair-heat-pump-card", AlpicairHeatPumpCard);
