import { BaseCardEditor, boolRow, entityField, languageField, sizeFields } from "./base-editor.js";

class AcPanelEditor extends BaseCardEditor {
  _labels = {
    button_scale: "Button size (1 = default)", font_scale: "Font size (1 = default)",
    name: "Name", icon: "Icon", language: "Language",
    entity: "Climate entity",
    default_hvac_mode: "HVAC mode on power on",
    ring_size: "Ring size (px)",
    ring_thickness: "Ring thickness (px)",
    back_path: "Back navigation path (e.g. /lovelace/home)",
    back_action: "Back button action",
    show_power: "Show header (back + power)",
    show_mode: "Show mode tile",
    show_fan: "Show fan speed tile",
    show_swing_vertical: "Show vertical swing tile",
    show_swing_horizontal: "Show horizontal swing tile",
    show_current_temperature: "Show current temperature",
  };

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
      { type: "grid", name: "", schema: [
        { name: "ring_size", selector: { number: { min: 140, max: 480, step: 10, mode: "slider", unit_of_measurement: "px" } } },
        { name: "ring_thickness", selector: { number: { min: 6, max: 40, step: 1, mode: "slider", unit_of_measurement: "px" } } },
      ] },
      { name: "back_path", selector: { text: {} } },
      { name: "back_action", selector: { ui_action: {} } },
      boolRow([
        "show_power", "show_mode", "show_fan", "show_swing_vertical",
        "show_swing_horizontal", "show_current_temperature",
      ]),
      sizeFields,
    ];
  }
}

customElements.define("alpicair-ac-panel-card-editor", AcPanelEditor);
