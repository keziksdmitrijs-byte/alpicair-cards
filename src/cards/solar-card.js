import { LitElement, html, svg, nothing } from "lit";
import { cardStyles } from "../styles.js";
import { UiSettingsMixin } from "../ui-settings.js";
import { localize } from "../localize.js";
import { PanelMixin, panelBackdrop, panelHeader, ringOverlay } from "../panel.js";
import "../editors/solar-editor.js";

export class AlpicairSolarCard extends PanelMixin(UiSettingsMixin(LitElement)) {
  static properties = { hass: {}, _config: { state: true }, _sheet: { state: true } };
  static styles = cardStyles;

  static getConfigElement() {
    return document.createElement("alpicair-solar-card-editor");
  }
  static getStubConfig() {
    return { type: "custom:alpicair-solar-card" };
  }

  setConfig(config) {
    this._config = {
      show_power: true,
      show_battery: true,
      show_grid: true,
      show_house: true,
      peak_power: 6,
      decimals: 2,
      ring_size: 260,
      ring_thickness: 18,
      invert_grid: false,
      invert_battery: false,
      language: "auto",
      ...config,
    };
  }

  get _defaultTitle() { return "solar_station"; }
  getCardSize() { return 6; }
  _t(k) { return localize(this.hass, this._config, k); }
  _svgColor(name, fallback) {
    const value = getComputedStyle(this).getPropertyValue(name).trim();
    return value && !value.includes("var(") ? value : fallback;
  }
  _st(id) { return id && this.hass && this.hass.states[id]; }
  _num(id) {
    const st = this._st(id);
    if (!st) return null;
    const v = Number(st.state);
    return Number.isFinite(v) ? v : null;
  }
  /** Power in kW; sensors reporting W are converted automatically. */
  _kw(id) {
    const st = this._st(id);
    if (!st) return null;
    const v = Number(st.state);
    if (!Number.isFinite(v)) return null;
    const unit = (st.attributes && st.attributes.unit_of_measurement) || "";
    return /^w$/i.test(unit.trim()) ? v / 1000 : v;
  }
  _fmt(v, unit) {
    if (v == null) return "—";
    const dec = Number(this._config.decimals ?? 2);
    return `${v.toFixed(dec)} ${unit}`;
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

  get _hasOpenPanel() { return this._sheet != null; }
  _closePanels() { this._sheet = null; }
  _toggleSheet(sheet) { this._sheet = this._sheet === sheet ? null : sheet; }

  get _production() { return this._kw(this._config.production_entity) ?? 0; }
  get _peak() {
    const fromEntity = this._kw(this._config.peak_power_entity);
    const v = fromEntity ?? Number(this._config.peak_power);
    return Number.isFinite(v) && v > 0 ? v : 6;
  }
  /** Grid power: positive = exporting to the grid. */
  get _grid() {
    const v = this._kw(this._config.grid_power_entity);
    if (v == null) return null;
    return this._config.invert_grid ? -v : v;
  }
  /** Battery power: positive = charging. */
  get _batteryPower() {
    const v = this._kw(this._config.battery_power_entity);
    if (v == null) return null;
    return this._config.invert_battery ? -v : v;
  }

  _statRows(rows) {
    return html`<div class="opt-row floating stat-pop">
      ${rows.map((r) => html`<div class="stat-row">
        <span class="sr-label">${r.label}</span>
        <span class="sr-val ${r.tone || ""}">${r.value}</span>
      </div>`)}
    </div>`;
  }

  render() {
    if (!this.hass || !this._config) return nothing;
    const c = this._config;
    const on = this._panelOn;
    const prod = this._production;
    const peak = this._peak;
    const pct = Math.min(1, Math.max(0, prod / peak));
    const size = Number(c.ring_size) || 260;
    const thickness = Number(c.ring_thickness) || 18;
    const r = (size - thickness) / 2 - 2;
    const circ = 2 * Math.PI * r;
    const ringColor = on && prod > 0
      ? this._svgColor("--primary-color", "#03a9f4")
      : this._svgColor("--disabled-text-color", "#9e9e9e");
    const trackColor = this._svgColor("--secondary-background-color", "#e5e7eb");

    const battery = this._num(c.battery_level_entity);
    const batPower = this._batteryPower;
    const grid = this._grid;
    const house = this._kw(c.house_power_entity);

    const batTone = batPower == null || Math.abs(batPower) < 0.02 ? "" : batPower > 0 ? "good" : "bad";
    const gridTone = grid == null || Math.abs(grid) < 0.02 ? "" : grid > 0 ? "good" : "bad";

    return html`
      <ha-card class="panel-card">
        ${this._sheet ? panelBackdrop(this) : nothing}
        ${panelHeader(this, { power: false })}

        <div class="ring-wrap" style=${`width:${size}px;height:${size}px;--alp-ring-inset:${thickness + 10}px`}>
          <svg width=${size} height=${size} class="ring" style="transform:rotate(-90deg)">
            ${svg`<circle cx=${size / 2} cy=${size / 2} r=${r} fill="none"
              stroke=${trackColor} stroke-width=${thickness} stroke-linecap="round" />`}
            ${svg`<circle cx=${size / 2} cy=${size / 2} r=${r} fill="none"
              stroke-width=${thickness} stroke-linecap="round"
              stroke-dasharray=${circ} stroke-dashoffset=${circ * (1 - (on ? pct : 0))}
              stroke=${ringColor} style="transition:stroke-dashoffset .5s, stroke .3s" />`}
          </svg>

          <button class="ring-center" @click=${() => this._toggleSheet("prod")}>
            <span class="rc-cap"><ha-icon icon="mdi:solar-power-variant" style="--mdc-icon-size:16px"></ha-icon> ${this._t("production")}</span>
            <span class="rc-target" style=${on ? "color:var(--primary-color)" : ""}>${this._fmt(prod, "")}</span>
            <span class="rc-sub">${this._t("kw")} · ${this._t("peak_power")} ${peak} ${this._t("kw")}</span>
          </button>

          ${this._sheet === "prod"
            ? ringOverlay(this, () => (this._sheet = null), html`
                <div class="ring-target-rows">
                  <div class="rt-row">
                    <span class="rt-inner">
                      <span class="rt-label">${this._t("today")}</span>
                      <span class="rt-val">${this._fmt(this._num(c.production_today_entity), this._t("kwh"))}</span>
                    </span>
                  </div>
                  <div class="rt-row">
                    <span class="rt-inner">
                      <span class="rt-label">${this._t("this_month")}</span>
                      <span class="rt-val">${this._fmt(this._num(c.production_month_entity), this._t("kwh"))}</span>
                    </span>
                  </div>
                </div>`)
            : nothing}
        </div>

        <div class="tilezone">
          <div class="grid c3 ring-tiles ${this._sheet && this._sheet !== "prod" ? "dimmed" : ""}">
            ${c.show_battery !== false
              ? html`<button class="tile ${batTone} ${this._sheet === "battery" ? "sel" : ""}"
                  @click=${() => this._toggleSheet("battery")}>
                  <span class="tile-icon"><ha-icon icon="mdi:battery-charging" style="--mdc-icon-size:18px"></ha-icon></span>
                  <span class="tile-val">${battery != null ? `${Math.round(battery)} %` : "—"}</span>
                  <span class="tile-cap">${this._t("battery")}</span>
                </button>`
              : nothing}
            ${c.show_grid !== false
              ? html`<button class="tile ${gridTone} ${this._sheet === "grid" ? "sel" : ""}"
                  @click=${() => this._toggleSheet("grid")}>
                  <span class="tile-icon"><ha-icon icon="mdi:transmission-tower" style="--mdc-icon-size:18px"></ha-icon></span>
                  <span class="tile-val">${this._fmt(grid == null ? null : Math.abs(grid), this._t("kw"))}</span>
                  <span class="tile-cap">${grid != null && grid < 0 ? this._t("from_grid") : this._t("to_grid")}</span>
                </button>`
              : nothing}
            ${c.show_house !== false
              ? html`<button class="tile ${this._sheet === "house" ? "sel" : ""}"
                  @click=${() => this._toggleSheet("house")}>
                  <span class="tile-icon"><ha-icon icon="mdi:home-lightning-bolt" style="--mdc-icon-size:18px"></ha-icon></span>
                  <span class="tile-val">${this._fmt(house, this._t("kw"))}</span>
                  <span class="tile-cap">${this._t("house")}</span>
                </button>`
              : nothing}
          </div>

          ${this._sheet === "battery"
            ? this._statRows([
                { label: this._t("battery"), value: battery != null ? `${Math.round(battery)} %` : "—" },
                {
                  label: batPower == null || batPower >= 0 ? this._t("charging") : this._t("discharging"),
                  value: this._fmt(batPower == null ? null : Math.abs(batPower), this._t("kw")),
                  tone: batTone,
                },
              ])
            : nothing}

          ${this._sheet === "grid"
            ? this._statRows([
                { label: `${this._t("to_grid")} · ${this._t("today")}`, value: this._fmt(this._num(c.export_today_entity), this._t("kwh")), tone: "good" },
                { label: `${this._t("to_grid")} · ${this._t("this_month")}`, value: this._fmt(this._num(c.export_month_entity), this._t("kwh")), tone: "good" },
                { label: `${this._t("from_grid")} · ${this._t("today")}`, value: this._fmt(this._num(c.import_today_entity), this._t("kwh")), tone: "bad" },
                { label: `${this._t("from_grid")} · ${this._t("this_month")}`, value: this._fmt(this._num(c.import_month_entity), this._t("kwh")), tone: "bad" },
              ])
            : nothing}

          ${this._sheet === "house"
            ? this._statRows([
                { label: `${this._t("house")} · ${this._t("today")}`, value: this._fmt(this._num(c.house_today_entity), this._t("kwh")) },
                { label: `${this._t("house")} · ${this._t("this_month")}`, value: this._fmt(this._num(c.house_month_entity), this._t("kwh")) },
              ])
            : nothing}
        </div>
      </ha-card>`;
  }
}

customElements.define("alpicair-solar-card", AlpicairSolarCard);
