import { type HTMLAttributes, useEffect, useRef } from "react";
import { classNames } from "../../utils";
import { type HierarchicalData } from "../../store/9-types";
import { updateD3Diagram } from "./2r-update-d3-diagram";
import { positionNodes } from "./4-position-nodes";
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
            <Links />
        </svg>
    );
}

function Links() {
    const linkData = useAtomValue(linkDataAtom);
    console.log('Links\n    linkData %o', linkData);

    const width = 800;
    const height = 600;
    const radius = Math.min(width, height) / 2 - 80;
    const centerX = width / 2;
    const centerY = height / 2;

    const paths = linkData
        .map(
            (d, i) => {
                if (!d.source || !d.target) {
                    return;
                }
                if (!d.source.x || !d.source.y || !d.target.x || !d.target.y) {
                    return;
                }

                const midX = (d.source.x + d.target.x) / 2;
                const midY = (d.source.y + d.target.y) / 2;
                const centerWeight = 0.4; // How much to pull toward center
                const bundleX = midX * (1 - centerWeight) + centerX * centerWeight;
                const bundleY = midY * (1 - centerWeight) + centerY * centerWeight;
                return `M ${d.source.x} ${d.source.y} Q ${bundleX} ${bundleY} ${d.target.x} ${d.target.y}`;
            }
        )
        .filter(Boolean);

    return (
        <g>
            {paths.map((path, i) => (
                <path
                    key={i}
                    d={path}
                    className="link"
                    fill="none"
                    stroke="#999"
                    strokeWidth={Math.sqrt(linkData[i].value) + 1}
                    strokeOpacity={0.6}
                    strokeLinecap="round"
                />
            ))}
        </g>
    );
}
