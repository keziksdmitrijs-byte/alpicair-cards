export function fireEvent(node, type, detail = {}) {
  const event = new Event(type, { bubbles: true, composed: true, cancelable: false });
  event.detail = detail;
  node.dispatchEvent(event);
  return event;
}

export function performAction(node, hass, entityId, action) {
  if (!action || action.action === "none") return;
  switch (action.action) {
    case "more-info": {
      const id = action.entity || entityId;
      if (id) fireEvent(node, "hass-more-info", { entityId: id });
      break;
    }
    case "toggle": {
      const id = action.entity || entityId;
      if (id) hass.callService("homeassistant", "toggle", { entity_id: id });
      break;
    }
    case "navigate":
      if (action.navigation_path) {
        history.pushState(null, "", action.navigation_path);
        fireEvent(window, "location-changed", {});
      }
      break;
    case "url":
      if (action.url_path) window.open(action.url_path, action.new_tab === false ? "_self" : "_blank");
      break;
    case "call-service":
    case "perform-action": {
      const svc = action.perform_action || action.service;
      if (!svc || !svc.includes(".")) return;
      const [domain, service] = svc.split(".", 2);
      hass.callService(domain, service, action.data || action.service_data || {}, action.target || undefined);
      break;
    }
    case "fire-dom-event":
      fireEvent(node, "ll-custom", action);
      break;
    default:
      break;
  }
}

/**
 * Attaches short-press / long-press handling to an element.
 * Usage in render: @pointerdown=${...} — simpler: use bindPress(el, onTap, onHold)
 */
export function pressHandlers(onTap, onHold, holdTime = 500) {
  let timer = null;
  let held = false;
  const start = (e) => {
    if (e.button !== undefined && e.button !== 0 && e.pointerType === "mouse") return;
    held = false;
    timer = window.setTimeout(() => {
      held = true;
      if (navigator.vibrate) navigator.vibrate(30);
      onHold();
    }, holdTime);
  };
  const end = (e) => {
    if (timer) { clearTimeout(timer); timer = null; }
    if (!held) { e.preventDefault(); onTap(); }
    held = false;
  };
  const cancel = () => { if (timer) { clearTimeout(timer); timer = null; } held = false; };
  return {
    "@pointerdown": start,
    "@pointerup": end,
    "@pointerleave": cancel,
    "@pointercancel": cancel,
    "@contextmenu": (e) => e.preventDefault(),
  };
}
