import { BaseCardEditor, boolRow, entityField, languageField } from "./base-editor.js";

class HeatPumpEditor extends BaseCardEditor {
  _labels = {
    name: "Name", icon: "Icon", language: "Language",
    power_entity: "Power entity",
    floor_entity: "Floor heating (climate)",
    water_entity: "Hot water (climate / water_heater)",
    mode_entity: "Mode entity (select)",
    quick_heat_entity: "Quick heat entity (switch)",
    quiet_mode_entity: "Quiet mode entity (switch)",
    disinfection_entity: "Disinfection entity (switch)",
    show_power: "Power button",
    show_floor: "Floor temperature slider",
    show_water: "Water temperature slider",
    show_modes: "Mode buttons",
    show_quick_heat: "Button: quick heat",
    show_quiet_mode: "Button: quiet mode",
    show_disinfection: "Button: disinfection",
  };

  get schema() {
    return [
      { type: "grid", name: "", schema: [
        { name: "name", selector: { text: {} } },
        { name: "icon", selector: { icon: {} } },
      ] },
      languageField,
      entityField("power_entity", ["switch", "input_boolean", "climate"]),
      { type: "grid", name: "", schema: [
        entityField("floor_entity", ["climate"]),
        entityField("water_entity", ["climate", "water_heater"]),
      ] },
      entityField("mode_entity", ["select", "input_select", "climate"]),
      { type: "grid", name: "", schema: [
        entityField("quick_heat_entity", ["switch", "input_boolean", "script"]),
        entityField("quiet_mode_entity", ["switch", "input_boolean"]),
        entityField("disinfection_entity", ["switch", "input_boolean", "script"]),
      ] },
      boolRow([
        "show_power", "show_floor", "show_water", "show_modes",
        "show_quick_heat", "show_quiet_mode", "show_disinfection",
      ]),
    ];
  }
}

customElements.define("alpicair-heat-pump-card-editor", HeatPumpEditor);
