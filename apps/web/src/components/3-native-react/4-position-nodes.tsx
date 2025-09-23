import { type OurNode } from "./9-types-internal";

export function positionNodes(allNodes: OurNode[], centerX: number, centerY: number, radius: number): void {
    // Create circular positions for nodes
    const angleStep = (2 * Math.PI) / allNodes.length;
    allNodes.forEach(
        (node, i) => {
            const angle = i * angleStep;
            node.x = centerX + Math.cos(angle) * radius;
            node.y = centerY + Math.sin(angle) * radius;
            node.angle = angle;
        }
    );
}
