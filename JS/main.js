import { initializeBizMap } from "./biz-map.js";

const bizpointsResp = await fetch('data/union_sq.json');
const bizpoints = await bizpointsResp.json();

initializeBizMap(bizpoints);