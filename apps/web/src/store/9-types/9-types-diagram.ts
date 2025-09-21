export interface NodeData {
    name: string;
    group: number;
    children?: NodeData[];
}

export interface LinkData {
    source: string;
    target: string;
    value: number;
}

export interface HierarchicalData {
    nodes: NodeData[];
    links: LinkData[];
}