import { LitElement, html, nothing } from "lit";
import { cardStyles } from "../styles.js";
import { localize } from "../localize.js";
import { UiSettingsMixin, getUiSettings, setUiSettings, resetUiSettings } from "../ui-settings.js";
import { performAction, pressHandlers } from "../actions.js";
import "../editors/ui-settings-editor.js";

const LANGS = [
  { id: "auto", label: "Auto" },
  { id: "en", label: "English" },
  { id: "ru", label: "Русский" },
  { id: "lv", label: "Latviešu" },
];

const ACCENTS = ["", "#03a9f4", "#f4511e", "#43a047", "#8e24aa", "#fb8c00"];

export class AlpicairUiSettingsCard extends UiSettingsMixin(LitElement) {
  static properties = { hass: {}, _config: { state: true } };
  static styles = cardStyles;

  static getConfigElement() {
    return document.createElement("alpicair-ui-settings-card-editor");
  }
  static getStubConfig() {
    return { type: "custom:alpicair-ui-settings-card" };
  }

  setConfig(config) {
    this._config = {
      show_language: true,
      show_theme: true,
      show_accent: true,
      show_compact: true,
      show_sizes: true,
      show_reset: true,
      show_back_button: true,
      back_icon: "mdi:chevron-left",
      hold_time: 500,
      back_tap_action: { action: "none" },
      back_hold_action: { action: "none" },
      ...config,
    };
  }

  getCardSize() { return 4; }
  _t(k) { return localize(this.hass, { language: "auto" }, k); }

  _backButton() {
    const c = this._config;
    if (c.show_back_button === false) return nothing;
    const h = pressHandlers(
      () => performAction(this, this.hass, c.back_entity, c.back_tap_action),
      () => performAction(this, this.hass, c.back_entity, c.back_hold_action),
      Number(c.hold_time) || 500,
    );
    return html`<button class="power" aria-label=${this._t("back")}
      @pointerdown=${h["@pointerdown"]} @pointerup=${h["@pointerup"]}
      @pointerleave=${h["@pointerleave"]} @pointercancel=${h["@pointercancel"]}
      @contextmenu=${h["@contextmenu"]}>
      <ha-icon icon=${c.back_icon || "mdi:chevron-left"}></ha-icon>
    </button>`;
  }

  _set(patch) {
    setUiSettings(patch);
    this.requestUpdate();
  }

  render() {
    if (!this._config) return nothing;
    const s = getUiSettings();
    const c = this._config;

    return html`
      <ha-card>
        <div class="header">
          <div class="icon"><ha-icon icon=${c.icon || "mdi:palette"}></ha-icon></div>
          <div class="titles">
            <div class="title">${c.name || this._t("ui_settings")}</div>
            <div class="subtitle">${this._t("applies_to_all")}</div>
          </div>
          ${this._backButton()}
        </div>

        ${c.show_language !== false
          ? html`
              <div>
                <div class="section-title" style="margin-bottom:8px">${this._t("language")}</div>
                <div class="grid c4">
                  ${LANGS.map(
                    (l) => html`<button class="mode ${s.language === l.id ? "active" : ""}"
                      @click=${() => this._set({ language: l.id })}>${l.label}</button>`,
                  )}
                </div>
              </div>`
          : nothing}

        ${c.show_theme !== false
          ? html`
              <div>
                <div class="section-title" style="margin-bottom:8px">${this._t("theme")}</div>
                <div class="grid c3">
                  ${[
                    { id: "light", icon: "mdi:white-balance-sunny" },
                    { id: "dark", icon: "mdi:weather-night" },
                    { id: "auto", icon: "mdi:theme-light-dark" },
                  ].map(
                    (o) => html`<button class="mode ${s.theme === o.id ? "active" : ""}"
                      @click=${() => this._set({ theme: o.id })}>
                      <ha-icon icon=${o.icon} style="--mdc-icon-size:18px"></ha-icon>${this._t(o.id)}
                    </button>`,
                  )}
                </div>
              </div>`
          : nothing}

        ${c.show_accent !== false
          ? html`
              <div>
                <div class="section-title" style="margin-bottom:8px">${this._t("accent_color")}</div>
                <div class="swatches">
                  ${ACCENTS.map(
                    (a) => html`<button
                      class="swatch ${s.accent === a ? "active" : ""}"
                      style=${a ? `background:${a}` : ""}
                      aria-label=${a || "default"}
                      @click=${() => this._set({ accent: a })}
                    >${a ? nothing : html`<ha-icon icon="mdi:home-assistant" style="--mdc-icon-size:18px"></ha-icon>`}</button>`,
                  )}
                </div>
              </div>`
          : nothing}

        ${c.show_compact !== false
          ? html`<button class="mode ${s.compact ? "active" : ""}" @click=${() => this._set({ compact: !s.compact })}>
              <ha-icon icon="mdi:arrow-collapse-vertical" style="--mdc-icon-size:18px"></ha-icon>${this._t("compact")}
            </button>`
          : nothing}

        ${c.show_sizes !== false
          ? html`
              <div>
                <div class="section-title" style="margin-bottom:8px">${this._t("button_size")}</div>
                <div class="slider-row">
                  <div class="bar-top">
                    <span>${this._t("button_size")}</span>
                    <span class="val">${Math.round((s.buttonScale ?? 1) * 100)}%</span>
                  </div>
                  <input type="range" min="0.8" max="2" step="0.05"
                    .value=${String(s.buttonScale ?? 1)}
                    aria-label=${this._t("button_size")}
                    @input=${(e) => this._set({ buttonScale: Number(e.target.value) })} />
                  <div class="bar-top" style="margin-top:6px">
                    <span>${this._t("font_size")}</span>
                    <span class="val">${Math.round((s.fontScale ?? 1) * 100)}%</span>
                  </div>
                  <input type="range" min="0.8" max="2" step="0.05"
                    .value=${String(s.fontScale ?? 1)}
                    aria-label=${this._t("font_size")}
                    @input=${(e) => this._set({ fontScale: Number(e.target.value) })} />
                </div>
              </div>`
          : nothing}

        ${c.show_reset !== false
          ? html`<button class="plain" @click=${() => { resetUiSettings(); this.requestUpdate(); }}>
              <ha-icon icon="mdi:restore" style="--mdc-icon-size:18px"></ha-icon>${this._t("reset")}
            </button>`
          : nothing}
      </ha-card>`;
  }
}

customElements.define("alpicair-ui-settings-card", AlpicairUiSettingsCard);
