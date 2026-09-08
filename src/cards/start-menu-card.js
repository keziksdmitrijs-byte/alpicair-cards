import { LitElement, html, nothing } from "lit";
import { cardStyles } from "../styles.js";
import { UiSettingsMixin } from "../ui-settings.js";
import { localize } from "../localize.js";
import { performAction } from "../actions.js";
import "../editors/start-menu-editor.js";

const WEATHER_ICONS = {
  "clear-night": "mdi:weather-night",
  cloudy: "mdi:weather-cloudy",
  exceptional: "mdi:alert-circle-outline",
  fog: "mdi:weather-fog",
  hail: "mdi:weather-hail",
  lightning: "mdi:weather-lightning",
  "lightning-rainy": "mdi:weather-lightning-rainy",
  partlycloudy: "mdi:weather-partly-cloudy",
  pouring: "mdi:weather-pouring",
  rainy: "mdi:weather-rainy",
  snowy: "mdi:weather-snowy",
  "snowy-rainy": "mdi:weather-snowy-rainy",
  sunny: "mdi:weather-sunny",
  windy: "mdi:weather-windy",
  "windy-variant": "mdi:weather-windy-variant",
};

const MENU_ITEMS = [
  { id: "recuperator", icon: "mdi:air-filter", show: "show_recuperator", action: "recuperator_action" },
  { id: "air_conditioner", icon: "mdi:air-conditioner", show: "show_air_conditioner", action: "air_conditioner_action" },
  { id: "heat_pump", icon: "mdi:heat-pump", show: "show_heat_pump", action: "heat_pump_action" },
];

export class AlpicairStartMenuCard extends UiSettingsMixin(LitElement) {
  static properties = { hass: {}, _config: { state: true }, _now: { state: true } };
  static styles = cardStyles;

  static getConfigElement() {
    return document.createElement("alpicair-start-menu-card-editor");
  }
  static getStubConfig(hass) {
    const weather = Object.keys(hass.states).find((e) => e.startsWith("weather.")) || "";
    return { type: "custom:alpicair-start-menu-card", weather_entity: weather };
  }

  setConfig(config) {
    this._config = {
      show_date: true,
      show_seconds: false,
      time_format: "auto",
      time_zone: "",
      time_offset: 0,
      time_entity: "",
      show_weather: true,
      show_recuperator: true,
      show_air_conditioner: true,
      show_heat_pump: true,
      language: "auto",
      recuperator_action: { action: "none" },
      air_conditioner_action: { action: "none" },
      heat_pump_action: { action: "none" },
      menu_action: { action: "none" },
      ...config,
    };
    this._now = new Date();
  }

  connectedCallback() {
    super.connectedCallback();
    this._clockTimer = window.setInterval(() => {
      this._now = new Date();
    }, 1000);
  }
  disconnectedCallback() {
    window.clearInterval(this._clockTimer);
    super.disconnectedCallback();
  }

  getCardSize() { return 4; }
  _t(key) { return localize(this.hass, this._config, key); }
  _locale() {
    const configured = this._config.language;
    const lang = configured && configured !== "auto" ? configured : (this.hass?.language || "en");
    return lang === "ru" ? "ru-RU" : lang === "lv" ? "lv-LV" : lang;
  }
  _act(action) { performAction(this, this.hass, null, action); }

  /** Clock source: an optional entity, otherwise the browser clock, plus offset. */
  _clock() {
    let base = this._now || new Date();
    const ent = this._config.time_entity && this.hass.states[this._config.time_entity];
    if (ent) {
      const raw = ent.attributes?.timestamp ?? ent.state;
      const parsed = /^\d{1,2}:\d{2}(:\d{2})?$/.test(String(raw))
        ? new Date(`${base.toISOString().slice(0, 10)}T${String(raw).padStart(5, "0")}`)
        : new Date(raw);
      if (!Number.isNaN(parsed.getTime())) base = parsed;
    }
    const offset = Number(this._config.time_offset) || 0;
    return offset ? new Date(base.getTime() + offset * 60000) : base;
  }

  _timeOptions() {
    const fmt = this._config.time_format;
    const opts = { hour: "2-digit", minute: "2-digit" };
    if (this._config.show_seconds) opts.second = "2-digit";
    if (fmt === "12") { opts.hour12 = true; opts.hour = "numeric"; }
    else if (fmt === "24") { opts.hourCycle = "h23"; opts.hour12 = false; }
    const tz = (this._config.time_zone || "").trim();
    if (tz) opts.timeZone = tz;
    return opts;
  }

  render() {
    if (!this.hass || !this._config) return nothing;
    const now = this._clock();
    const locale = this._locale();
    const weather = this._config.weather_entity ? this.hass.states[this._config.weather_entity] : null;
    const temperature = weather?.attributes?.temperature;
    const unit = weather?.attributes?.temperature_unit || this.hass.config?.unit_system?.temperature || "°C";
    const visibleItems = MENU_ITEMS.filter((item) => this._config[item.show] !== false);

    return html`<ha-card class="start-menu-card">
      <div class="start-top">
        <div class="start-time-block">
          ${this._config.name ? html`<div class="start-name">${this._config.name}</div>` : nothing}
          <time class="start-time">${new Intl.DateTimeFormat(locale, this._timeOptions()).format(now)}</time>
          ${this._config.show_date !== false
            ? html`<div class="start-date">${new Intl.DateTimeFormat(locale, { weekday: "long", day: "numeric", month: "long", ...(this._config.time_zone ? { timeZone: this._config.time_zone } : {}) }).format(now)}</div>`
            : nothing}
        </div>
        ${this._config.show_weather !== false
          ? html`<div class="start-weather">
              <ha-icon icon=${WEATHER_ICONS[weather?.state] || "mdi:weather-partly-cloudy"}></ha-icon>
              <span class="start-weather-temp">${temperature != null ? `${temperature}${unit}` : "—"}</span>
              <span class="start-weather-state">${weather ? (this.hass.formatEntityState?.(weather) || weather.state) : this._t("weather")}</span>
            </div>`
          : nothing}
      </div>

      <div class="start-actions">
        ${visibleItems.map((item) => html`
          <button class="start-action" @click=${() => this._act(this._config[item.action])}>
            <ha-icon icon=${item.icon}></ha-icon>
            <span>${this._t(item.id)}</span>
            <ha-icon class="start-chevron" icon="mdi:chevron-right"></ha-icon>
          </button>`)}
        <button class="start-action menu" @click=${() => this._act(this._config.menu_action)}>
          <ha-icon icon="mdi:menu"></ha-icon>
          <span>${this._t("menu")}</span>
          <ha-icon class="start-chevron" icon="mdi:chevron-right"></ha-icon>
        </button>
      </div>
    </ha-card>`;
  }
}

customElements.define("alpicair-start-menu-card", AlpicairStartMenuCard);