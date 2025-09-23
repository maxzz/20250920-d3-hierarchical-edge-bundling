import { type HTMLAttributes, useEffect, useRef } from "react";
import { classNames } from "../../utils";
import { type HierarchicalData } from "../../store/9-types";
import { positionNodes, updateD3Diagram } from "./2r-update-d3-diagram";
import { useAtomValue, useSetAtom } from "jotai";
import { allNodesAtom, dataAtom, linkDataAtom } from "./8-atoms";

export function HierarchicalEdgeBundlingReact({ data, className, ...rest }: { data: HierarchicalData; } & HTMLAttributes<SVGSVGElement>) {
    const svgRef = useRef<SVGSVGElement>(null);

    const width = 800;
    const height = 600;

    const setData = useSetAtom(dataAtom);
    const allNodes = useAtomValue(allNodesAtom);
    const linkData = useAtomValue(linkDataAtom);

    useEffect(
        () => {
            console.log('useEffect---', data);
            setData(data);

            console.log('useEffect\n    allNodes %o\n    linkData %o', allNodes, linkData);
        }, [data]
    );

    useEffect(
        () => {
            console.log('useEffect---2', data);
            const radius = Math.min(width, height) / 2 - 80;
            const centerX = width / 2;
            const centerY = height / 2;
            positionNodes(allNodes, centerX, centerY, radius);
        }, [allNodes]
    );

    console.log('render\n    allNodes %o\n    linkData %o', allNodes, linkData);

    // useEffect(
    //     () => updateD3Diagram({ data, width, height, svgRef }),
    //     [data, width, height]
    // );

    return (
        <svg
            ref={svgRef}
            viewBox={`0 0 ${width} ${height}`}
            className={classNames("size-full border bg-white border-gray-200 rounded-lg shadow-sm", className)}
            {...rest}
        >
        </svg>
    );
}
