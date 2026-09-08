import { LitElement, html, svg, nothing } from "lit";
import { cardStyles } from "../styles.js";
import { UiSettingsMixin } from "../ui-settings.js";
import { localize, localizeOption } from "../localize.js";
import { PanelMixin, panelBackdrop, panelHeader, ringOverlay } from "../panel.js";
import "../editors/recuperator-panel-editor.js";

const MODES = [
  { id: "building_protection", icon: "mdi:shield-check", kw: ["building", "protect", "защит", "здан", "aizsardz", "ēkas", "ekas"] },
  { id: "economy", icon: "mdi:leaf", kw: ["eco", "econom", "эконом", "ekonom"] },
  { id: "comfort", icon: "mdi:sofa", kw: ["comfort", "normal", "комфорт", "нормал", "normāl", "normal"] },
  { id: "boost", icon: "mdi:rocket-launch", tone: "boost", kw: ["boost", "intens", "интенс", "турбо", "turbo", "max", "макс", "обдув"] },
];

const norm = (v) => String(v ?? "").trim().toLowerCase();
const SPEED_BY_MODE = { building_protection: 15, economy: 35, comfort: 55, boost: 100 };

export class AlpicairRecuperatorPanelCard extends PanelMixin(UiSettingsMixin(LitElement)) {
  static properties = {
    hass: {},
    _config: { state: true },
    _open: { state: true },
    _editingTarget: { state: true },
    _showTemps: { state: true },
  };
  static styles = cardStyles;

  static getConfigElement() {
    return document.createElement("alpicair-recuperator-panel-card-editor");
  }
  static getStubConfig() {
    return { type: "custom:alpicair-recuperator-panel-card", mode_entity: "" };
  }

  setConfig(config) {
    this._config = {
      ring_size: 260,
      ring_thickness: 18,
      show_header: true,
      show_target: true,
      show_indoor: true,
      show_recuperation: true,
      show_outdoor: true,
      show_supply: true,
      show_extract: true,
      show_mode_picker: true,
      show_title: true,
      language: "auto",
      ...config,
    };
  }

  get _defaultTitle() { return "recuperator"; }
  getCardSize() { return 5; }
  _t(k) { return localize(this.hass, this._config, k); }
  _svgColor(name, fallback) {
    const value = getComputedStyle(this).getPropertyValue(name).trim();
    return value && !value.includes("var(") ? value : fallback;
  }
  _num(entity) {
    const st = entity && this.hass.states[entity];
    const v = st ? Number(st.state) : NaN;
    return Number.isFinite(v) ? v : null;
  }

  get _stateObj() {
    return (this._config.mode_entity && this.hass.states[this._config.mode_entity]) || null;
  }
  get _options() {
    const st = this._stateObj;
    if (!st) return [];
    const a = st.attributes || {};
    return a.options || a.preset_modes || a.hvac_modes || [];
  }
  get _mode() {
    const st = this._stateObj;
    return st ? st.state : null;
  }

  _optionFor(id) {
    const override = this._config[`option_${id}`];
    if (override) return override;
    const options = this._options;
    if (!options.length) return id;
    const def = MODES.find((m) => m.id === id);
    if (def) {
      const hit = options.find((o) => def.kw.some((k) => norm(o).includes(k)));
      if (hit) return hit;
    }
    const idx = MODES.findIndex((m) => m.id === id);
    return options[idx] ?? id;
  }
  _isActive(id) {
    const cur = norm(this._mode);
    if (!cur) return false;
    if (cur === norm(this._optionFor(id)) || cur === id) return true;
    // fall back to matching the raw device value by keyword
    const def = MODES.find((m) => m.id === id);
    const matched = MODES.find((m) => m.kw.some((k) => cur.includes(k)));
    return !!def && matched === def;
  }
  get _activeId() { return MODES.find((m) => this._isActive(m.id))?.id || null; }

