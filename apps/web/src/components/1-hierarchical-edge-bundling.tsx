import { type HTMLAttributes, useEffect, useRef  } from "react";
import { classNames } from "../utils";
import { type HierarchicalData } from "../store/9-types";
import { updateD3Diagram } from "./2-update-d3-diagram";

export interface HierarchicalEdgeBundlingProps {
    data: HierarchicalData;
    width?: number;
    height?: number;
}

export function HierarchicalEdgeBundling({ data, width = 800, height = 600, className, ...rest }: HierarchicalEdgeBundlingProps & HTMLAttributes<HTMLDivElement>) {
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(
        () => updateD3Diagram({ data, width, height, svgRef }),
        [data, width, height]
    );

    return (
        <div className={classNames("flex flex-col items-center", className)} {...rest}>
            <svg
                ref={svgRef}
                // width={width}
                // height={height}
                className="size-full border bg-white border-gray-200 rounded-lg shadow-sm"
            />
        </div>
    );
}
