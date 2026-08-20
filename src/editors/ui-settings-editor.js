import { BaseCardEditor, boolRow } from "./base-editor.js";

class UiSettingsEditor extends BaseCardEditor {
  _labels = {
    name: "Name",
    icon: "Icon",
    show_language: "Language selector",
    show_theme: "Theme selector",
    show_accent: "Accent color",
    show_compact: "Compact mode toggle",
    show_reset: "Reset button",
  };

  get schema() {
    return [
      { type: "grid", name: "", schema: [
        { name: "name", selector: { text: {} } },
        { name: "icon", selector: { icon: {} } },
      ] },
      boolRow(["show_language", "show_theme", "show_accent", "show_compact", "show_reset"]),
    ];
  }
}

customElements.define("alpicair-ui-settings-card-editor", UiSettingsEditor);
