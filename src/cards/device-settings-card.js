import { LitElement, html, nothing } from "lit";
import { cardStyles } from "../styles.js";
import { UiSettingsMixin } from "../ui-settings.js";
import { localize } from "../localize.js";
import { performAction, pressHandlers } from "../actions.js";
import "../editors/device-settings-editor.js";

const NC_FIELDS = [
  { cfg: "nc_extract_start_entity", key: "nc_extract_start", min: 13, max: 30 },
  { cfg: "nc_extract_stop_entity", key: "nc_extract_stop", min: 13, max: 30 },
  { cfg: "nc_outdoor_stop_entity", key: "nc_outdoor_stop", min: 0, max: 30 },
  { cfg: "nc_supply_setpoint_entity", key: "nc_supply_setpoint", min: 0, max: 30 },
];

const FAN_GROUPS = [
  { id: "building_protection", supply: "bp_supply_entity", exhaust: "bp_exhaust_entity" },
  { id: "economy", supply: "eco_supply_entity", exhaust: "eco_exhaust_entity" },
  { id: "comfort", supply: "comfort_supply_entity", exhaust: "comfort_exhaust_entity" },
  { id: "boost", supply: "boost_supply_entity", exhaust: "boost_exhaust_entity" },
];

export class AlpicairDeviceSettingsCard extends UiSettingsMixin(LitElement) {
  static properties = { hass: {}, _config: { state: true } };
  static styles = cardStyles;

  static getConfigElement() { return document.createElement("alpicair-device-settings-card-editor"); }
  static getStubConfig() { return { type: "custom:alpicair-device-settings-card" }; }

  setConfig(config) {
    this._config = {
      show_night_cooling: true,
      show_fan_speeds: true,
      show_date_time: true,
      show_back_button: true,
      back_icon: "mdi:chevron-left",
      hold_time: 500,
      back_tap_action: { action: "none" },
      back_hold_action: { action: "none" },
      language: "auto",
      ...config,
    };
  }

  getCardSize() { return 10; }
  _t(k) { return localize(this.hass, this._config, k); }
  _st(id) { return id && this.hass.states[id]; }

  _setNumber(entity, value) {
    const domain = entity.split(".")[0];
    this.hass.callService(domain, "set_value", { entity_id: entity, value });
  }
  _setTime(entity, value) {
    const domain = entity.split(".")[0];
    this.hass.callService(domain, "set_value", { entity_id: entity, [domain === "input_datetime" ? "time" : "value"]: value });
  }

  _backButton() {
    const c = this._config;
    if (c.show_back_button === false) return nothing;
    const target = c.back_entity;
    const h = pressHandlers(
      () => performAction(this, this.hass, target, c.back_tap_action),
      () => performAction(this, this.hass, target, c.back_hold_action),
      Number(c.hold_time) || 500,
    );
    return html`<button class="power" aria-label=${this._t("back")}
      @pointerdown=${h["@pointerdown"]} @pointerup=${h["@pointerup"]}
      @pointerleave=${h["@pointerleave"]} @pointercancel=${h["@pointercancel"]}
      @contextmenu=${h["@contextmenu"]}>
      <ha-icon icon=${c.back_icon || "mdi:chevron-left"}></ha-icon>
    </button>`;
  }

  render() {
    if (!this.hass || !this._config) return nothing;
    return html`
      <ha-card>
        <div class="header">
          <div class="icon"><ha-icon icon=${this._config.icon || "mdi:tune"}></ha-icon></div>
          <div class="titles">
            <div class="title">${this._config.name || this._t("device_settings")}</div>
          </div>
          ${this._backButton()}
        </div>

        ${this._config.show_night_cooling ? this._nightCooling() : nothing}
        ${this._config.show_fan_speeds ? this._fanSpeeds() : nothing}
        ${this._config.show_date_time ? this._dateTime() : nothing}
      </ha-card>`;
  }

