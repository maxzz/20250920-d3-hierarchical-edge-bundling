import * as d3 from "d3";
import { type HierarchicalEdgeBundlingProps } from "./1-hierarchical-edge-bundling";
import { type NodeData } from "@/store/9-types";

interface OurNode extends NodeData {
    // group: number;
    // name: string;
    children?: OurNode[];

    cluster: string;
    angle: number;
    x: number;
    y: number;
};

interface OurLink {
    source: OurNode | undefined;
    target: OurNode | undefined;
    value: number;
}

export function updateD3Diagram({ data, width, height, svgRef }: Required<HierarchicalEdgeBundlingProps> & { svgRef: React.RefObject<SVGSVGElement>; }): void {
    if (!data || !svgRef.current) {
        return;
    }

    // Clear previous visualization
    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3.select(svgRef.current);
    const radius = Math.min(width, height) / 2 - 80;
    const centerX = width / 2;
    const centerY = height / 2;

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

    // Create a map for quick node lookup
    const nodeMap = new Map<string, OurNode>();
    allNodes.forEach(
        (node) => {
            nodeMap.set(node.name, node);
        }
    );

    // Color scale for groups
    const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

    // Create link data
    const linkData: OurLink[] = data.links
        .map(
            (link) => ({
                source: nodeMap.get(link.source),
                target: nodeMap.get(link.target),
                value: link.value
            })
        )
        .filter(
            link => link.source && link.target
        );

    // Draw bundled edges
    const links = svg
        .selectAll('.link')
        .data(linkData)
        .enter()
        .append('path')
        .attr('class', 'link')
        .attr('d', (d: OurLink) => {
            if (!d.source || !d.target) {
                return '';
            }
            // Create curved path that goes through center
            const midX = (d.source.x + d.target.x) / 2;
            const midY = (d.source.y + d.target.y) / 2;
            const centerWeight = 0.4; // How much to pull toward center
            const bundleX = midX * (1 - centerWeight) + centerX * centerWeight;
            const bundleY = midY * (1 - centerWeight) + centerY * centerWeight;
            return `M ${d.source.x} ${d.source.y} Q ${bundleX} ${bundleY} ${d.target.x} ${d.target.y}`;
        })
        .style('fill', 'none')
        .style('stroke', '#999')
        .style('stroke-width', (d: any) => Math.sqrt(d.value) + 1)
        .style('stroke-opacity', 0.6)
        .style('stroke-linecap', 'round');

    // Draw nodes
    const nodeGroups = svg
        .selectAll('.node')
        .data(allNodes)
        .enter()
        .append('g')
        .attr('class', 'node')
        .attr('transform', (d: OurNode) => `translate(${d.x},${d.y})`);

    // Add circles for nodes
    nodeGroups
        .append('circle')
        .attr('r', 6 + 6)
        .style('fill', (d: OurNode) => colorScale(d.group.toString()))
        .style('stroke', '#fff')
        .style('stroke-width', 2)
        .style('cursor', 'pointer');

    // Add labels
    nodeGroups
        .append('text')
        .attr('dy', '0.31em')
        .attr('x', (d: OurNode) => d.angle > Math.PI ? -8 - 10 : 8 + 10)
        .style('text-anchor', (d: OurNode) => d.angle > Math.PI ? 'end' : 'start')
        .attr('transform', (d: OurNode) => {
            const rotation = d.angle > Math.PI
                ? d.angle * 180 / Math.PI + 180
                : d.angle * 180 / Math.PI;
            return `rotate(${rotation})`;
        })
        // .attr('transform', (d: OurNode) => {
        //     const rotation = d.angle > Math.PI
        //         ? d.angle * 180 / Math.PI + 180
        //         : d.angle * 180 / Math.PI;
        //     return `rotate(${rotation}) scale(${d.angle > Math.PI ? -1 : 1}, ${d.angle > Math.PI ? -1 : 1})`;
        // })
        .text((d: OurNode) => d.name)
        .style('font-size', '10px')
        .style('font-family', 'Arial, sans-serif')
        .style('fill', '#333');

    // Add interactivity
    nodeGroups
        .on('mouseover', function (_event, d: OurNode) {
            // Highlight connected links
            links
                .style('stroke-opacity', (link: OurLink) => (link.source === d || link.target === d) ? 1 : 0.1)
                .style('stroke-width', (link: OurLink) => (link.source === d || link.target === d) ? Math.sqrt(link.value) * 2 + 1 : Math.sqrt(link.value) + 1)
                .style('stroke', (link: OurLink) => (link.source === d || link.target === d) ? colorScale(d.group.toString()) : '#999');

            // Highlight node
            d3
                .select(this)
                .select('circle')
                .style('stroke-width', 4)
                .style('stroke', '#333')
                .attr('r', 8 + 8);
        })
        .on('mouseout', function () {
            // Reset links
            links
                .style('stroke-opacity', 0.6)
                .style('stroke-width', (link: OurLink) => Math.sqrt(link.value) + 1)
                .style('stroke', '#999');
            // Reset node
            d3
                .select(this)
                .select('circle')
                .style('stroke-width', 2)
                .style('stroke', '#fff')
                .attr('r', 6 + 6);
        });

    // Add legend for clusters
    const clusters = [...new Set(allNodes.map((node: OurNode) => node.cluster))];
    const legend = svg
        .append('g')
        .attr('class', 'legend')
        .attr('transform', `translate(20, ${height})`);

    legend
        .selectAll('.legend-item')
        .data(clusters)
        .enter()
        .append('g')
        .attr('class', 'legend-item')
        .attr('transform', (_d: any, i: number) => `translate(0, ${i * 20})`)
        .each(function (d: any) {
            const group = d3.select(this);
            group
                .append('circle')
                .attr('r', 5)
                .style('fill', colorScale(data.nodes.find(n => n.name === d)?.group.toString() || '1'));
            group
                .append('text')
                .attr('x', 10)
                .attr('dy', '0.31em')
                .text(d)
                .style('font-size', '12px')
                .style('fill', '#333');
        });

    // Add title
    // svg
    //     .append('text')
    //     .attr('x', width / 2)
    //     .attr('y', 25)
    //     .attr('text-anchor', 'middle')
    //     .style('font-size', '16px')
    //     .style('font-weight', 'bold')
    //     .style('fill', '#333')
    //     .text('Hierarchical Edge Bundling');
}
