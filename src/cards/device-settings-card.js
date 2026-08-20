import { LitElement, html, nothing } from "lit";
import { cardStyles } from "../styles.js";
import { UiSettingsMixin } from "../ui-settings.js";
import { localize } from "../localize.js";
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

  render() {
    if (!this.hass || !this._config) return nothing;
    return html`
      <ha-card>
        <div class="header">
          <div class="icon"><ha-icon icon=${this._config.icon || "mdi:tune"}></ha-icon></div>
          <div class="titles">
            <div class="title">${this._config.name || this._t("device_settings")}</div>
          </div>
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

    return html`
      <div style="display:flex;flex-direction:column;gap:10px">
        <div class="section-title">${this._t("night_cooling")}</div>
        ${toggle
          ? html`<div class="select-row">
              <span class="lbl">${this._t("night_cooling")}</span>
              <ha-switch .checked=${toggle.state === "on"}
                @change=${() => this.hass.callService("homeassistant", "toggle", { entity_id: this._config.night_cooling_entity })}></ha-switch>
            </div>`
          : nothing}
        <div class="grid c2">
          ${startEnt ? this._timeInput(this._t("start_time"), this._config.nc_start_time_entity, startEnt) : nothing}
          ${stopEnt ? this._timeInput(this._t("stop_time"), this._config.nc_stop_time_entity, stopEnt) : nothing}
        </div>
        ${rows.map((f) => {
          const st = this._st(this._config[f.cfg]);
          const step = Number(st.attributes.step) || 0.1;
          const val = Number(st.state);
          return html`
            <div class="bar-wrap">
              <div class="bar-top"><span>${this._t(f.key)}</span><span class="val">${val.toFixed(1)} °C</span></div>
              <div class="stepper">
                <button @click=${() => this._setNumber(this._config[f.cfg], +(val - step).toFixed(1))}>−</button>
                <span class="v">${val.toFixed(1)} °C</span>
                <button @click=${() => this._setNumber(this._config[f.cfg], +(val + step).toFixed(1))}>+</button>
              </div>
            </div>`;
        })}
      </div>`;
  }

  _timeInput(label, entity, st) {
    const value = (st.attributes.timestamp != null && st.state.length > 5) ? st.state.slice(0, 5) : st.state;
    return html`
      <div class="slider-row">
        <div class="section-title">${label}</div>
        <input type="time" .value=${value}
          @change=${(e) => this._setTime(entity, `${e.target.value}:00`)}
          style="width:100%;padding:9px 10px;border-radius:12px;border:1px solid var(--divider-color);background:var(--secondary-background-color);color:var(--primary-text-color)" />
      </div>`;
  }

  _fanSpeeds() {
    const groups = FAN_GROUPS.filter((g) => this._st(this._config[g.supply]) || this._st(this._config[g.exhaust]));
    if (!groups.length) return nothing;
    return html`
      <div style="display:flex;flex-direction:column;gap:12px">
        <div class="section-title">${this._t("fan_speed")}</div>
        ${groups.map((g) => html`
          <div style="display:flex;flex-direction:column;gap:8px">
            <div style="font-size:13px;font-weight:700">${this._t(g.id)}</div>
            ${this._speedSlider(this._config[g.supply], this._t("supply"))}
            ${this._speedSlider(this._config[g.exhaust], this._t("exhaust"))}
          </div>`)}
      </div>`;
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
      <div style="display:flex;flex-direction:column;gap:10px">
        <div class="section-title">${this._t("date_time")}</div>
        <div class="grid c2">
          ${dateSt
            ? html`<div class="slider-row">
                <div class="section-title">${this._t("date")}</div>
                <input type="date" .value=${dateSt.state}
                  @change=${(e) => this.hass.callService(this._config.date_entity.split(".")[0], "set_value",
                    { entity_id: this._config.date_entity, date: e.target.value })}
                  style="width:100%;padding:9px 10px;border-radius:12px;border:1px solid var(--divider-color);background:var(--secondary-background-color);color:var(--primary-text-color)" />
              </div>`
            : nothing}
          ${timeSt ? this._timeInput(this._t("time"), this._config.time_entity, timeSt) : nothing}
        </div>
        ${this._config.sync_action_entity || (dateSt && timeSt)
          ? html`<button class="plain" style="width:100%" @click=${this._syncNow}>
              <ha-icon icon="mdi:clock-check" style="--mdc-icon-size:18px"></ha-icon>${this._t("sync_time")}
            </button>`
          : nothing}
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
