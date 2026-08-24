import { LitElement, html, css, nothing } from "lit";
import { fireEvent } from "../actions.js";

/**
 * Generic visual editor built on HA's <ha-form>.
 * Subclasses implement `schema` and optional `computeLabel`.
 */
export class BaseCardEditor extends LitElement {
  static properties = { hass: {}, _config: { state: true } };

  static styles = css`
    :host { display: block; }
    ha-form { display: block; }
  `;

  setConfig(config) {
    this._config = { ...config };
  }

  get schema() { return []; }

  _labels = {
    entity: "Entity (climate)",
    name: "Name",
    icon: "Icon",
    language: "Language",
    show_power: "Power button",
    show_dial: "Temperature dial",
    show_modes: "Mode buttons",
    show_fan: "Fan speed selector",
    show_swing_vertical: "Vertical swing selector",
    show_swing_horizontal: "Horizontal swing selector",
    show_current_temperature: "Current temperature",
    default_hvac_mode: "HVAC mode on power on",
    button_scale: "Button size (1 = default)",
    font_scale: "Font size (1 = default)",
  };

  computeLabel = (s) => this._labels[s.name] || s.label || s.name;

  _valueChanged(ev) {
    const config = ev.detail.value;
    fireEvent(this, "config-changed", { config });
  }

  render() {
    if (!this.hass || !this._config) return nothing;
    return html`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${this.schema}
        .computeLabel=${this.computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>`;
  }
}

export const boolRow = (names) => ({
  type: "grid",
  name: "",
  schema: names.map((name) => ({ name, selector: { boolean: {} } })),
});

export const entityField = (name, domains) => ({
  name,
  selector: { entity: domains ? { domain: domains } : {} },
});

export const languageField = {
  name: "language",
  selector: { select: { mode: "dropdown", options: [
    { value: "auto", label: "Auto (Home Assistant)" },
    { value: "en", label: "English" },
    { value: "ru", label: "Русский" },
    { value: "lv", label: "Latviešu" },
  ] } },
};

export const sizeFields = {
  type: "grid",
  name: "",
  schema: [
    { name: "button_scale", selector: { number: { min: 0.8, max: 2, step: 0.05, mode: "slider" } } },
    { name: "font_scale", selector: { number: { min: 0.8, max: 2, step: 0.05, mode: "slider" } } },
  ],
};
