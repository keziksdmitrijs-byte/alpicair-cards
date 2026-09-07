import { LitElement, html, svg, nothing } from "lit";
import { cardStyles } from "../styles.js";
import { UiSettingsMixin } from "../ui-settings.js";
import { localize } from "../localize.js";
import { PanelMixin, panelBackdrop, panelHeader, ringOverlay } from "../panel.js";
import "../editors/ac-panel-editor.js";

const MODE_ICONS = {
  off: "mdi:power",
  fan_only: "mdi:fan",
  dry: "mdi:water-percent",
  cool: "mdi:snowflake",
  heat: "mdi:fire",
  heat_cool: "mdi:autorenew",
  auto: "mdi:autorenew",
};

const MODE_KEYS = {
  off: "off", fan_only: "fan_only", dry: "dry", cool: "cool",
  heat: "heat", heat_cool: "auto", auto: "auto",
};

const SWING_V_ICON = "mdi:arrow-up-down";
const SWING_H_ICON = "mdi:arrow-left-right";

export class AlpicairAcPanelCard extends PanelMixin(UiSettingsMixin(LitElement)) {
  static properties = {
    hass: {},
    _config: { state: true },
    _pending: { state: true },
    _sheet: { state: true },
  };
  static styles = cardStyles;

  static getConfigElement() {
    return document.createElement("alpicair-ac-panel-card-editor");
  }
  static getStubConfig(hass) {
    const entity = Object.keys(hass.states).find((e) => e.startsWith("climate.")) || "";
    return { type: "custom:alpicair-ac-panel-card", entity };
  }

  setConfig(config) {
    if (!config.entity || !config.entity.startsWith("climate."))
      throw new Error("An entity of domain `climate` is required");
    this._config = {
      show_power: true,
      show_mode: true,
      show_fan: true,
      show_swing_vertical: true,
      show_swing_horizontal: true,
      show_current_temperature: true,
      ring_size: 260,
      ring_thickness: 18,
      language: "auto",
      ...config,
    };
  }

  getCardSize() { return 6; }
  _t(k) { return localize(this.hass, this._config, k); }
  get _stateObj() { return this.hass && this.hass.states[this._config.entity]; }

  _modeLabel(mode) { return this._t(MODE_KEYS[mode] || mode) || mode; }

  _call(service, data) {
    this.hass.callService("climate", service, { entity_id: this._config.entity, ...data });
  }

  get _panelOn() {
    const st = this._stateObj;
    return !!st && st.state !== "off" && st.state !== "unavailable" && st.state !== "unknown";
  }

  _togglePower() {
    const st = this._stateObj;
    if (!st) return;
    if (st.state === "off") {
      const back = this._config.default_hvac_mode
        || (st.attributes.hvac_modes || []).find((m) => m !== "off")
        || "auto";
      this._call("set_hvac_mode", { hvac_mode: back });
    } else {
      this._call("set_hvac_mode", { hvac_mode: "off" });
    }
  }

  get _target() { return this._pending ?? this._stateObj?.attributes?.temperature; }
  _setTarget(v) {
    const a = this._stateObj?.attributes || {};
    const min = a.min_temp ?? 16;
    const max = a.max_temp ?? 30;
    const clamped = Math.min(max, Math.max(min, v));
    this._pending = clamped;
    clearTimeout(this._d);
    this._d = setTimeout(() => {
      this._call("set_temperature", { temperature: clamped });
      this._pending = undefined;
    }, 400);
  }

  get _hasOpenPanel() { return this._sheet != null; }
  _closePanels() { this._sheet = null; }
  _toggle(sheet) { this._sheet = this._sheet === sheet ? null : sheet; }

