import { atom } from "jotai";
import { type HierarchicalData } from "@/store/9-types";
import { type OurNode, type OurLink } from "./9-types-internal";
import { createAllNodesAndLinks } from "./3-create-all-nodes-and-links";

const _dataAtom = atom<HierarchicalData>({
    nodes: [],
    links: [],
});

export const dataAtom = atom((get) => get(_dataAtom), _SetDataAtom);
export const allNodesAtom = atom<OurNode[]>([]);
export const linkDataAtom = atom<OurLink[]>([]);

function _SetDataAtom(get: Getter, set: Setter, newData: HierarchicalData): void {
    const { allNodes, linkData } = createAllNodesAndLinks(newData);
    set(allNodesAtom, allNodes);
    set(linkDataAtom, linkData);
    set(_dataAtom, newData);
}
