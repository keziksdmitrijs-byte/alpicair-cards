import { BaseCardEditor, boolRow, entityField, languageField, sizeFields } from "./base-editor.js";

class AirConditionerEditor extends BaseCardEditor {
  get schema() {
    return [
      entityField("entity", "climate"),
      { type: "grid", name: "", schema: [
        { name: "name", selector: { text: {} } },
        { name: "icon", selector: { icon: {} } },
      ] },
      languageField,
      { name: "default_hvac_mode", selector: { select: { mode: "dropdown", custom_value: true, options: [
        "auto", "heat_cool", "cool", "heat", "dry", "fan_only",
      ] } } },
      boolRow([
        "show_power", "show_dial", "show_temp_slider", "show_modes", "show_current_temperature",
        "show_fan", "show_swing_vertical", "show_swing_horizontal",
      ]),
      { name: "dial_size", selector: { number: { min: 160, max: 480, step: 10, mode: "slider" } } },
      sizeFields,
    ];
  }
}

customElements.define("alpicair-air-conditioner-card-editor", AirConditionerEditor);
