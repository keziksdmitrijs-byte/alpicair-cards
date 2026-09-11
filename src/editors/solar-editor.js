import { BaseCardEditor, boolRow, entityField, languageField, sizeFields } from "./base-editor.js";

class SolarEditor extends BaseCardEditor {
  _labels = {
    button_scale: "Button size (1 = default)", font_scale: "Font size (1 = default)",
    name: "Name", icon: "Icon", language: "Language",
    power_entity: "Power / inverter switch entity",
    production_entity: "Current production (W / kW)",
    peak_power_entity: "Peak power sensor (optional)",
    peak_power: "Peak power, kW (ring scale)",
    production_today_entity: "Production today (kWh)",
    production_month_entity: "Production this month (kWh)",
    battery_level_entity: "Battery level (%)",
    battery_power_entity: "Battery power (+ charge / − discharge)",
    grid_power_entity: "Grid power (+ export / − import)",
    house_power_entity: "House consumption (W / kW)",
    export_today_entity: "Exported today (kWh)",
    export_month_entity: "Exported this month (kWh)",
    import_today_entity: "Imported today (kWh)",
    import_month_entity: "Imported this month (kWh)",
    house_today_entity: "House consumption today (kWh)",
    house_month_entity: "House consumption this month (kWh)",
    invert_grid: "Invert grid sign",
    invert_battery: "Invert battery sign",
    decimals: "Decimals",
    ring_size: "Ring size (px)",
    ring_thickness: "Ring thickness (px)",
    back_path: "Back navigation path (e.g. /lovelace/home)",
    back_action: "Back button action",
    show_battery: "Show battery tile",
    show_grid: "Show grid tile",
    show_house: "Show house tile",
  };

  get schema() {
    const num = (name, min, max, step, unit) => ({
      name,
      selector: { number: { min, max, step, mode: "slider", ...(unit ? { unit_of_measurement: unit } : {}) } },
    });
    return [
      { type: "grid", name: "", schema: [
        { name: "name", selector: { text: {} } },
        { name: "icon", selector: { icon: {} } },
      ] },
      languageField,
      entityField("power_entity", ["switch", "input_boolean"]),
      entityField("production_entity", ["sensor", "number", "input_number"]),
      { type: "grid", name: "", schema: [
        entityField("peak_power_entity", ["sensor", "number", "input_number"]),
        num("peak_power", 1, 30, 0.5, "kW"),
      ] },
      { type: "grid", name: "", schema: [
        entityField("production_today_entity", ["sensor"]),
        entityField("production_month_entity", ["sensor"]),
      ] },
      { type: "grid", name: "", schema: [
        entityField("battery_level_entity", ["sensor", "number", "input_number"]),
        entityField("battery_power_entity", ["sensor", "number", "input_number"]),
      ] },
      { type: "grid", name: "", schema: [
        entityField("grid_power_entity", ["sensor", "number", "input_number"]),
        entityField("house_power_entity", ["sensor", "number", "input_number"]),
      ] },
      { type: "grid", name: "", schema: [
        entityField("export_today_entity", ["sensor"]),
        entityField("export_month_entity", ["sensor"]),
      ] },
      { type: "grid", name: "", schema: [
        entityField("import_today_entity", ["sensor"]),
        entityField("import_month_entity", ["sensor"]),
      ] },
      { type: "grid", name: "", schema: [
        entityField("house_today_entity", ["sensor"]),
        entityField("house_month_entity", ["sensor"]),
      ] },
      { type: "grid", name: "", schema: [
        num("ring_size", 140, 480, 10, "px"),
        num("ring_thickness", 6, 40, 1, "px"),
      ] },
      num("decimals", 0, 3, 1),
      { name: "back_path", selector: { text: {} } },
      { name: "back_action", selector: { ui_action: {} } },
      boolRow(["show_battery", "show_grid", "show_house"]),
      boolRow(["invert_grid", "invert_battery"]),
      sizeFields,
    ];
  }
}

customElements.define("alpicair-solar-card-editor", SolarEditor);
