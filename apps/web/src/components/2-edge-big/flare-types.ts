// First, import the JSON file and use typeof to infer its structure
import flareData from './data/flare.json';

// Method 1: Direct type inference from imported JSON
export type FlareData = typeof flareData;
export type FlareItem = typeof flareData[0];

// Method 2: Explicitly define the inferred structure
export interface FlareNode {
    name: string;
    size: number;
    imports: string[];
}

export type FlareDataArray = FlareNode[];

// Method 3: Use the inferred type with additional validation
export function isFlareNode(obj: any): obj is FlareNode {
    return (
        typeof obj === 'object' &&
        typeof obj.name === 'string' &&
        typeof obj.size === 'number' &&
        Array.isArray(obj.imports) &&
        obj.imports.every((imp: any) => typeof imp === 'string')
    );
}

export function validateFlareData(data: any): data is FlareDataArray {
    return Array.isArray(data) && data.every(isFlareNode);
}

// Export the actual data with proper typing
export const typedFlareData: FlareDataArray = flareData;

// Utility to get type-safe access to the data
export function getFlareData(): FlareDataArray {
    if (!validateFlareData(flareData)) {
        throw new Error('Invalid flare data structure');
    }
    return flareData;
}