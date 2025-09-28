import { type HierarchicalData } from "@/store/9-types";
import { type OurNode, type OurLink } from "./9-types-internal";

export function createAllNodesAndLinks(data: HierarchicalData): { allNodes: OurNode[]; linkData: OurLink[]; } {
    // Flatten all nodes for circular layout
    const allNodes: OurNode[] = [];
    data.nodes.forEach(
        (cluster) => {
            cluster.children?.forEach(
                (child) => {
                    allNodes.push({ ...child, cluster: cluster.name } as OurNode); // the rest will be added by the next loop
                }
            );
        }
    );

    // Create a map for quick node lookup
    const nodeMap = new Map<string, OurNode>();
    allNodes.forEach(
        (node) => {
            nodeMap.set(node.name, node);
        }
    );

    // Create link data
    const linkData: OurLink[] = data.links
        .map(
            (link) => ({
                source: nodeMap.get(link.source),
                target: nodeMap.get(link.target),
                value: link.value,
                keyName: `${link.source}-${link.target}`
            })
        )
        .filter(
            link => link.source && link.target
        );

    return { allNodes, linkData };
}
