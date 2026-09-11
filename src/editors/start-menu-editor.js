import { BaseCardEditor, boolRow, entityField, languageField, sizeFields } from "./base-editor.js";

class StartMenuEditor extends BaseCardEditor {
  _labels = {
    name: "Title",
    language: "Language",
    weather_entity: "Weather entity",
    show_date: "Show date",
    show_seconds: "Show seconds",
    time_format: "Time format",
    time_zone: "Time zone (e.g. Europe/Riga)",
    time_offset: "Time correction (minutes)",
    time_entity: "Time entity (optional)",
    show_weather: "Show weather",
    show_recuperator: "Show recuperator button",
    show_air_conditioner: "Show air conditioner button",
    show_heat_pump: "Show heat pump button",
    show_solar: "Show solar station button",
    show_custom: "Show custom button",
    show_menu: "Show menu button",
    show_labels: "Show button names",
    custom_name: "Custom button name",
    custom_icon: "Custom button icon",
    columns: "Buttons per row",
    recuperator_action: "Recuperator button action",
    air_conditioner_action: "Air conditioner button action",
    heat_pump_action: "Heat pump button action",
    solar_action: "Solar station button action",
    custom_action: "Custom button action",
    menu_action: "Menu button action",

    button_scale: "Button size (1 = default)",
    font_scale: "Font size (1 = default)",
  };

  get schema() {
    return [
      { name: "name", selector: { text: {} } },
      languageField,
      entityField("weather_entity", ["weather"]),
      boolRow(["show_date", "show_weather", "show_seconds"]),
      {
        name: "time_format",
        selector: { select: { mode: "dropdown", options: [
          { value: "auto", label: "Auto" },
          { value: "24", label: "24 h" },
          { value: "12", label: "12 h (AM/PM)" },
        ] } },
      },
      { name: "time_zone", selector: { text: {} } },
      { name: "time_offset", selector: { number: { min: -720, max: 720, step: 1, mode: "box" } } },
      entityField("time_entity", ["sensor", "input_datetime"]),
      boolRow(["show_recuperator", "show_air_conditioner", "show_heat_pump"]),
      boolRow(["show_solar", "show_custom", "show_menu"]),
      boolRow(["show_labels"]),
      { type: "grid", name: "", schema: [
        { name: "custom_name", selector: { text: {} } },
        { name: "custom_icon", selector: { icon: {} } },
      ] },
      {
        name: "columns",
        selector: { select: { mode: "dropdown", options: [
          { value: "auto", label: "Auto (2 rows)" },
          { value: "1", label: "1" },
          { value: "2", label: "2" },
          { value: "3", label: "3" },
        ] } },
      },
      { name: "recuperator_action", selector: { ui_action: {} } },
      { name: "air_conditioner_action", selector: { ui_action: {} } },
      { name: "heat_pump_action", selector: { ui_action: {} } },
      { name: "solar_action", selector: { ui_action: {} } },
      { name: "custom_action", selector: { ui_action: {} } },
      { name: "menu_action", selector: { ui_action: {} } },
      sizeFields,

    ];
  }
}

customElements.define("alpicair-start-menu-card-editor", StartMenuEditor);