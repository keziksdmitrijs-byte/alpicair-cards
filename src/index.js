import "./cards/recuperator-card.js";
import "./cards/air-conditioner-card.js";
import "./cards/heat-pump-card.js";
import "./cards/sensors-card.js";
import "./cards/device-settings-card.js";
import "./cards/ui-settings-card.js";

const VERSION = "1.0.0";

window.customCards = window.customCards || [];
const register = (type, name, description) => {
  if (window.customCards.some((c) => c.type === type)) return;
  window.customCards.push({
    type, name, description,
    preview: true,
    documentationURL: "https://github.com/keziksdmitrijs-byte/recuperator-custom-card",
  });
};

register("alpicair-recuperator-card", "AlpicAir Recuperator Card",
  "Recuperator control: modes, efficiency, fan speed and a configurable settings button.");
register("alpicair-air-conditioner-card", "AlpicAir Air Conditioner Card",
  "Single climate entity: dial, HVAC modes, fan and swing control.");
register("alpicair-heat-pump-card", "AlpicAir Heat Pump Card",
  "Floor and hot water temperatures, modes and quick actions.");
register("alpicair-sensors-card", "AlpicAir Temperatures Card",
  "Outdoor/indoor/supply/extract temperatures with target slider.");
register("alpicair-device-settings-card", "AlpicAir Device Settings Card",
  "Night cooling, fan speed presets and device date & time.");

register("alpicair-ui-settings-card", "AlpicAir Interface Settings Card",
  "Global language, theme and accent for all AlpicAir cards.");

console.info(
  `%c ALPICAIR-CARDS %c v${VERSION} `,
  "color:#fff;background:#03a9f4;font-weight:700;border-radius:4px 0 0 4px",
  "color:#03a9f4;background:#333;font-weight:700;border-radius:0 4px 4px 0",
);
