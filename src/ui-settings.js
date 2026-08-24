/**
 * Global UI settings shared by every AlpicAir card.
 * Stored in localStorage so the choice survives reloads and is applied
 * to all cards on all dashboards of this browser.
 */
const KEY = "alpicair-ui-settings";
const EVT = "alpicair-ui-settings-changed";

const DEFAULTS = { language: "auto", theme: "auto", accent: "", compact: false, buttonScale: 1, fontScale: 1 };

let cache = null;

export function getUiSettings() {
  if (cache) return cache;
  let stored = {};
  try {
    stored = JSON.parse(window.localStorage.getItem(KEY) || "{}") || {};
  } catch (e) {
    stored = {};
  }
  cache = { ...DEFAULTS, ...stored };
  return cache;
}

export function setUiSettings(patch) {
  cache = { ...getUiSettings(), ...patch };
  try {
    window.localStorage.setItem(KEY, JSON.stringify(cache));
  } catch (e) {
    /* ignore quota / private mode */
  }
  window.dispatchEvent(new CustomEvent(EVT, { detail: cache }));
}

export function resetUiSettings() {
  cache = { ...DEFAULTS };
  try {
    window.localStorage.removeItem(KEY);
  } catch (e) {
    /* ignore */
  }
  window.dispatchEvent(new CustomEvent(EVT, { detail: cache }));
}

function hexToRgb(hex) {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex || "");
  return m ? [1, 2, 3].map((i) => parseInt(m[i], 16)).join(",") : null;
}

function prefersDark() {
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
}

/**
 * Mixin: keeps a card in sync with the global UI settings card.
 * Applies theme + accent through host attributes / CSS variables.
 */
export const UiSettingsMixin = (Base) =>
  class extends Base {
    connectedCallback() {
      super.connectedCallback();
      this._uiSettings = getUiSettings();
      this._onUiSettings = (ev) => {
        this._uiSettings = ev.detail;
        this._applyUiSettings();
        this.requestUpdate();
      };
      window.addEventListener(EVT, this._onUiSettings);
      this._applyUiSettings();
    }

    disconnectedCallback() {
      window.removeEventListener(EVT, this._onUiSettings);
      super.disconnectedCallback();
    }

    willUpdate(changed) {
      if (super.willUpdate) super.willUpdate(changed);
      // re-apply so per-card size overrides take effect right after setConfig()
      if (this.isConnected) this._applyUiSettings();
    }

    _applyUiSettings() {
      const s = this._uiSettings || getUiSettings();
      const dark = s.theme === "dark" || (s.theme === "auto" && prefersDark());
      if (s.theme === "auto") this.removeAttribute("alp-theme");
      else this.setAttribute("alp-theme", dark ? "dark" : "light");
      if (s.compact) this.setAttribute("alp-compact", "");
      else this.removeAttribute("alp-compact");
      // Sizes: per-card config wins over the global UI settings card.
      const cfg = this._config || {};
      const bs = Number(cfg.button_scale ?? s.buttonScale ?? 1) || 1;
      const fs = Number(cfg.font_scale ?? s.fontScale ?? 1) || 1;
      this.style.setProperty("--alp-bs", String(bs));
      this.style.setProperty("--alp-fs", String(fs));
      if (s.accent) {
        this.style.setProperty("--alp-accent", s.accent);
        this.style.setProperty("--primary-color", s.accent);
        const rgb = hexToRgb(s.accent);
        if (rgb) this.style.setProperty("--rgb-primary-color", rgb);
      } else {
        this.style.removeProperty("--alp-accent");
        this.style.removeProperty("--primary-color");
        this.style.removeProperty("--rgb-primary-color");
      }
    }
  };
