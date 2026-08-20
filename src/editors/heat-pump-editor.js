import { BaseCardEditor, boolRow, entityField, languageField } from "./base-editor.js";

class HeatPumpEditor extends BaseCardEditor {
  _labels = {
    name: "Name", icon: "Icon", language: "Language",
    power_entity: "Power entity",
    floor_current_entity: "Floor temperature sensor",
    floor_target_entity: "Floor target (number / input_number)",
    water_current_entity: "Boiler temperature sensor",
    water_target_entity: "Boiler target (number / input_number)",
    mode_entity: "Mode entity (select)",
    option_heating: "Option: heating",
    option_hot_water: "Option: hot water",
    option_heating_water: "Option: heating + water",
    quick_heat_entity: "Quick heat entity (switch)",
    quiet_mode_entity: "Quiet mode entity (switch)",
    disinfection_entity: "Disinfection entity (switch)",
    show_power: "Power button",
    show_hero: "Large temperature block",
    show_floor: "Floor temperature",
    show_water: "Boiler temperature",
    show_modes: "Mode buttons",
    show_quick_heat: "Button: quick heat",
    show_quiet_mode: "Button: quiet mode",
    show_disinfection: "Button: disinfection",
  };

  get _options() {
    const st = this._config && this.hass && this.hass.states[this._config.mode_entity];
    return (st && st.attributes && st.attributes.options) || [];
  }

  _optionField(name) {
    const options = this._options;
    return options.length
      ? { name, selector: { select: { mode: "dropdown", options } } }
      : { name, selector: { text: {} } };
  }

  get schema() {
    return [
      { type: "grid", name: "", schema: [
        { name: "name", selector: { text: {} } },
        { name: "icon", selector: { icon: {} } },
      ] },
      languageField,
      entityField("power_entity", ["switch", "input_boolean", "climate"]),
      { type: "grid", name: "", schema: [
        entityField("floor_current_entity", ["sensor", "number", "input_number"]),
        entityField("floor_target_entity", ["number", "input_number", "climate"]),
      ] },
      { type: "grid", name: "", schema: [
        entityField("water_current_entity", ["sensor", "number", "input_number"]),
        entityField("water_target_entity", ["number", "input_number", "water_heater", "climate"]),
      ] },
      entityField("mode_entity", ["select", "input_select", "climate"]),
      { type: "grid", name: "", schema: [
        this._optionField("option_heating"),
        this._optionField("option_hot_water"),
        this._optionField("option_heating_water"),
      ] },
      { type: "grid", name: "", schema: [
        entityField("quick_heat_entity", ["switch", "input_boolean", "script"]),
        entityField("quiet_mode_entity", ["switch", "input_boolean"]),
        entityField("disinfection_entity", ["switch", "input_boolean", "script"]),
      ] },
      boolRow([
        "show_power", "show_hero", "show_floor", "show_water", "show_modes",
        "show_quick_heat", "show_quiet_mode", "show_disinfection",
      ]),
    ];
  }
}

customElements.define("alpicair-heat-pump-card-editor", HeatPumpEditor);
