import { useEffect, useRef } from "react";
import { type HierarchicalData } from "../store/9-types";
import { updateD3Diagram } from "./2-update-d3-diagram";

export interface HierarchicalEdgeBundlingProps {
    data: HierarchicalData;
    width?: number;
    height?: number;
}

export function HierarchicalEdgeBundling({ data, width = 800, height = 600 }: HierarchicalEdgeBundlingProps) {
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(
        () => updateD3Diagram({ data, width, height, svgRef }),
        [data, width, height]
    );

    return (
        <div className="flex flex-col items-center">
            <svg
                ref={svgRef}
                width={width}
                height={height}
                className="border border-gray-200 rounded-lg shadow-sm bg-white"
            />
        </div>
    );
}