  get _speed() {
    const v = this._num(this._config.fan_speed_entity);
    if (v !== null) return Math.max(0, Math.min(100, v));
    const id = this._activeId;
    return id ? (SPEED_BY_MODE[id] ?? 0) : 0;
  }
  get _recup() { return this._num(this._config.recuperation_entity) ?? 0; }

  get _panelOn() {
    if (this._config.power_entity) {
      const st = this.hass.states[this._config.power_entity];
      return st ? !["off", "unavailable", "unknown"].includes(st.state) : false;
    }
    return !!this._mode && this._mode !== "off";
  }
  _togglePower() {
    const ent = this._config.power_entity;
    if (ent) {
      this.hass.callService("homeassistant", "toggle", { entity_id: ent });
    } else if (this._config.mode_entity) {
      this._setMode(this._panelOn ? "off" : (this._config.default_mode || "comfort"));
    }
  }

  _setMode(id) {
    const ent = this._config.mode_entity;
    if (!ent) return;
    const option = this._optionFor(id);
    const domain = ent.split(".")[0];
    if (domain === "select" || domain === "input_select") {
      this.hass.callService(domain, "select_option", { entity_id: ent, option });
    } else if (domain === "fan") {
      this.hass.callService("fan", "set_preset_mode", { entity_id: ent, preset_mode: option });
    } else if (domain === "climate") {
      this.hass.callService("climate", "set_preset_mode", { entity_id: ent, preset_mode: option });
    }
    this._open = false;
  }

  get _target() {
    const e = this._config.target_entity;
    if (!e) return null;
    const st = this.hass.states[e];
    const v = st ? Number(st.state) : NaN;
    return Number.isFinite(v) ? v : null;
  }
  _setTarget(v) {
    const e = this._config.target_entity;
    if (!e) return;
    const domain = e.split(".")[0];
    const clamped = Math.min(this._config.target_max ?? 30, Math.max(this._config.target_min ?? 15, v));
    if (domain === "number" || domain === "input_number") {
      this.hass.callService(domain, "set_value", { entity_id: e, value: clamped });
    } else if (domain === "climate") {
      this.hass.callService("climate", "set_temperature", { entity_id: e, temperature: clamped });
    }
  }

  get _hasOpenPanel() { return this._open || this._editingTarget || this._showTemps; }
  _closePanels() { this._open = false; this._editingTarget = false; this._showTemps = false; }

