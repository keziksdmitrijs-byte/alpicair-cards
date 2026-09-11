import { html } from "lit";
import { performAction } from "./actions.js";

/**
 * Mixin shared by the three "panel" cards (recuperator / AC / heat pump).
 * Closes any open popover/sheet when a pointerdown happens outside the card,
 * matching the React prototype's use-outside-click behaviour.
 *
 * The host implements `_hasOpenPanel` (getter) and `_closePanels()`.
 */
export const PanelMixin = (Base) =>
  class extends Base {
    connectedCallback() {
      super.connectedCallback();
      this._panelOutside = (e) => {
        if (this._hasOpenPanel && !e.composedPath().includes(this)) this._closePanels();
      };
      document.addEventListener("pointerdown", this._panelOutside, true);
    }
    disconnectedCallback() {
      document.removeEventListener("pointerdown", this._panelOutside, true);
      super.disconnectedCallback();
    }
    get _hasOpenPanel() {
      return false;
    }
    _closePanels() {}

    /** Back button: navigate to the configured path, or browser back as fallback. */
    _navigateBack() {
      const cfg = this._config || {};
      const action = cfg.back_action && cfg.back_action.action !== "none"
        ? cfg.back_action
        : cfg.back_path
          ? { action: "navigate", navigation_path: cfg.back_path }
          : null;
      if (action) {
        performAction(this, this.hass, null, action);
      } else if (window.history.length > 1) {
        window.history.back();
      }
    }
  };

/** Full-card modal backdrop. It blocks every control except the active popup. */
export function panelBackdrop(card) {
  return html`<button class="panel-backdrop" aria-label="Close menu"
    @click=${() => card._closePanels()}></button>`;
}

/**
 * Shared panel header: back button (left) + power button (right).
 * `card` must expose `_panelOn` (bool) and `_togglePower()`.
 */
export function panelHeader(card, options = {}) {
  const t = (k) => card._t(k);
  const on = !!card._panelOn;
  const showPower = options.power !== false;
  const title = card._config.title ?? card._config.name
    ?? (card._defaultTitle ? t(card._defaultTitle) : "");
  return html`<div class="panel-header">
    <button class="ph-btn back" title=${t("back")} aria-label=${t("back")}
      @click=${() => card._navigateBack()}>
      <ha-icon icon="mdi:chevron-left"></ha-icon>
    </button>
    <div class="ph-title">${title}</div>
    ${showPower
      ? html`<button class="ph-btn power ${on ? "on" : ""}" title=${t("power")} aria-label=${t("power")}
          @click=${() => card._togglePower()}>
          <ha-icon icon="mdi:power"></ha-icon>
        </button>`
      : html`<span class="ph-btn" style="visibility:hidden"></span>`}
  </div>`;
}


/** Overlay that fills the ring and closes when its empty area is clicked. */
export function ringOverlay(card, onEmptyClick, inner) {
  return html`<div class="ring-overlay" @click=${(e) => { if (e.target === e.currentTarget) onEmptyClick(); }}>
    ${inner}
  </div>`;
}
