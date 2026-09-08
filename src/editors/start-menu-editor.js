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
    recuperator_action: "Recuperator button action",
    air_conditioner_action: "Air conditioner button action",
    heat_pump_action: "Heat pump button action",
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
      { name: "recuperator_action", selector: { ui_action: {} } },
      { name: "air_conditioner_action", selector: { ui_action: {} } },
      { name: "heat_pump_action", selector: { ui_action: {} } },
      { name: "menu_action", selector: { ui_action: {} } },
      sizeFields,
    ];
  }
}

customElements.define("alpicair-start-menu-card-editor", StartMenuEditor);