  render() {
    if (!this.hass || !this._config) return nothing;
    const size = Number(this._config.ring_size) || 260;
    const thickness = Number(this._config.ring_thickness) || 18;
    const r = (size - thickness) / 2 - 2;
    const c = 2 * Math.PI * r;
    const speed = this._speed;
    const activeId = this._activeId;
    const ActiveIcon = (MODES.find((m) => m.id === activeId) || MODES[2]).icon;
    const ringColor = activeId === "boost" ? this._svgColor("--alp-boost", "#ff9800")
      : activeId ? this._svgColor("--primary-color", "#03a9f4") : this._svgColor("--disabled-text-color", "#9e9e9e");
    const trackColor = this._svgColor("--secondary-background-color", "#e5e7eb");

    return html`
      <ha-card class="panel-card">
        ${this._hasOpenPanel ? panelBackdrop(this) : nothing}
        ${this._config.show_header !== false ? panelHeader(this) : nothing}

        <div class="ring-wrap" style=${`width:${size}px;height:${size}px;--alp-ring-inset:${thickness + 10}px`}>
          <svg width=${size} height=${size} class="ring" style="transform:rotate(-90deg)">
            ${svg`<circle cx=${size / 2} cy=${size / 2} r=${r} fill="none"
              stroke=${trackColor} stroke-width=${thickness} stroke-linecap="round" />`}
            ${svg`<circle cx=${size / 2} cy=${size / 2} r=${r} fill="none"
              stroke-width=${thickness} stroke-linecap="round"
              stroke-dasharray=${c} stroke-dashoffset=${c * (1 - speed / 100)}
              stroke=${ringColor} style="transition:stroke-dashoffset .5s, stroke .3s" />`}
          </svg>

          <button class="ring-center" @click=${() => this._open = !this._open}>
            <ha-icon icon=${ActiveIcon} style=${`--mdc-icon-size:28px;color:${ringColor}`}></ha-icon>
            <span class="rc-mode">${activeId ? this._t(activeId) : (localizeOption(this.hass, this._config, this._mode) || this._t("off"))}</span>
            <span class="rc-pct">${Math.round(speed)}%</span>
          </button>

          ${this._open && this._config.show_mode_picker
            ? ringOverlay(this, () => this._open = false, html`
                <div class="ring-overlay-grid">
                  ${MODES.map((m) => html`
                    <button class="mode ${this._isActive(m.id) ? "active" : ""} ${m.tone || ""}"
                      @click=${() => this._setMode(m.id)}>
                      <ha-icon icon=${m.icon} style="--mdc-icon-size:18px"></ha-icon>${this._t(m.id)}
                    </button>`)}
                </div>`)
            : nothing}
        </div>

        <div class="tilezone">
          <div class="grid c3 ring-stats ${this._editingTarget || this._showTemps ? "dimmed" : ""}">
            ${this._config.show_target
              ? html`<button class="ring-stat ${this._editingTarget ? "sel" : ""}"
                  @click=${() => { this._editingTarget = !this._editingTarget; this._showTemps = false; }}>
                  <ha-icon icon="mdi:target" style="--mdc-icon-size:18px;color:var(--primary-color)"></ha-icon>
                  <span class="rs-val">${this._target !== null ? this._target.toFixed(1) + "°" : "—"}</span>
                </button>`
              : nothing}
            ${this._config.show_indoor
              ? html`<button class="ring-stat ${this._showTemps ? "sel heat" : ""}"
                  @click=${() => { this._showTemps = !this._showTemps; this._editingTarget = false; }}>
                  <ha-icon icon="mdi:home-thermometer" style="--mdc-icon-size:18px;color:var(--alp-heat,#f4511e)"></ha-icon>
                  <span class="rs-val">${this._num(this._config.indoor_entity) !== null ? this._num(this._config.indoor_entity).toFixed(1) + "°" : "—"}</span>
                </button>`
              : nothing}
            ${this._config.show_recuperation
              ? html`<div class="ring-stat">
                  <ha-icon icon="mdi:recycle" style="--mdc-icon-size:18px;color:var(--alp-perf,#4caf50)"></ha-icon>
                  <span class="rs-val">${Math.round(this._recup)}%</span>
                </div>`
              : nothing}
          </div>

          ${this._editingTarget && this._target !== null
            ? html`<div class="ring-stepper floating">
                <button class="stepbtn" @click=${() => this._setTarget(this._target - 0.5)}>−</button>
                <span class="rs-target">${this._target.toFixed(1)}°C</span>
                <button class="stepbtn" @click=${() => this._setTarget(this._target + 0.5)}>+</button>
              </div>`
            : nothing}

          ${this._showTemps
            ? html`<div class="grid c3 ring-mini floating">
                ${this._mini("mdi:snowflake", this._num(this._config.outdoor_entity), "cool")}
                ${this._mini("mdi:arrow-down", this._num(this._config.supply_entity), "heat")}
                ${this._mini("mdi:arrow-up", this._num(this._config.extract_entity), "heat")}
              </div>`
            : nothing}
        </div>


      </ha-card>`;
  }

  _mini(icon, value, tone) {
    const color = tone === "heat" ? "var(--alp-heat,#f4511e)" : "var(--alp-cool,#039be5)";
    return html`<div class="ring-stat">
      <ha-icon icon=${icon} style=${`--mdc-icon-size:18px;color:${color}`}></ha-icon>
      <span class="rs-val">${value !== null ? value.toFixed(1) + "°" : "—"}</span>
    </div>`;
  }
}

customElements.define("alpicair-recuperator-panel-card", AlpicairRecuperatorPanelCard);