  render() {
    if (!this.hass || !this._config) return nothing;
    const st = this._stateObj;
    if (!st) return html`<ha-card><div class="warn">${this._t("entity_not_found")}: ${this._config.entity}</div></ha-card>`;
    const a = st.attributes || {};
    const on = this._panelOn;
    const min = a.min_temp ?? 16;
    const max = a.max_temp ?? 30;
    const step = a.target_temp_step ?? 0.5;
    const target = this._target ?? min;
    const pct = Math.min(1, Math.max(0, (target - min) / (max - min)));
    const size = Number(this._config.ring_size) || 260;
    const thickness = Number(this._config.ring_thickness) || 18;
    const r = (size - thickness) / 2 - 2;
    const c = 2 * Math.PI * r;
    const ringColor = !on ? "var(--disabled-text-color)"
      : st.state === "cool" ? "var(--alp-cool, #039be5)"
      : st.state === "heat" ? "var(--alp-heat, #e74c3c)"
      : "var(--primary-color)";
    const current = a.current_temperature;

    const tiles = [];
    if (this._config.show_mode) tiles.push({ id: "mode", icon: "mdi:tune", value: on ? this._modeLabel(st.state) : this._t("off"), label: this._t("settings") });
    if (this._config.show_fan && a.fan_modes) tiles.push({ id: "fan", icon: "mdi:fan", value: this._t(a.fan_mode) || a.fan_mode || "—", label: this._t("fan_speed") });
    if (this._config.show_swing_vertical && a.swing_modes) tiles.push({ id: "swing_v", icon: SWING_V_ICON, value: this._t(a.swing_mode) || a.swing_mode || "—", label: this._t("swing_vertical") });
    if (this._config.show_swing_horizontal && a.swing_horizontal_modes) tiles.push({ id: "swing_h", icon: SWING_H_ICON, value: this._t(a.swing_horizontal_mode) || a.swing_horizontal_mode || "—", label: this._t("swing_horizontal") });

    return html`
      <ha-card class="panel-card">
        ${this._sheet ? panelBackdrop(this) : nothing}
        ${this._config.show_power !== false || this._config.back_path || this._config.back_action
          ? panelHeader(this) : nothing}

        <div class="ring-wrap" style=${`width:${size}px;height:${size}px`}>
          <svg width=${size} height=${size} class="ring" style="transform:rotate(-90deg)">
            ${svg`<circle cx=${size / 2} cy=${size / 2} r=${r} fill="none"
              stroke-width=${thickness} stroke-linecap="round" style="stroke:var(--secondary-background-color)" />`}
            ${svg`<circle cx=${size / 2} cy=${size / 2} r=${r} fill="none"
              stroke-width=${thickness} stroke-linecap="round"
              stroke-dasharray=${c} stroke-dashoffset=${c * (1 - (on ? pct : 0))}
              style=${`stroke:${ringColor};transition:stroke-dashoffset .5s, stroke .3s`} />`}
          </svg>

          <button class="ring-center" @click=${() => this._toggle("temp")}>
            <span class="rc-cap">${this._t("target_temperature")}</span>
            <span class="rc-target">${Number(target).toFixed(step < 1 ? 1 : 0)}°</span>
            <span class="rc-sub">${this._config.show_current_temperature && current != null ? `${this._t("current")} ${current}° · ` : ""}${on ? this._modeLabel(st.state) : this._t("off")}</span>
          </button>

          ${this._sheet === "temp"
            ? ringOverlay(this, () => this._sheet = null, html`
                <div class="ring-temp-edit">
                  <button class="stepbtn round" @click=${() => this._setTarget(Number(target) - step)}>−</button>
                  <span class="rte-val">${Number(target).toFixed(step < 1 ? 1 : 0)}°</span>
                  <button class="stepbtn round" @click=${() => this._setTarget(Number(target) + step)}>+</button>
                </div>`)
            : nothing}
        </div>

        ${tiles.length
          ? html`<div class="tilezone">
              <div class="grid c${Math.min(4, tiles.length)} ring-tiles ${this._sheet && this._sheet !== "temp" ? "dimmed" : ""}">
                ${tiles.map((t2) => html`
                  <button class="tile ${this._sheet === t2.id ? "sel" : ""}" @click=${() => this._toggle(t2.id)}>
                    <span class="tile-icon"><ha-icon icon=${t2.icon} style="--mdc-icon-size:18px"></ha-icon></span>
                    <span class="tile-val">${t2.value}</span>
                  </button>`)}
              </div>
              ${this._sheet === "mode"
                ? this._optionRow((a.hvac_modes || []).filter((m) => m !== "off"),
                    (m) => this._call("set_hvac_mode", { hvac_mode: m }),
                    (m) => st.state === m, (m) => this._modeLabel(m), (m) => MODE_ICONS[m] || "mdi:thermostat")
                : nothing}
              ${this._sheet === "fan"
                ? this._optionRow(a.fan_modes || [], (v) => this._call("set_fan_mode", { fan_mode: v }),
                    (v) => a.fan_mode === v, (v) => this._t(v) || v, () => "mdi:fan")
                : nothing}
              ${this._sheet === "swing_v"
                ? this._optionRow(a.swing_modes || [], (v) => this._call("set_swing_mode", { swing_mode: v }),
                    (v) => a.swing_mode === v, (v) => this._t(v) || v, () => SWING_V_ICON)
                : nothing}
              ${this._sheet === "swing_h"
                ? this._optionRow(a.swing_horizontal_modes || [], (v) => this._call("set_swing_horizontal_mode", { swing_horizontal_mode: v }),
                    (v) => a.swing_horizontal_mode === v, (v) => this._t(v) || v, () => SWING_H_ICON)
                : nothing}
            </div>`
          : nothing}

      </ha-card>`;
  }

  _optionRow(options, onSelect, isActive, label, icon) {
    return html`<div class="opt-row floating">

      ${options.map((o) => html`
        <button class="opt ${isActive(o) ? "active" : ""}" @click=${() => { onSelect(o); this._sheet = null; }}>
          <ha-icon icon=${icon(o)} style="--mdc-icon-size:18px"></ha-icon><span>${label(o)}</span>
        </button>`)}
    </div>`;
  }
}

customElements.define("alpicair-ac-panel-card", AlpicairAcPanelCard);
