import { type NodeData } from "@/store/9-types";

export interface OurNode extends NodeData {
    // group: number;
    // name: string;    // Name should be unique and used as key
    children?: OurNode[];

    cluster: string;
    angle: number;
    x: number;
    y: number;
};

export interface OurLink {
    source: OurNode | undefined;
    target: OurNode | undefined;
    value: number;   // Weight of link
}
