import flareData from "./flare.json";

export type FlareData = typeof flareData;
export type FlareItem = typeof flareData[0];

export const data: FlareItem[] = flareData;
