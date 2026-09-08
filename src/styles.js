import { css } from "lit";

export const cardStyles = css`
  :host {
    display: block;
    /* one shared accent palette for every AlpicAir card */
    --alp-heat: #f4511e;
    --alp-cool: #039be5;
    --alp-water: #039be5;
    --alp-perf: #43a047;
    --alp-boost: #fb8c00;
    --alp-warn: #f9a825;
  }
  /* forced light theme */
  :host([alp-theme="light"]) {
    --primary-text-color: #16181d;
    --secondary-text-color: #5f6672;
    --disabled-text-color: #9aa1ad;
    --card-background-color: #ffffff;
    --ha-card-background: #ffffff;
    --secondary-background-color: #f1f3f6;
    --divider-color: rgba(0, 0, 0, .10);
    --rgb-card-background-color: 255, 255, 255;
    color: var(--primary-text-color);
  }
  /* forced dark theme */
  :host([alp-theme="dark"]) {
    --primary-text-color: #e9edf3;
    --secondary-text-color: #9aa3b2;
    --disabled-text-color: #6b7280;
    --card-background-color: #1b1c20;
    --ha-card-background: #1b1c20;
    --secondary-background-color: #26282e;
    --divider-color: rgba(255, 255, 255, .12);
    --rgb-card-background-color: 27, 28, 32;
    --alp-heat: #ff7043;
    --alp-cool: #4fc3f7;
    --alp-water: #4fc3f7;
    --alp-perf: #66bb6a;
    --alp-boost: #ffa726;
    --alp-warn: #ffca28;
    color: var(--primary-text-color);
  }
  :host([alp-theme]) ha-card {
    background: var(--card-background-color);
    color: var(--primary-text-color);
    border: 1px solid var(--divider-color);
  }
  .card-title {
    font-size: calc(15px * var(--alp-fs, 1));
    font-weight: 800; line-height: 1.2; text-align: center;
    color: var(--primary-text-color);
  }
  .panel-header .ph-title {
    flex: 1; min-width: 0; padding: 0 8px; text-align: center;
    font-size: calc(15px * var(--alp-fs, 1)); font-weight: 800;
    overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
  }
  ha-card {
    padding: 16px;
    border-radius: var(--ha-card-border-radius, 16px);
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  .header { display: flex; align-items: center; gap: 12px; }
  .header .icon {
    width: 40px; height: 40px; border-radius: 12px;
    display: grid; place-items: center;
    background: var(--alp-soft, rgba(var(--rgb-primary-color, 3,169,244), 0.14));
    color: var(--primary-color);
  }
  .header .titles { flex: 1; min-width: 0; }
  .title { font-size: calc(15px * var(--alp-fs, 1)); font-weight: 700; line-height: 1.2; }
  .subtitle { font-size: calc(12px * var(--alp-fs, 1)); font-weight: 500; color: var(--secondary-text-color); }
  .power {
    width: calc(40px * var(--alp-bs, 1)); height: calc(40px * var(--alp-bs, 1)); border-radius: 50%; border: none; cursor: pointer;
    display: grid; place-items: center;
    background: var(--secondary-background-color); color: var(--secondary-text-color);
    transition: background .18s, color .18s;
  }
  .power.on { background: rgba(var(--rgb-primary-color, 3,169,244), 0.18); color: var(--primary-color); }
  .bar-wrap { display: flex; flex-direction: column; gap: 6px; }
  .bar-top { display: flex; justify-content: space-between; font-size: calc(12px * var(--alp-fs, 1)); font-weight: 600; }
  .bar-top .val { font-variant-numeric: tabular-nums; }
  .bar { height: 10px; border-radius: 999px; background: var(--secondary-background-color); overflow: hidden; }
  .bar > span { display: block; height: 100%; border-radius: 999px; background: var(--primary-color); transition: width .3s ease; }
  .bar.boost > span { background: var(--alp-boost, #ff9800); }
  .bar.perf > span { background: var(--alp-perf, #4caf50); }
  .grid { display: grid; gap: 8px; }
  .grid.c2 { grid-template-columns: repeat(2, 1fr); }
  .grid.c3 { grid-template-columns: repeat(3, 1fr); }
  .grid.c4 { grid-template-columns: repeat(4, 1fr); }
  .grid.c5 { grid-template-columns: repeat(5, 1fr); }
  button.mode, button.plain {
    min-height: calc(46px * var(--alp-bs, 1)); border-radius: 12px; cursor: pointer;
    border: 1px solid var(--divider-color);
    background: var(--secondary-background-color);
    color: var(--secondary-text-color);
    font-size: calc(13px * var(--alp-fs, 1)); font-weight: 600;
    display: flex; align-items: center; justify-content: center; gap: 6px;
    padding: calc(8px * var(--alp-bs, 1)) calc(6px * var(--alp-bs, 1)); text-align: center; line-height: 1.15;
    flex-direction: column; min-width: 0; white-space: normal;
    overflow-wrap: anywhere; word-break: break-word; hyphens: auto;
    transition: background .18s, color .18s, border-color .18s;
  }
  button.mode:hover, button.plain:hover { color: var(--primary-text-color); }
  button.mode.active {
    border-color: transparent; color: var(--primary-color);
    background: rgba(var(--rgb-primary-color, 3,169,244), 0.16);
    box-shadow: inset 0 0 0 1px currentColor;
  }
  button.mode.active.boost { color: var(--alp-boost, #ff9800); background: rgba(255,152,0,.16); }
  .metric-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; }
  .metric { border: 1px solid var(--divider-color); border-radius: 12px; padding: 10px 12px; }
  .metric .label { font-size: calc(11px * var(--alp-fs, 1)); font-weight: 600; text-transform: uppercase; letter-spacing: .04em; color: var(--secondary-text-color); }
  .metric .value { font-size: calc(20px * var(--alp-fs, 1)); font-weight: 800; font-variant-numeric: tabular-nums; }
  .row { display: flex; align-items: center; gap: 10px; }
  .slider-row { display: flex; flex-direction: column; gap: 4px; }
  input[type="range"] {
    -webkit-appearance: none; appearance: none; width: 100%; margin: 0;
    background: transparent; cursor: pointer; height: calc(32px * var(--alp-bs, 1));
  }
  input[type="range"]::-webkit-slider-runnable-track {
    height: calc(18px * var(--alp-bs, 1)); border-radius: 999px;
    background: var(--card-background-color, #fff); border: 1px solid var(--divider-color);
  }
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none; appearance: none;
    width: calc(30px * var(--alp-bs, 1)); height: calc(30px * var(--alp-bs, 1));
    margin-top: calc(-7px * var(--alp-bs, 1)); border-radius: 50%;
    background: var(--primary-color); border: 4px solid var(--card-background-color, #fff);
    box-shadow: 0 1px 4px rgba(0,0,0,.28);
  }
  input[type="range"]::-moz-range-track {
    height: calc(18px * var(--alp-bs, 1)); border-radius: 999px;
    background: var(--card-background-color, #fff); border: 1px solid var(--divider-color);
  }
  input[type="range"]::-moz-range-thumb {
    width: calc(26px * var(--alp-bs, 1)); height: calc(26px * var(--alp-bs, 1));
    border-radius: 50%; background: var(--primary-color);
    border: 4px solid var(--card-background-color, #fff);
  }
  input[type="range"].heat::-webkit-slider-thumb { background: var(--alp-heat, #f4511e); }
  input[type="range"].heat::-moz-range-thumb { background: var(--alp-heat, #f4511e); }
  input[type="range"].water::-webkit-slider-thumb { background: var(--alp-water, #039be5); }
  input[type="range"].water::-moz-range-thumb { background: var(--alp-water, #039be5); }
  .dial-wrap { position: relative; margin: 0 auto; max-width: 260px; width: 100%; }
  .dial-wrap svg { width: 100%; display: block; touch-action: none; }
  .dial-wrap svg.interactive { cursor: pointer; }
  .dial-center {
    position: absolute; inset: 0; display: flex; flex-direction: column;
    align-items: center; justify-content: center; pointer-events: none;
  }
  .dial-center .mode-label { font-size: calc(12px * var(--alp-fs, 1)); font-weight: 700; text-transform: uppercase; letter-spacing: .05em; color: var(--secondary-text-color); }
  .dial-center .target { font-size: calc(44px * var(--alp-fs, 1)); font-weight: 800; line-height: 1; font-variant-numeric: tabular-nums; }
  .dial-center .target sup { font-size: calc(16px * var(--alp-fs, 1)); vertical-align: super; }
  .dial-center .current { font-size: calc(13px * var(--alp-fs, 1)); font-weight: 600; color: var(--secondary-text-color); display: flex; align-items: center; gap: 4px; margin-top: 6px; }
  .select-row {
    position: relative; display: flex; align-items: center; gap: 10px;
    border: 1px solid var(--divider-color); border-radius: 12px; padding: calc(8px * var(--alp-bs, 1)) 12px;
    background: var(--secondary-background-color);
  }
  .select-row .lbl { flex: 1; font-size: calc(13px * var(--alp-fs, 1)); font-weight: 600; }
  .select-row select { position: absolute; inset: 0; opacity: 0; cursor: pointer; width: 100%; height: 100%; }
  .dimmed { opacity: .45; pointer-events: none; }
  .section-title { font-size: calc(11px * var(--alp-fs, 1)); font-weight: 700; text-transform: uppercase; letter-spacing: .06em; color: var(--secondary-text-color); }
  .warn { color: var(--error-color, #db4437); font-size: calc(13px * var(--alp-fs, 1)); font-weight: 600; }
  .stepper { display: flex; align-items: center; justify-content: space-between; gap: 8px;
    border: 1px solid var(--divider-color); border-radius: 12px; padding: 6px 8px; }
  .stepper button { width: calc(32px * var(--alp-bs, 1)); height: calc(32px * var(--alp-bs, 1)); border-radius: 8px; border: none; cursor: pointer;
    background: var(--secondary-background-color); color: var(--primary-text-color); font-size: calc(18px * var(--alp-fs, 1)); }
  .stepper .v { font-weight: 700; font-variant-numeric: tabular-nums; }

  :host([alp-theme="dark"]) ha-card {
    background: #1b1c20; color: #f2f3f5;
    --primary-text-color: #f2f3f5;
    --secondary-text-color: #a4a8b0;
    --secondary-background-color: #26282e;
    --divider-color: #34363d;
    --card-background-color: #1b1c20;
  }
  :host([alp-theme="light"]) ha-card {
    background: #ffffff; color: #16181d;
    --primary-text-color: #16181d;
    --secondary-text-color: #626873;
    --secondary-background-color: #f2f4f7;
    --divider-color: #e2e5ea;
    --card-background-color: #ffffff;
  }
  :host([alp-compact]) ha-card { padding: 10px; gap: 8px; }
  :host([alp-compact]) button.mode, :host([alp-compact]) button.plain { min-height: calc(38px * var(--alp-bs, 1)); font-size: calc(12px * var(--alp-fs, 1)); }
  .hero { display: flex; align-items: stretch; gap: 12px;
    border: 1px solid var(--divider-color); border-radius: 16px;
    background: var(--secondary-background-color); padding: 14px 10px; }
  .hero-col { flex: 1; display: flex; flex-direction: column; align-items: center; gap: 2px; }
  .hero-sep { width: 1px; background: var(--divider-color); }
  .hero-label { display: flex; align-items: center; gap: 6px; font-size: calc(11px * var(--alp-fs, 1)); font-weight: 700;
    text-transform: uppercase; letter-spacing: .05em; color: var(--secondary-text-color); }
  .hero-current { font-size: calc(13px * var(--alp-fs, 1)); font-weight: 600; font-variant-numeric: tabular-nums; color: var(--secondary-text-color); }
  .hero-target { font-size: calc(34px * var(--alp-fs, 1)); font-weight: 800; line-height: 1.05; font-variant-numeric: tabular-nums; }
  .hero-current.heat, .hero-target.heat { color: var(--alp-heat, #f4511e); }
  .hero-current.water, .hero-target.water { color: var(--alp-water, #039be5); }
  .swatches { display: flex; flex-wrap: wrap; gap: 10px; }
  .swatch { width: calc(40px * var(--alp-bs, 1)); height: calc(40px * var(--alp-bs, 1)); border-radius: 50%; cursor: pointer;
    border: 2px solid var(--divider-color); background: var(--secondary-background-color);
    display: grid; place-items: center; color: var(--secondary-text-color); }
  .swatch.active { box-shadow: 0 0 0 3px rgba(var(--rgb-primary-color, 3,169,244), .35); border-color: transparent; }
  button.mode ha-icon, button.plain ha-icon, .power ha-icon, .swatch ha-icon {
    --mdc-icon-size: calc(20px * var(--alp-bs, 1)) !important;
  }

  /* --- mockup-aligned building blocks --- */
  .panel { border: 1px solid var(--divider-color); border-radius: 14px; padding: 12px;
    display: flex; flex-direction: column; gap: 10px; }
  .field { background: var(--secondary-background-color); border-radius: 12px; padding: 8px 10px;
    display: flex; flex-direction: column; gap: 2px; }
  .field .flabel { font-size: calc(11px * var(--alp-fs, 1)); font-weight: 600; text-transform: uppercase;
    letter-spacing: .04em; color: var(--secondary-text-color); display: flex; align-items: center; gap: 4px; }
  .field input { border: none; background: transparent; color: var(--primary-text-color); width: 100%;
    font-size: calc(15px * var(--alp-fs, 1)); font-weight: 800; outline: none; font-variant-numeric: tabular-nums;
    font-family: inherit; }
  .tempstep { display: flex; align-items: center; gap: 8px; background: var(--secondary-background-color);
    border-radius: 12px; padding: calc(6px * var(--alp-bs, 1)) 10px; }
  .tempstep .lbl { flex: 1; min-width: 0; font-size: calc(12px * var(--alp-fs, 1)); font-weight: 600;
    color: var(--secondary-text-color); line-height: 1.2; }
  .tempstep .v { flex-shrink: 0; font-size: calc(17px * var(--alp-fs, 1)); font-weight: 800;
    font-variant-numeric: tabular-nums; }
  .tempstep .v.heat { color: var(--alp-heat, #f4511e); }
  .tempstep .v.water { color: var(--alp-water, #039be5); }
  .tempstep .sub { font-size: calc(12px * var(--alp-fs, 1)); font-weight: 600; color: var(--secondary-text-color); }
  .stepbtn { flex-shrink: 0; width: calc(34px * var(--alp-bs, 1)); height: calc(34px * var(--alp-bs, 1));
    border-radius: 10px; border: 1px solid var(--divider-color); background: var(--card-background-color, #fff);
    color: var(--primary-text-color); font-size: calc(18px * var(--alp-fs, 1)); font-weight: 700;
    cursor: pointer; display: grid; place-items: center; }
  .stepbtn:active { transform: scale(.95); }
  .target-box { background: var(--secondary-background-color); border-radius: 16px; padding: 14px;
    display: flex; flex-direction: column; gap: 8px; }
  .target-head { display: flex; align-items: baseline; justify-content: space-between; gap: 10px; }
  .target-head .k { font-size: calc(12px * var(--alp-fs, 1)); font-weight: 700; text-transform: uppercase;
    letter-spacing: .05em; color: var(--secondary-text-color); }
  .target-head .v { font-size: calc(30px * var(--alp-fs, 1)); font-weight: 800;
    font-variant-numeric: tabular-nums; color: var(--alp-heat, #f4511e); }
  .target-head .v small { font-size: calc(16px * var(--alp-fs, 1)); }
  .range-legend { display: flex; justify-content: space-between; font-size: calc(12px * var(--alp-fs, 1));
    font-weight: 700; color: var(--secondary-text-color); }
  .metric-grid.stacked { grid-template-columns: 1fr; }
  .metric-grid.horiz { grid-template-columns: none; grid-auto-flow: column; grid-auto-columns: minmax(0, 1fr); }
  .metric-grid.horiz .metric { text-align: center; padding: 10px 8px; }
  .hero-current.big { font-size: calc(40px * var(--alp-fs, 1)); font-weight: 800; line-height: 1.05; }

  /* --- recuperator panel (ring) --- */
  .panel-card { align-items: center; }
  .ring-wrap { position: relative; display: grid; place-items: center; }
  .ring { display: block; }
  .ring-center {
    position: absolute; inset: var(--alp-ring-inset, 30px); margin: auto;
    box-sizing: border-box;
    display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px;
    border-radius: 50%; border: 2px solid var(--divider-color);
    background: var(--secondary-background-color); cursor: pointer;
    transition: transform .12s;
  }
  .ring-center:active { transform: scale(.97); }
  .ring-center .rc-mode { font-size: calc(15px * var(--alp-fs, 1)); font-weight: 800; line-height: 1.1; padding: 0 8px; text-align: center; }
  .ring-center .rc-pct { font-size: calc(13px * var(--alp-fs, 1)); font-weight: 700; font-variant-numeric: tabular-nums; color: var(--secondary-text-color); }
  .ring-overlay {
    position: absolute; inset: 0; display: grid; place-items: center;
    border-radius: 50%; background: var(--ha-card-background, var(--card-background-color, rgba(0,0,0,.82)));
    backdrop-filter: blur(4px);
  }
  .ring-overlay-grid { display: grid; gap: 6px; width: 78%; }
  .ring-stats { width: 100%; margin-top: 8px; }
  .ring-stat {
    border-radius: 12px; background: var(--secondary-background-color);
    border: 1px solid transparent; padding: calc(8px * var(--alp-bs, 1)) 6px;
    display: flex; flex-direction: column; align-items: center; gap: 4px;
    cursor: pointer; text-align: center; transition: background .18s;
  }
  button.ring-stat { cursor: pointer; }
  .ring-stat.sel { background: rgba(var(--rgb-primary-color, 3,169,244), .16); border-color: var(--primary-color); }
  .ring-stat.sel.heat { background: rgba(244,81,30,.16); border-color: var(--alp-heat, #f4511e); }
  .ring-stat .rs-val { font-size: calc(17px * var(--alp-fs, 1)); font-weight: 800; font-variant-numeric: tabular-nums; }
  .ring-stepper { display: flex; align-items: center; justify-content: space-between; gap: 10px;
    width: 100%; background: var(--secondary-background-color); border-radius: 12px; padding: 6px 12px; margin-top: 14px; }
  .ring-stepper .rs-target { font-size: calc(22px * var(--alp-fs, 1)); font-weight: 800; font-variant-numeric: tabular-nums; color: var(--alp-heat, #f4511e); }
  .ring-mini { width: 100%; margin-top: 14px; }

  /* --- shared panel header (back + power) --- */
  .panel-header {
    display: flex; align-items: center; justify-content: space-between;
    width: 100%; margin-bottom: 4px;
  }
  .ph-btn {
    width: calc(40px * var(--alp-bs, 1)); height: calc(40px * var(--alp-bs, 1));
    border-radius: 12px; border: 1px solid var(--divider-color);
    background: var(--secondary-background-color); color: var(--secondary-text-color);
    cursor: pointer; display: grid; place-items: center;
    transition: background .18s, color .18s;
  }
  .ph-btn:hover { color: var(--primary-text-color); }
  .ph-btn:active { transform: scale(.97); }
  .ph-btn.power.on {
    border-color: transparent;
    background: rgba(var(--rgb-primary-color, 3,169,244), .18);
    color: var(--primary-color);
  }
  .ph-btn ha-icon { --mdc-icon-size: calc(20px * var(--alp-bs, 1)) !important; }

  /* --- ring center labels (AC / heat-pump panels) --- */
  .ring-center .rc-cap {
    font-size: calc(11px * var(--alp-fs, 1)); font-weight: 700; text-transform: uppercase;
    letter-spacing: .04em; color: var(--secondary-text-color);
    display: inline-flex; align-items: center; gap: 4px;
  }
  .ring-center .rc-target {
    font-size: calc(40px * var(--alp-fs, 1)); font-weight: 800; line-height: 1;
    font-variant-numeric: tabular-nums;
  }
  .ring-center .rc-sub {
    font-size: calc(13px * var(--alp-fs, 1)); font-weight: 600; color: var(--secondary-text-color);
    text-align: center; padding: 0 6px;
  }

  /* --- tiles below the ring --- */
  .ring-tiles { width: 100%; margin-top: 8px; }
  .tile {
    min-height: calc(62px * var(--alp-bs, 1)); border-radius: 12px; cursor: pointer;
    border: 1px solid transparent; background: var(--secondary-background-color);
    color: var(--primary-text-color);
    display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px;
    padding: 8px 4px; text-align: center; transition: background .18s, border-color .18s;
  }
  .tile:active { transform: scale(.97); }
  .tile.sel { background: rgba(var(--rgb-primary-color, 3,169,244), .16); border-color: var(--primary-color); }
  .tile-icon { color: var(--secondary-text-color); display: grid; place-items: center; }
  .tile.sel .tile-icon { color: var(--primary-color); }
  .tile-val {
    font-size: calc(13px * var(--alp-fs, 1)); font-weight: 800; line-height: 1.15;
    min-width: 0; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
  }
  .tile-dots { display: flex; align-items: center; gap: 6px; margin-top: 2px; }
  .dot {
    width: 8px; height: 8px; border-radius: 50%;
    background: rgba(128,128,128,.35);
  }
  .dot.active { background: var(--primary-color); }
  .dot.boost { background: var(--alp-boost, #ff9800); }
  .dot.perf { background: var(--alp-perf, #4caf50); }

  /* --- option rows revealed by tiles --- */
  .tilezone { position: relative; width: 100%; margin-top: 14px; }
  .tilezone > .grid.dimmed {
    opacity: .25; filter: blur(1.5px); pointer-events: none;
    transition: opacity .18s, filter .18s;
  }
  .tilezone > .floating {
    position: absolute; left: 0; right: 0; bottom: 0; margin: 0; z-index: 40;
    background: var(--card-background-color, #fff);
    border-radius: 16px; padding: 8px; box-sizing: border-box;
    box-shadow: 0 10px 28px rgba(0,0,0,.22);
    animation: alp-pop .18s ease-out;
  }
  .tilezone > .ring-stepper.floating { display: flex; align-items: center; justify-content: center; gap: 14px; }
  @keyframes alp-pop { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
  .opt-row {
    display: flex; flex-wrap: wrap; gap: 8px; width: 100%; margin-top: 14px;
  }

  .opt {
    flex: 1 1 30%; min-height: calc(44px * var(--alp-bs, 1)); border-radius: 12px; cursor: pointer;
    border: 2px solid var(--divider-color); background: var(--secondary-background-color);
    color: var(--secondary-text-color); font-size: calc(13px * var(--alp-fs, 1)); font-weight: 700;
    display: flex; align-items: center; justify-content: center; gap: 6px; padding: 6px 8px;
    transition: background .18s, color .18s, border-color .18s;
  }
  .opt:hover { color: var(--primary-text-color); }
  .opt.active {
    border-color: transparent; color: var(--primary-color);
    background: rgba(var(--rgb-primary-color, 3,169,244), .16);
  }
  .opt.active.boost { color: var(--alp-boost, #ff9800); background: rgba(255,152,0,.16); }
  .opt.active.perf { color: var(--alp-perf, #4caf50); background: rgba(76,175,80,.16); }
  .opt span { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

  /* --- target-temperature edit overlay (AC panel) --- */
  .ring-temp-edit {
    display: flex; align-items: center; gap: 14px;
  }
  .ring-temp-edit .rte-val {
    font-size: calc(28px * var(--alp-fs, 1)); font-weight: 800; font-variant-numeric: tabular-nums;
    color: var(--primary-color);
  }
  .stepbtn.round {
    width: calc(44px * var(--alp-bs, 1)); height: calc(44px * var(--alp-bs, 1)); border-radius: 50%;
  }

  /* --- target rows (heat-pump panel) --- */
  .ring-target-rows { width: 84%; display: flex; flex-direction: column; gap: 8px; }
  .rt-row {
    display: flex; align-items: center; justify-content: space-between; gap: 8px;
    background: var(--secondary-background-color); border-radius: 12px; padding: 6px 8px;
  }
  .rt-inner { display: flex; flex-direction: column; align-items: center; gap: 2px; flex: 1; }
  .rt-label {
    font-size: calc(11px * var(--alp-fs, 1)); font-weight: 700; text-transform: uppercase;
    letter-spacing: .04em; color: var(--secondary-text-color);
    display: inline-flex; align-items: center; gap: 4px;
  }
  .rt-val { font-size: calc(20px * var(--alp-fs, 1)); font-weight: 800; font-variant-numeric: tabular-nums; }

  /* tap on the empty overlay backdrop closes the sheet */
  .panel-card { position: relative; overflow: hidden; }
  .panel-backdrop {
    position: absolute; inset: 0; z-index: 30; border: 0; margin: 0; padding: 0;
    cursor: default; background: rgba(var(--rgb-card-background-color, 255,255,255), .55);
    backdrop-filter: blur(1.5px); -webkit-backdrop-filter: blur(1.5px);
  }
  .ring-overlay { z-index: 40; cursor: default; background: var(--card-background-color, #fff); box-shadow: 0 10px 28px rgba(0,0,0,.22); }

  /* --- start menu --- */
  .start-menu-card { gap: 18px; overflow: hidden; }
  .start-top { display: flex; align-items: center; justify-content: space-between; gap: 18px; min-height: 108px; }
  .start-time-block { min-width: 0; }
  .start-name { margin-bottom: 2px; font-size: calc(13px * var(--alp-fs, 1)); font-weight: 700; color: var(--secondary-text-color); }
  .start-time { display: block; font-size: calc(52px * var(--alp-fs, 1)); line-height: 1; font-weight: 800; font-variant-numeric: tabular-nums; }
  .start-date { margin-top: 6px; font-size: calc(13px * var(--alp-fs, 1)); font-weight: 600; color: var(--secondary-text-color); text-transform: capitalize; }
  .start-weather { flex: 0 0 auto; display: grid; grid-template-columns: auto auto; align-items: center; column-gap: 8px; padding: 12px; border-radius: 12px; background: var(--secondary-background-color); }
  .start-weather ha-icon { grid-row: 1 / span 2; color: var(--primary-color); --mdc-icon-size: calc(34px * var(--alp-bs, 1)); }
  .start-weather-temp { font-size: calc(22px * var(--alp-fs, 1)); line-height: 1; font-weight: 800; font-variant-numeric: tabular-nums; }
  .start-weather-state { max-width: 130px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: calc(11px * var(--alp-fs, 1)); font-weight: 600; color: var(--secondary-text-color); }
  .start-actions { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; }
  .start-action { min-height: calc(64px * var(--alp-bs, 1)); min-width: 0; border: 1px solid var(--divider-color); border-radius: 12px; padding: 10px 10px; cursor: pointer; background: var(--secondary-background-color); color: var(--primary-text-color); display: grid; grid-template-columns: auto minmax(0, 1fr) auto; align-items: center; gap: 8px; text-align: left; font: inherit; font-size: calc(13px * var(--alp-fs, 1)); font-weight: 700; }
  .start-action:active { transform: scale(.98); }
  .start-action > ha-icon:first-child { color: var(--primary-color); --mdc-icon-size: calc(24px * var(--alp-bs, 1)); }
  .start-action span { min-width: 0; overflow-wrap: anywhere; }
  .start-action .start-chevron { color: var(--secondary-text-color); --mdc-icon-size: 18px; }
  .start-action.menu { border-color: transparent; background: var(--primary-color); color: var(--text-primary-color, #fff); }
  .start-action.menu > ha-icon, .start-action.menu .start-chevron { color: currentColor; }
  @media (max-width: 360px) {
    .start-top { align-items: flex-start; flex-direction: column; }
    .start-weather { width: 100%; box-sizing: border-box; }
    .start-actions { grid-template-columns: 1fr; }
  }
`;
