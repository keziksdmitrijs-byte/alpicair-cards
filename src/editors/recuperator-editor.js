import { BaseCardEditor, boolRow, entityField, languageField } from "./base-editor.js";

class RecuperatorEditor extends BaseCardEditor {
  _labels = {
    name: "Name", icon: "Icon", language: "Language",
    mode_entity: "Mode entity (select / fan / climate)",
    power_entity: "Power entity (switch / fan)",
    recuperation_entity: "Recuperation efficiency sensor (%)",
    fan_speed_entity: "Fan speed sensor (%)",
    default_mode: "Mode on power on",
    show_power: "Power button",
    show_recuperation: "Recuperation bar",
    show_fan_speed: "Fan speed bar",
    show_building_protection: "Button: building protection",
    show_economy: "Button: economy",
    show_comfort: "Button: comfort",
    show_boost: "Button: boost",
    show_settings_button: "Settings button",
    settings_button_label: "Settings button label",
    settings_icon: "Settings button icon",
    settings_entity: "Settings button target entity",
    hold_time: "Long press duration (ms)",
    tap_action: "Short press action",
    hold_action: "Long press action",
  };

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
        entityField("recuperation_entity", ["sensor", "number", "input_number"]),
        entityField("fan_speed_entity", ["sensor", "number", "input_number"]),
      ] },
      { name: "default_mode", selector: { select: { mode: "dropdown", custom_value: true,
        options: ["building_protection", "economy", "comfort", "boost"] } } },
      boolRow([
        "show_power", "show_recuperation", "show_fan_speed",
        "show_building_protection", "show_economy", "show_comfort", "show_boost",
        "show_settings_button",
      ]),
      { type: "grid", name: "", schema: [
        { name: "settings_button_label", selector: { text: {} } },
        { name: "settings_icon", selector: { icon: {} } },
      ] },
      entityField("settings_entity"),
      { name: "hold_time", selector: { number: { min: 200, max: 2000, step: 50, mode: "box", unit_of_measurement: "ms" } } },
      { name: "tap_action", selector: { ui_action: {} } },
      { name: "hold_action", selector: { ui_action: {} } },
    ];
  }
}

customElements.define("alpicair-recuperator-card-editor", RecuperatorEditor);
