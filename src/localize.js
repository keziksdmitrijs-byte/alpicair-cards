const en = {
  recuperator: "Recuperator", air_conditioner: "Air conditioner", heat_pump: "Heat pump",
  sensors: "Temperatures", device_settings: "Device settings", settings: "Settings",
  recuperation: "Recuperation", fan_speed: "Fan speed", supply: "Supply", exhaust: "Exhaust",
  off: "Off", on: "On", building_protection: "Building protection", economy: "Economy",
  comfort: "Comfort", boost: "Boost", outdoor: "Outdoor", indoor: "Indoor",
  supply_air: "Supply air", extract_air: "Extract air", night_cooling: "Night cooling",
  power: "Power", running: "Running", standby: "Standby", target_temperature: "Target temperature",
  heat: "Heat", cool: "Cool", dry: "Dry", fan_only: "Fan", auto: "Auto", low: "Low",
  medium: "Medium", high: "High", full_swing: "Full swing", fixed: "Fixed",
  swing_vertical: "Vertical swing", swing_horizontal: "Horizontal swing",
  floor: "Floor", water: "Hot water", heating: "Heating", hot_water: "Hot water",
  heating_water: "Heating + Water", quick_heat: "Quick heat", quiet_mode: "Quiet",
  disinfection: "Disinfection", entity_not_found: "Entity not found",
  date_time: "Date & time", date: "Date", time: "Time", sync_time: "Sync with Home Assistant",
  start_time: "Start", stop_time: "Stop", nc_extract_start: "Extract air temp. to start",
  nc_extract_stop: "Extract air temp. to stop", nc_outdoor_stop: "Outdoor temp. to stop",
  nc_supply_setpoint: "Supply air setpoint",
};

const ru = {
  recuperator: "Рекуператор", air_conditioner: "Кондиционер", heat_pump: "Тепловой насос",
  sensors: "Температуры", device_settings: "Настройки устройства", settings: "Настройки",
  recuperation: "Рекуперация", fan_speed: "Скорость вентилятора", supply: "Приток", exhaust: "Вытяжка",
  off: "Выкл", on: "Вкл", building_protection: "Защита здания", economy: "Экономичный",
  comfort: "Комфорт", boost: "Boost", outdoor: "Улица", indoor: "В доме",
  supply_air: "Приточный воздух", extract_air: "Вытяжной воздух", night_cooling: "Ночное охлаждение",
  power: "Питание", running: "Работает", standby: "Ожидание", target_temperature: "Целевая температура",
  heat: "Обогрев", cool: "Охлаждение", dry: "Осушение", fan_only: "Вентиляция", auto: "Авто",
  low: "Низкая", medium: "Средняя", high: "Высокая", full_swing: "Качание", fixed: "Фиксировано",
  swing_vertical: "Верт. жалюзи", swing_horizontal: "Гор. жалюзи",
  floor: "Пол", water: "Вода", heating: "Отопление", hot_water: "Горячая вода",
  heating_water: "Отопление + вода", quick_heat: "Быстрый нагрев", quiet_mode: "Тихий режим",
  disinfection: "Дезинфекция", entity_not_found: "Объект не найден",
  date_time: "Дата и время", date: "Дата", time: "Время", sync_time: "Синхронизировать с Home Assistant",
  start_time: "Старт", stop_time: "Стоп", nc_extract_start: "Т. вытяжки для старта",
  nc_extract_stop: "Т. вытяжки для стопа", nc_outdoor_stop: "Т. улицы для стопа",
  nc_supply_setpoint: "Уставка приточного воздуха",
};

const lv = {
  recuperator: "Rekuperators", air_conditioner: "Kondicionieris", heat_pump: "Siltumsūknis",
  sensors: "Temperatūras", device_settings: "Ierīces iestatījumi", settings: "Iestatījumi",
  recuperation: "Rekuperācija", fan_speed: "Ventilatora ātrums", supply: "Pieplūde", exhaust: "Nosūce",
  off: "Izslēgts", on: "Ieslēgts", building_protection: "Ēkas aizsardzība", economy: "Ekonomiskais",
  comfort: "Normālais", boost: "Boost", outdoor: "Ārā", indoor: "Iekštelpās",
  supply_air: "Pieplūdes gaiss", extract_air: "Nosūces gaiss", night_cooling: "Nakts dzesēšana",
  power: "Barošana", running: "Darbojas", standby: "Gaidstāve", target_temperature: "Mērķa temperatūra",
  heat: "Sildīšana", cool: "Dzesēšana", dry: "Sausināšana", fan_only: "Ventilācija", auto: "Auto",
  low: "Zems", medium: "Vidējs", high: "Augsts", full_swing: "Šūpošana", fixed: "Fiksēts",
  swing_vertical: "Vert. žalūzijas", swing_horizontal: "Horiz. žalūzijas",
  floor: "Grīda", water: "Ūdens", heating: "Apkure", hot_water: "Karstais ūdens",
  heating_water: "Apkure + ūdens", quick_heat: "Ātrā sildīšana", quiet_mode: "Klusais režīms",
  disinfection: "Dezinfekcija", entity_not_found: "Objekts nav atrasts",
  date_time: "Datums un laiks", date: "Datums", time: "Laiks", sync_time: "Sinhronizēt ar Home Assistant",
  start_time: "Sākums", stop_time: "Beigas", nc_extract_start: "Nosūces temp. startam",
  nc_extract_stop: "Nosūces temp. apturēšanai", nc_outdoor_stop: "Āra temp. apturēšanai",
  nc_supply_setpoint: "Pieplūdes gaisa uzstādījums",
};

const DICTS = { en, ru, lv };

export function localize(hass, config, key) {
  const lang = (config && config.language && config.language !== "auto")
    ? config.language
    : (hass && hass.language ? hass.language.split("-")[0] : "en");
  const dict = DICTS[lang] || en;
  return dict[key] ?? en[key] ?? key;
}

export const LANGUAGES = ["auto", "en", "ru", "lv"];
