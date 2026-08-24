import { BaseCardEditor, boolRow, entityField, languageField, sizeFields } from "./base-editor.js";

class DeviceSettingsEditor extends BaseCardEditor {
  _labels = {
    button_scale: "Button size (1 = default)", font_scale: "Font size (1 = default)",
    name: "Name", icon: "Icon", language: "Language",
    show_night_cooling: "Section: night cooling",
    show_fan_speeds: "Section: fan speeds",
    show_date_time: "Section: date & time",
    night_cooling_entity: "Night cooling switch",
    nc_start_time_entity: "Start time",
    nc_stop_time_entity: "Stop time",
    nc_extract_start_entity: "Extract air temp. to start",
    nc_extract_stop_entity: "Extract air temp. to stop",
    nc_outdoor_stop_entity: "Outdoor temp. to stop",
    nc_supply_setpoint_entity: "Supply air setpoint",
    bp_supply_entity: "Building protection · supply",
    bp_exhaust_entity: "Building protection · exhaust",
    eco_supply_entity: "Economy · supply",
    eco_exhaust_entity: "Economy · exhaust",
    comfort_supply_entity: "Comfort · supply",
    comfort_exhaust_entity: "Comfort · exhaust",
    boost_supply_entity: "Boost · supply",
    boost_exhaust_entity: "Boost · exhaust",
    date_entity: "Date entity",
    time_entity: "Time entity",
  };

  get schema() {
    const num = ["number", "input_number"];
    return [
      { type: "grid", name: "", schema: [
        { name: "name", selector: { text: {} } },
        { name: "icon", selector: { icon: {} } },
      ] },
      languageField,
      boolRow(["show_night_cooling", "show_fan_speeds", "show_date_time"]),
      entityField("night_cooling_entity", ["switch", "input_boolean"]),
      { type: "grid", name: "", schema: [
        entityField("nc_start_time_entity", ["time", "input_datetime"]),
        entityField("nc_stop_time_entity", ["time", "input_datetime"]),
        entityField("nc_extract_start_entity", num),
        entityField("nc_extract_stop_entity", num),
        entityField("nc_outdoor_stop_entity", num),
        entityField("nc_supply_setpoint_entity", num),
      ] },
      { type: "grid", name: "", schema: [
        entityField("bp_supply_entity", num),
        entityField("bp_exhaust_entity", num),
        entityField("eco_supply_entity", num),
        entityField("eco_exhaust_entity", num),
        entityField("comfort_supply_entity", num),
        entityField("comfort_exhaust_entity", num),
        entityField("boost_supply_entity", num),
        entityField("boost_exhaust_entity", num),
      ] },
      { type: "grid", name: "", schema: [
        entityField("date_entity", ["date", "input_datetime"]),
        entityField("time_entity", ["time", "input_datetime"]),
      ] },
      sizeFields,
    ];
  }
}

customElements.define("alpicair-device-settings-card-editor", DeviceSettingsEditor);
