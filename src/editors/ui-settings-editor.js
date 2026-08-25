import { BaseCardEditor, boolRow, entityField, sizeFields } from "./base-editor.js";

class UiSettingsEditor extends BaseCardEditor {
  _labels = {
    button_scale: "Button size (1 = default)", font_scale: "Font size (1 = default)",
    name: "Name",
    icon: "Icon",
    show_language: "Language selector",
    show_theme: "Theme selector",
    show_accent: "Accent color",
    show_compact: "Compact mode toggle",
    show_sizes: "Button / font size sliders",
    show_reset: "Reset button",
    show_back_button: "Back button",
    back_icon: "Back button icon",
    back_entity: "Back button target entity",
    hold_time: "Long press duration (ms)",
    back_tap_action: "Back · short press action",
    back_hold_action: "Back · long press action",

  };

  get schema() {
    return [
      { type: "grid", name: "", schema: [
        { name: "name", selector: { text: {} } },
        { name: "icon", selector: { icon: {} } },
      ] },
      boolRow(["show_language", "show_theme", "show_accent", "show_compact", "show_sizes", "show_reset"]),
      boolRow(["show_back_button"]),
      { type: "grid", name: "", schema: [
        { name: "back_icon", selector: { icon: {} } },
        entityField("back_entity"),
      ] },
      { name: "hold_time", selector: { number: { min: 200, max: 2000, step: 50, mode: "box", unit_of_measurement: "ms" } } },
      { name: "back_tap_action", selector: { ui_action: {} } },
      { name: "back_hold_action", selector: { ui_action: {} } },
      sizeFields,
    ];
  }
}

customElements.define("alpicair-ui-settings-card-editor", UiSettingsEditor);
