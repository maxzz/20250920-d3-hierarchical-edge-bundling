import { atom } from "jotai";
import { type HierarchicalData } from "@/store/9-types";
import { type OurNode, type OurLink } from "./9-types-internal";
import { createAllNodesAndLinks } from "./3-create-all-nodes-and-links";

// no ready yet

const _dataAtom = atom<HierarchicalData>({
    nodes: [],
    links: [],
});

type DataModel = {
    dataAtom: PA<HierarchicalData>;
    allNodesAtom: PA<OurNode[]>;
    linkDataAtom: PA<OurLink[]>;
    coordinatesAtom: PA<{
        centerX: number;
        centerY: number;
        radius: number;
    }>;
};

export const dataModel: DataModel = {
    dataAtom: atom(
        (get) => get(_dataAtom),
        (get, set, newData: SetStateAction<HierarchicalData>) => {
            const value = typeof newData === 'function' ? newData(get(_dataAtom)) : newData;
            const { allNodes, linkData } = createAllNodesAndLinks(value);

            set(dataModel.allNodesAtom, allNodes);
            set(dataModel.linkDataAtom, linkData);
            set(_dataAtom, newData);
        }
    ),
    allNodesAtom: atom<OurNode[]>([]),
    linkDataAtom: atom<OurLink[]>([]),
    coordinatesAtom: atom({
        centerX: 0,
        centerY: 0,
        radius: 0,
    }),
};

//

export const dataAtom = atom((get) => get(_dataAtom), _SetDataAtom);

function _SetDataAtom(get: Getter, set: Setter, newData: HierarchicalData): void {
    const { allNodes, linkData } = createAllNodesAndLinks(newData);
    set(allNodesAtom, allNodes);
    set(linkDataAtom, linkData);
    set(_dataAtom, newData);
}

export const allNodesAtom = atom<OurNode[]>([]);

// export const allNodesAtom = atom(
//     (get) => {
//         const { allNodes } = createAllNodesAndLinks(get(dataModel.dataAtom));
//         // const rv;
//         return allNodes;
//     },
// );

export const linkDataAtom = atom<OurLink[]>([]);
