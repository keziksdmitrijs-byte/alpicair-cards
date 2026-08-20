import { BaseCardEditor, boolRow, entityField, languageField } from "./base-editor.js";

class SensorsEditor extends BaseCardEditor {
  _labels = {
    name: "Name", icon: "Icon", language: "Language",
    outdoor_entity: "Outdoor temperature",
    indoor_entity: "Indoor temperature",
    supply_entity: "Supply air temperature",
    extract_entity: "Extract air temperature",
    target_entity: "Target temperature entity",
    show_target_slider: "Target temperature slider",
    min_temp: "Minimum", max_temp: "Maximum", step: "Step",
  };

  get schema() {
    return [
      { type: "grid", name: "", schema: [
        { name: "name", selector: { text: {} } },
        { name: "icon", selector: { icon: {} } },
      ] },
      languageField,
      { type: "grid", name: "", schema: [
        entityField("outdoor_entity", ["sensor"]),
        entityField("indoor_entity", ["sensor"]),
        entityField("supply_entity", ["sensor"]),
        entityField("extract_entity", ["sensor"]),
      ] },
      entityField("target_entity", ["climate", "number", "input_number"]),
      boolRow(["show_target_slider"]),
      { type: "grid", name: "", schema: [
        { name: "min_temp", selector: { number: { min: 0, max: 40, step: 1, mode: "box" } } },
        { name: "max_temp", selector: { number: { min: 0, max: 60, step: 1, mode: "box" } } },
        { name: "step", selector: { number: { min: 0.1, max: 5, step: 0.1, mode: "box" } } },
      ] },
    ];
  }
}

customElements.define("alpicair-sensors-card-editor", SensorsEditor);
