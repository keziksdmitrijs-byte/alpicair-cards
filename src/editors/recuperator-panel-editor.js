import { BaseCardEditor, boolRow, entityField, languageField, sizeFields } from "./base-editor.js";

class RecuperatorPanelEditor extends BaseCardEditor {
  _labels = {
    button_scale: "Button size (1 = default)", font_scale: "Font size (1 = default)",
    name: "Name", icon: "Icon", language: "Language",
    mode_entity: "Mode entity (select / fan / climate)",
    power_entity: "Power entity (switch / fan)",
    fan_speed_entity: "Fan speed sensor (%)",
    recuperation_entity: "Recuperation efficiency sensor (%)",
    indoor_entity: "Indoor temperature sensor",
    outdoor_entity: "Outdoor temperature sensor",
    supply_entity: "Supply air temperature sensor",
    extract_entity: "Extract air temperature sensor",
    target_entity: "Target temperature entity (number / climate)",
    target_min: "Target minimum (°C)",
    target_max: "Target maximum (°C)",
    ring_size: "Ring size (px)",
    ring_thickness: "Ring thickness (px)",
    back_path: "Back navigation path (e.g. /lovelace/home)",
    back_action: "Back button action",
    default_mode: "Mode on power on",
    show_header: "Show header (back + power)",
    show_target: "Show target temperature",
    show_indoor: "Show indoor temperature",
    show_recuperation: "Show recuperation",
    show_outdoor: "Show outdoor temperature (on expand)",
    show_supply: "Show supply air temperature (on expand)",
    show_extract: "Show extract air temperature (on expand)",
    show_mode_picker: "Mode picker on ring tap",
    option_building_protection: "Option: building protection",
    option_economy: "Option: economy",
    option_comfort: "Option: comfort",
    option_boost: "Option: boost",
  };

  get _entityOptions() {
    const ent = this._config?.mode_entity;
    const st = ent && this.hass?.states?.[ent];
    if (!st) return [];
    const a = st.attributes || {};
    return a.options || a.preset_modes || a.hvac_modes || [];
  }
  _optionField(name) {
    return { name, selector: { select: { mode: "dropdown", custom_value: true, options: this._entityOptions } } };
  }

  get schema() {
    return [
      { type: "grid", name: "", schema: [
        { name: "name", selector: { text: {} } },
        { name: "icon", selector: { icon: {} } },
      ] },
      languageField,
      entityField("mode_entity", ["select", "input_select", "fan", "climate"]),
      entityField("power_entity", ["switch", "fan", "input_boolean", "climate"]),
      { type: "grid", name: "", schema: [
        entityField("fan_speed_entity", ["sensor", "number", "input_number"]),
        entityField("recuperation_entity", ["sensor", "number", "input_number"]),
      ] },
      { type: "grid", name: "", schema: [
        entityField("indoor_entity", ["sensor"]),
        entityField("target_entity", ["number", "input_number", "climate"]),
      ] },
      { type: "grid", name: "", schema: [
        entityField("outdoor_entity", ["sensor"]),
        entityField("supply_entity", ["sensor"]),
        entityField("extract_entity", ["sensor"]),
      ] },
      { type: "grid", name: "", schema: [
        this._optionField("option_building_protection"),
        this._optionField("option_economy"),
        this._optionField("option_comfort"),
        this._optionField("option_boost"),
      ] },
      { name: "default_mode", selector: { select: { mode: "dropdown", custom_value: true,
        options: ["building_protection", "economy", "comfort", "boost"] } } },
      { type: "grid", name: "", schema: [
        { name: "ring_size", selector: { number: { min: 140, max: 480, step: 10, mode: "slider", unit_of_measurement: "px" } } },
        { name: "ring_thickness", selector: { number: { min: 6, max: 40, step: 1, mode: "slider", unit_of_measurement: "px" } } },
      ] },
      { type: "grid", name: "", schema: [
        { name: "target_min", selector: { number: { min: 5, max: 30, step: 0.5, mode: "box", unit_of_measurement: "°C" } } },
        { name: "target_max", selector: { number: { min: 15, max: 40, step: 0.5, mode: "box", unit_of_measurement: "°C" } } },
      ] },
      { name: "back_path", selector: { text: {} } },
      { name: "back_action", selector: { ui_action: {} } },
      boolRow([
        "show_header", "show_target", "show_indoor", "show_recuperation",
        "show_outdoor", "show_supply", "show_extract", "show_mode_picker",
      ]),
      sizeFields,
    ];
  }
}

customElements.define("alpicair-recuperator-panel-card-editor", RecuperatorPanelEditor);
