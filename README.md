# AlpicAir Climate Cards for Home Assistant

Единый набор Lovelace-карточек для климатического оборудования AlpicAir: рекуператор, кондиционер, тепловой насос, температуры и настройки устройства.

- Полностью визуальные редакторы (`ha-form`) — все кнопки управления включаются/выключаются галочками.
- Кондиционер настраивается **одной сущностью** домена `climate`.
- Кнопка настроек рекуператора поддерживает **короткое нажатие** и **долгое удержание** с настраиваемыми действиями.
- Локализация EN / RU / LV, авто-выбор по языку Home Assistant.
- Светлая и тёмная темы через переменные темы HA.

## Установка через HACS

1. HACS → Frontend → ⋮ → Custom repositories.
2. URL: `https://github.com/keziksdmitrijs-byte/recuperator-custom-card`, тип: **Lovelace**.
3. Установить «AlpicAir Climate Cards» и перезагрузить страницу.

Ресурс добавляется автоматически. Ручное добавление:

```yaml
resources:
  - url: /hacsfiles/recuperator-custom-card/alpicair-cards.js
    type: module
```

### Ручная установка

Скопируйте `dist/alpicair-cards.js` в `config/www/` и добавьте ресурс
`/local/alpicair-cards.js` (type: `module`).

## Карточки

### `custom:alpicair-air-conditioner-card`

```yaml
type: custom:alpicair-air-conditioner-card
entity: climate.alpicair_ac      # единственная обязательная опция
name: Кондиционер
language: auto                   # auto | en | ru | lv
default_hvac_mode: cool
show_power: true
show_dial: true
show_modes: true
show_current_temperature: true
show_fan: true
show_swing_vertical: true
show_swing_horizontal: true
```

Режимы, скорости вентилятора и жалюзи берутся из атрибутов сущности
(`hvac_modes`, `fan_modes`, `swing_modes`, `swing_horizontal_modes`).

### `custom:alpicair-recuperator-card`

```yaml
type: custom:alpicair-recuperator-card
mode_entity: select.recuperator_mode
power_entity: switch.recuperator
recuperation_entity: sensor.recuperator_efficiency
fan_speed_entity: sensor.recuperator_fan_speed
show_building_protection: true
show_economy: true
show_comfort: true
show_boost: true
show_settings_button: true
settings_icon: mdi:cog
hold_time: 500
tap_action:
  action: more-info
hold_action:
  action: navigate
  navigation_path: /lovelace/recuperator-settings
```

Поддерживаемые действия для `tap_action` / `hold_action`: `more-info`,
`toggle`, `navigate`, `url`, `perform-action` (`call-service`),
`fire-dom-event`, `none`.

### `custom:alpicair-heat-pump-card`

```yaml
type: custom:alpicair-heat-pump-card
power_entity: switch.heat_pump
floor_entity: climate.heat_pump_floor
water_entity: climate.heat_pump_water
mode_entity: select.heat_pump_mode
quick_heat_entity: switch.heat_pump_quick_heat
quiet_mode_entity: switch.heat_pump_quiet
disinfection_entity: switch.heat_pump_disinfection
```

### `custom:alpicair-sensors-card`

```yaml
type: custom:alpicair-sensors-card
outdoor_entity: sensor.outdoor_temperature
indoor_entity: sensor.indoor_temperature
supply_entity: sensor.supply_air_temperature
extract_entity: sensor.extract_air_temperature
target_entity: number.recuperator_target_temperature
show_target_slider: true
```

### `custom:alpicair-device-settings-card`

```yaml
type: custom:alpicair-device-settings-card
night_cooling_entity: switch.night_cooling
nc_start_time_entity: time.night_cooling_start
nc_stop_time_entity: time.night_cooling_stop
nc_extract_start_entity: number.nc_extract_start
nc_extract_stop_entity: number.nc_extract_stop
nc_outdoor_stop_entity: number.nc_outdoor_stop
nc_supply_setpoint_entity: number.nc_supply_setpoint
bp_supply_entity: number.bp_supply
bp_exhaust_entity: number.bp_exhaust
eco_supply_entity: number.eco_supply
eco_exhaust_entity: number.eco_exhaust
comfort_supply_entity: number.comfort_supply
comfort_exhaust_entity: number.comfort_exhaust
boost_supply_entity: number.boost_supply
boost_exhaust_entity: number.boost_exhaust
date_entity: date.device_date
time_entity: time.device_time
```

## Разработка

```bash
npm install
npm run build     # dist/alpicair-cards.js
npm run dev       # watch
```

## Лицензия

MIT

## Interface settings card (global)

```yaml
type: custom:alpicair-ui-settings-card
```

Changes language, theme (light/dark/auto), accent color and compact mode for **all**
AlpicAir cards at once. The choice is stored in the browser (localStorage) and applied
instantly to every card on every dashboard view.

## Heat pump entities

Floor and boiler temperatures use plain sensors + writable numbers (no climate entity):

```yaml
type: custom:alpicair-heat-pump-card
floor_current_entity: sensor.heat_pump_floor_temperature
floor_target_entity: number.heat_pump_floor_setpoint
water_current_entity: sensor.heat_pump_boiler_temperature
water_target_entity: number.heat_pump_boiler_setpoint
mode_entity: select.heat_pump_mode
option_heating: Отопление
option_hot_water: Горячая вода
option_heating_water: Отопление + вода
```

## Sizes (buttons & fonts)

Every card supports two options, editable in the visual editor:

| Option | Default | Meaning |
| --- | --- | --- |
| `button_scale` | `1` | Button height, padding, icon and control size multiplier (0.8 – 2) |
| `font_scale` | `1` | Text size multiplier for all labels and values (0.8 – 2) |

```yaml
type: custom:alpicair-heat-pump-card
button_scale: 1.4
font_scale: 1.2
```

The **Interface settings** card (`custom:alpicair-ui-settings-card`) has
*Button size* and *Font size* sliders that apply to **all** AlpicAir cards in
this browser. A per-card `button_scale` / `font_scale` overrides the global value.
