import { LitElement, html, svg, nothing } from "lit";
import { cardStyles } from "../styles.js";
import { UiSettingsMixin } from "../ui-settings.js";
import { localize } from "../localize.js";
import { fireEvent } from "../actions.js";
import "../editors/air-conditioner-editor.js";

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

const START = 215;
const SWEEP = 290;

function polar(cx, cy, r, deg) {
  const rad = ((deg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}
function arcPath(from, to, r = 80) {
  const a = polar(100, 100, r, from);
  const b = polar(100, 100, r, to);
  return `M ${a.x} ${a.y} A ${r} ${r} 0 ${to - from > 180 ? 1 : 0} 1 ${b.x} ${b.y}`;
}

export class AlpicairAirConditionerCard extends UiSettingsMixin(LitElement) {
  static properties = { hass: {}, _config: { state: true }, _pending: { state: true } };
  static styles = cardStyles;

  static getConfigElement() {
    return document.createElement("alpicair-air-conditioner-card-editor");
  }
  static getStubConfig(hass) {
    const entity = Object.keys(hass.states).find((e) => e.startsWith("climate.")) || "";
    return { type: "custom:alpicair-air-conditioner-card", entity };
  }

  setConfig(config) {
    if (!config.entity || !config.entity.startsWith("climate."))
      throw new Error("An entity of domain `climate` is required");
    this._config = {
      show_power: true,
      show_dial: true,
      show_modes: true,
      show_fan: true,
      show_swing_vertical: true,
      show_swing_horizontal: true,
      show_current_temperature: true,
      show_temp_slider: true,
      dial_size: 260,
      language: "auto",
      ...config,
    };
  }

  getCardSize() { return 6; }

  get _stateObj() { return this.hass && this.hass.states[this._config.entity]; }

  _t(key) { return localize(this.hass, this._config, key); }

  _modeLabel(mode) { return this._t(MODE_KEYS[mode] || mode) || mode; }

  _call(service, data) {
    this.hass.callService("climate", service, { entity_id: this._config.entity, ...data });
  }

  _setTemp(value) {
    this._pending = value;
    clearTimeout(this._debounce);
    this._debounce = setTimeout(() => {
      this._call("set_temperature", { temperature: value });
      this._pending = undefined;
    }, 400);
  }

  _commitTemp() {
    clearTimeout(this._debounce);
    if (this._pending == null) return;
    const value = this._pending;
    this._pending = undefined;
    this._call("set_temperature", { temperature: value });
  }

  _dialDrag(ev, min, max, step) {
    const st = this._stateObj;
    if (!st || st.state === "off" || st.state === "unavailable") return;
    ev.preventDefault();
    const rect = ev.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const move = (e) => {
      let deg = (Math.atan2(e.clientX - cx, cy - e.clientY) * 180) / Math.PI;
      if (deg < 0) deg += 360;
      let rel = deg - START;
      if (rel < 0) rel += 360;
      if (rel > SWEEP) rel = rel - SWEEP > (360 - SWEEP) / 2 ? 0 : SWEEP;
      const raw = min + (rel / SWEEP) * (max - min);
      const val = Math.min(max, Math.max(min, Math.round(raw / step) * step));
      this._pending = Number(val.toFixed(2));
    };
    const up = () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
      this._commitTemp();
    };
    move(ev);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", up);
  }

  _togglePower() {
    const st = this._stateObj;
    if (st.state === "off") {
      const back = this._config.default_hvac_mode
        || (st.attributes.hvac_modes || []).find((m) => m !== "off")
        || "auto";
      this._call("set_hvac_mode", { hvac_mode: back });
    } else {
      this._call("set_hvac_mode", { hvac_mode: "off" });
    }
  }

  render() {
    if (!this.hass || !this._config) return nothing;
    const st = this._stateObj;
    if (!st) {
      return html`<ha-card><div class="warn">${this._t("entity_not_found")}: ${this._config.entity}</div></ha-card>`;
    }
    const a = st.attributes;
    const on = st.state !== "off" && st.state !== "unavailable";
    const min = a.min_temp ?? 16;
    const max = a.max_temp ?? 30;
    const step = a.target_temp_step ?? 0.5;
    const target = this._pending ?? a.temperature ?? min;
    const pct = Math.min(1, Math.max(0, (target - min) / (max - min)));
    const angle = START + pct * SWEEP;
    const knob = polar(100, 100, 80, angle);
    const modes = (a.hvac_modes || []).filter((m) => m !== "off");
    const cols = Math.min(5, Math.max(2, modes.length));

    return html`
      <ha-card>
        <div class="header">
          <div class="icon"><ha-icon icon=${this._config.icon || "mdi:air-conditioner"}></ha-icon></div>
          <div class="titles">
            <div class="title">${this._config.name || a.friendly_name || this._t("air_conditioner")}</div>
            <div class="subtitle">${on ? this._modeLabel(st.state) : this._t("off")}</div>
          </div>
          ${this._config.show_power
            ? html`<button class="power ${on ? "on" : ""}" title=${this._t("power")}
                aria-label=${this._t("power")} @click=${this._togglePower}>
                <ha-icon icon="mdi:power"></ha-icon></button>`
            : nothing}
        </div>

        ${this._config.show_dial
          ? html`
            <div class="dial-wrap" style=${`max-width:${this._config.dial_size || 260}px`}>
              <svg viewBox="0 0 200 200" class="dial ${on ? "interactive" : ""}"
                @pointerdown=${(e) => this._dialDrag(e, min, max, step)}>
                ${svg`<path d=${arcPath(START, START + SWEEP)} fill="none" stroke="transparent" stroke-width="34" stroke-linecap="round" />`}
                ${svg`<path d=${arcPath(START, START + SWEEP)} fill="none" stroke="var(--secondary-background-color)" stroke-width="9" stroke-linecap="round" />`}
                ${on ? svg`<path d=${arcPath(START, angle)} fill="none" stroke="var(--primary-color)" stroke-width="9" stroke-linecap="round" />` : nothing}
                ${svg`<circle cx=${knob.x} cy=${knob.y} r="13" fill="var(--card-background-color)" stroke=${on ? "var(--primary-color)" : "var(--disabled-text-color)"} stroke-width="3" />`}
              </svg>
              <div class="dial-center">
                <div class="mode-label">${on ? this._modeLabel(st.state) : this._t("off")}</div>
                <div class="target">${Number(target).toFixed(step < 1 ? 1 : 0)}<sup>°C</sup></div>
                ${this._config.show_current_temperature && a.current_temperature != null
                  ? html`<div class="current"><ha-icon icon="mdi:thermometer" style="--mdc-icon-size:15px"></ha-icon>${a.current_temperature} °C</div>`
                  : nothing}
              </div>
            </div>
            ${this._config.show_temp_slider === false
              ? nothing
              : html`<input type="range" min=${min} max=${max} step=${step} .value=${String(target)}
                  aria-label=${this._t("target_temperature")}
                  @input=${(e) => this._setTemp(Number(e.target.value))} ?disabled=${!on} />`}`
          : nothing}

        ${this._config.show_modes && modes.length
          ? html`<div class="grid c${cols}">
              ${modes.map((m) => html`
                <button class="mode ${on && st.state === m ? "active" : ""}"
                  title=${this._modeLabel(m)} aria-label=${this._modeLabel(m)}
                  @click=${() => this._call("set_hvac_mode", { hvac_mode: m })}>
                  <ha-icon icon=${MODE_ICONS[m] || "mdi:thermostat"}></ha-icon>
                </button>`)}
            </div>`
          : nothing}

        <div class="${on ? "" : "dimmed"}" style="display:flex;flex-direction:column;gap:8px;">
          ${this._config.show_fan && a.fan_modes
            ? this._select("mdi:fan", a.fan_mode, a.fan_modes, (v) => this._call("set_fan_mode", { fan_mode: v }))
            : nothing}
          ${this._config.show_swing_vertical && a.swing_modes
            ? this._select("mdi:arrow-up-down", a.swing_mode, a.swing_modes, (v) => this._call("set_swing_mode", { swing_mode: v }))
            : nothing}
          ${this._config.show_swing_horizontal && a.swing_horizontal_modes
            ? this._select("mdi:arrow-left-right", a.swing_horizontal_mode, a.swing_horizontal_modes,
                (v) => this._call("set_swing_horizontal_mode", { swing_horizontal_mode: v }))
            : nothing}
        </div>
      </ha-card>
    `;
  }

  _select(icon, value, options, onChange) {
    return html`
      <label class="select-row">
        <ha-icon icon=${icon} style="--mdc-icon-size:18px;color:var(--secondary-text-color)"></ha-icon>
        <span class="lbl">${this._t(String(value)) || value}</span>
        <ha-icon icon="mdi:chevron-down" style="--mdc-icon-size:18px;color:var(--secondary-text-color)"></ha-icon>
        <select .value=${value ?? ""} @change=${(e) => onChange(e.target.value)}>
          ${options.map((o) => html`<option value=${o} ?selected=${o === value}>${this._t(o) || o}</option>`)}
        </select>
      </label>`;
  }
}

customElements.define("alpicair-air-conditioner-card", AlpicairAirConditionerCard);
export { fireEvent };
