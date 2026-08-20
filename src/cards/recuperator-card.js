import { LitElement, html, nothing } from "lit";
import { cardStyles } from "../styles.js";
import { localize } from "../localize.js";
import { performAction } from "../actions.js";
import "../editors/recuperator-editor.js";

const MODES = [
  { id: "building_protection", icon: "mdi:shield-check", cfg: "show_building_protection" },
  { id: "economy", icon: "mdi:leaf", cfg: "show_economy" },
  { id: "comfort", icon: "mdi:sofa", cfg: "show_comfort" },
  { id: "boost", icon: "mdi:rocket-launch", cfg: "show_boost", tone: "boost" },
];

export class AlpicairRecuperatorCard extends LitElement {
  static properties = { hass: {}, _config: { state: true } };
  static styles = cardStyles;

  static getConfigElement() {
    return document.createElement("alpicair-recuperator-card-editor");
  }
  static getStubConfig() {
    return { type: "custom:alpicair-recuperator-card", mode_entity: "", power_entity: "" };
  }

  setConfig(config) {
    this._config = {
      show_power: true,
      show_recuperation: true,
      show_fan_speed: true,
      show_building_protection: true,
      show_economy: true,
      show_comfort: true,
      show_boost: true,
      show_settings_button: true,
      settings_button_label: "",
      settings_icon: "mdi:cog",
      hold_time: 500,
      tap_action: { action: "more-info" },
      hold_action: { action: "none" },
      language: "auto",
      ...config,
    };
  }

  getCardSize() { return 5; }
  _t(k) { return localize(this.hass, this._config, k); }
  _num(entity) {
    const st = entity && this.hass.states[entity];
    const v = st ? Number(st.state) : NaN;
    return Number.isFinite(v) ? v : null;
  }

  get _mode() {
    const st = this._config.mode_entity && this.hass.states[this._config.mode_entity];
    return st ? st.state : null;
  }

  get _on() {
    if (this._config.power_entity) {
      const st = this.hass.states[this._config.power_entity];
      return st ? !["off", "unavailable", "unknown"].includes(st.state) : false;
    }
    return this._mode && this._mode !== "off";
  }

  _setMode(mode) {
    const ent = this._config.mode_entity;
    if (!ent) return;
    const domain = ent.split(".")[0];
    if (domain === "select" || domain === "input_select") {
      this.hass.callService(domain, "select_option", { entity_id: ent, option: mode });
    } else if (domain === "fan") {
      this.hass.callService("fan", "set_preset_mode", { entity_id: ent, preset_mode: mode });
    } else if (domain === "climate") {
      this.hass.callService("climate", "set_preset_mode", { entity_id: ent, preset_mode: mode });
    }
  }

  _togglePower() {
    const ent = this._config.power_entity;
    if (ent) {
      this.hass.callService("homeassistant", "toggle", { entity_id: ent });
    } else if (this._config.mode_entity) {
      this._setMode(this._on ? "off" : (this._config.default_mode || "comfort"));
    }
  }

  // ---- settings button: short press / long press -------------------------
  _down(e) {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    this._held = false;
    this._timer = window.setTimeout(() => {
      this._held = true;
      if (navigator.vibrate) navigator.vibrate(30);
      performAction(this, this.hass, this._config.settings_entity || this._config.mode_entity, this._config.hold_action);
    }, Number(this._config.hold_time) || 500);
  }
  _up(e) {
    if (this._timer) { clearTimeout(this._timer); this._timer = null; }
    if (!this._held) {
      e.preventDefault();
      performAction(this, this.hass, this._config.settings_entity || this._config.mode_entity, this._config.tap_action);
    }
    this._held = false;
  }
  _cancel() {
    if (this._timer) { clearTimeout(this._timer); this._timer = null; }
    this._held = false;
  }

  render() {
    if (!this.hass || !this._config) return nothing;
    const on = this._on;
    const mode = this._mode;
    const recup = this._num(this._config.recuperation_entity);
    const speed = this._num(this._config.fan_speed_entity);
    const modes = MODES.filter((m) => this._config[m.cfg] !== false);

    return html`
      <ha-card>
        <div class="header">
          <div class="icon"><ha-icon icon=${this._config.icon || "mdi:fan"}></ha-icon></div>
          <div class="titles">
            <div class="title">${this._config.name || this._t("recuperator")}</div>
            <div class="subtitle">
              ${on ? `${this._t("running")}${mode ? ` · ${this._t(mode)}` : ""}` : this._t("standby")}
            </div>
          </div>
          ${this._config.show_power
            ? html`<button class="power ${on ? "on" : ""}" aria-label=${this._t("power")}
                @click=${this._togglePower}><ha-icon icon="mdi:power"></ha-icon></button>`
            : nothing}
        </div>

        ${this._config.show_recuperation && recup !== null
          ? this._bar(this._t("recuperation"), on ? recup : 0, "perf")
          : nothing}
        ${this._config.show_fan_speed && speed !== null
          ? this._bar(this._t("fan_speed"), on ? speed : 0, mode === "boost" ? "boost" : "")
          : nothing}

        ${modes.length
          ? html`<div class="grid c2">
              ${modes.map((m) => html`
                <button class="mode ${mode === m.id ? "active" : ""} ${m.tone || ""}"
                  @click=${() => this._setMode(m.id)}>
                  <ha-icon icon=${m.icon} style="--mdc-icon-size:18px"></ha-icon>${this._t(m.id)}
                </button>`)}
            </div>`
          : nothing}

        ${this._config.show_settings_button
          ? html`<button class="plain" style="width:100%"
              @pointerdown=${this._down} @pointerup=${this._up}
              @pointerleave=${this._cancel} @pointercancel=${this._cancel}
              @contextmenu=${(e) => e.preventDefault()}>
              <ha-icon icon=${this._config.settings_icon || "mdi:cog"} style="--mdc-icon-size:18px"></ha-icon>
              ${this._config.settings_button_label || this._t("settings")}
            </button>`
          : nothing}
      </ha-card>`;
  }

  _bar(label, value, tone) {
    const v = Math.max(0, Math.min(100, Number(value) || 0));
    return html`
      <div class="bar-wrap">
        <div class="bar-top"><span>${label}</span><span class="val">${Math.round(v)}%</span></div>
        <div class="bar ${tone}"><span style="width:${v}%"></span></div>
      </div>`;
  }
}

customElements.define("alpicair-recuperator-card", AlpicairRecuperatorCard);