  _nightCooling() {
    const rows = NC_FIELDS.filter((f) => this._st(this._config[f.cfg]));
    const startEnt = this._st(this._config.nc_start_time_entity);
    const stopEnt = this._st(this._config.nc_stop_time_entity);
    const toggle = this._st(this._config.night_cooling_entity);
    if (!rows.length && !startEnt && !stopEnt && !toggle) return nothing;
    const on = !toggle || toggle.state === "on";

    return html`
      ${toggle
        ? html`<div class="select-row">
            <ha-icon icon="mdi:weather-night" style="--mdc-icon-size:20px;color:var(--primary-color)"></ha-icon>
            <span class="lbl">${this._t("night_cooling")}</span>
            <ha-switch .checked=${toggle.state === "on"}
              @change=${() => this.hass.callService("homeassistant", "toggle", { entity_id: this._config.night_cooling_entity })}></ha-switch>
          </div>`
        : nothing}

      <div class="panel ${on ? "" : "dimmed"}">
        <div class="section-title">${this._t("night_cooling_schedule") || this._t("night_cooling")}</div>
        ${startEnt || stopEnt
          ? html`<div class="grid c2">
              ${startEnt ? this._timeField(this._t("start_time"), this._config.nc_start_time_entity, startEnt) : nothing}
              ${stopEnt ? this._timeField(this._t("stop_time"), this._config.nc_stop_time_entity, stopEnt) : nothing}
            </div>`
          : nothing}
        ${rows.map((f) => {
          const st = this._st(this._config[f.cfg]);
          const step = Number(st.attributes.step) || 0.5;
          const min = Number(st.attributes.min ?? f.min);
          const max = Number(st.attributes.max ?? f.max);
          const val = Number(st.state);
          const clamp = (v) => Math.min(max, Math.max(min, Math.round(v * 10) / 10));
          return html`
            <div class="tempstep">
              <span class="lbl">${this._t(f.key)}</span>
              <span class="v heat">${val.toFixed(1)}°</span>
              <button class="stepbtn" aria-label="−"
                @click=${() => this._setNumber(this._config[f.cfg], clamp(val - step))}>−</button>
              <button class="stepbtn" aria-label="+"
                @click=${() => this._setNumber(this._config[f.cfg], clamp(val + step))}>+</button>
            </div>`;
        })}
      </div>`;
  }

  _timeField(label, entity, st) {
    const value = (st.state || "").slice(0, 5);
    return html`
      <div class="field">
        <span class="flabel"><ha-icon icon="mdi:clock-outline" style="--mdc-icon-size:14px"></ha-icon>${label}</span>
        <input type="time" .value=${value}
          @change=${(e) => this._setTime(entity, `${e.target.value}:00`)} />
      </div>`;
  }

  _fanSpeeds() {
    const groups = FAN_GROUPS.filter((g) => this._st(this._config[g.supply]) || this._st(this._config[g.exhaust]));
    if (!groups.length) return nothing;
    return html`
      ${groups.map((g) => html`
        <div class="panel">
          <div class="section-title">${this._t(g.id)}</div>
          ${this._speedSlider(this._config[g.supply], this._t("supply"))}
          ${this._speedSlider(this._config[g.exhaust], this._t("exhaust"))}
        </div>`)}`;
  }

  _speedSlider(entity, label) {
    const st = this._st(entity);
    if (!st) return nothing;
    const min = Number(st.attributes.min ?? 0);
    const max = Number(st.attributes.max ?? 100);
    const step = Number(st.attributes.step ?? 1);
    const val = Number(st.state);
    return html`
      <div class="slider-row">
        <div class="bar-top"><span>${label}</span><span class="val">${val}%</span></div>
        <input type="range" min=${min} max=${max} step=${step} .value=${String(val)} aria-label=${label}
          @change=${(e) => this._setNumber(entity, Number(e.target.value))} />
      </div>`;
  }

  _dateTime() {
    const dateSt = this._st(this._config.date_entity);
    const timeSt = this._st(this._config.time_entity);
    if (!dateSt && !timeSt) return nothing;
    return html`
      <div class="panel">
        <div class="section-title">${this._t("date_time")}</div>
        <div class="grid c2">
          ${dateSt
            ? html`<div class="field">
                <span class="flabel"><ha-icon icon="mdi:calendar" style="--mdc-icon-size:14px"></ha-icon>${this._t("date")}</span>
                <input type="date" .value=${(dateSt.state || "").slice(0, 10)}
                  @change=${(e) => this.hass.callService(this._config.date_entity.split(".")[0], "set_value",
                    { entity_id: this._config.date_entity, date: e.target.value })} />
              </div>`
            : nothing}
          ${timeSt ? this._timeField(this._t("time"), this._config.time_entity, timeSt) : nothing}
        </div>
        <button class="plain" style="width:100%;flex-direction:row" @click=${this._syncNow}>
          <ha-icon icon="mdi:clock-check" style="--mdc-icon-size:18px"></ha-icon>${this._t("sync_time")}
        </button>
      </div>`;
  }

  _syncNow() {
    const now = new Date();
    const pad = (n) => String(n).padStart(2, "0");
    if (this._config.date_entity) {
      this.hass.callService(this._config.date_entity.split(".")[0], "set_value", {
        entity_id: this._config.date_entity,
        date: `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`,
      });
    }
    if (this._config.time_entity) {
      this._setTime(this._config.time_entity, `${pad(now.getHours())}:${pad(now.getMinutes())}:00`);
    }
  }
}

customElements.define("alpicair-device-settings-card", AlpicairDeviceSettingsCard);
