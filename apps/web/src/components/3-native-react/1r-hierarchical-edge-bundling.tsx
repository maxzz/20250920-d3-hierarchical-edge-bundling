import { type HTMLAttributes, useEffect, useRef } from "react";
import { classNames } from "../../utils";
import { type HierarchicalData } from "../../store/9-types";
import { updateD3Diagram } from "./2r-update-d3-diagram";

export function HierarchicalEdgeBundlingReact({ data, className, ...rest }: { data: HierarchicalData; } & HTMLAttributes<SVGSVGElement>) {
    const svgRef = useRef<SVGSVGElement>(null);

    const width = 800;
    const height = 600;

    useEffect(
        () => updateD3Diagram({ data, width, height, svgRef }),
        [data, width, height]
    );

    return (
        <svg
            ref={svgRef}
            viewBox={`0 0 ${width} ${height}`}
            className={classNames("size-full border bg-white border-gray-200 rounded-lg shadow-sm", className)}
            {...rest}
        />
    );
}
