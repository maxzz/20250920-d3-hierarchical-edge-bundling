import { type HierarchicalData } from "../9-types";

export const sampleData: HierarchicalData = {
    nodes: [
        // Root clusters
        {
            name: "cluster_1", group: 1, children: [
                { name: "node_1_1", group: 1 },
                { name: "node_1_2", group: 1 },
                { name: "node_1_3", group: 1 },
                { name: "node_1_4", group: 1 }
            ]
        },
        {
            name: "cluster_2", group: 2, children: [
                { name: "node_2_1", group: 2 },
                { name: "node_2_2", group: 2 },
                { name: "node_2_3", group: 2 }
            ]
        },
        {
            name: "cluster_3", group: 3, children: [
                { name: "node_3_1", group: 3 },
                { name: "node_3_2", group: 3 },
                { name: "node_3_3", group: 3 },
                { name: "node_3_4", group: 3 },
                { name: "node_3_5", group: 3 }
            ]
        },
        {
            name: "cluster_4", group: 4, children: [
                { name: "node_4_1", group: 4 },
                { name: "node_4_2", group: 4 },
                { name: "node_4_3", group: 4 }
            ]
        },
        {
            name: "cluster_5", group: 5, children: [
                { name: "node_5_1", group: 5 },
                { name: "node_5_2", group: 5 },
                { name: "node_5_3", group: 5 },
                { name: "node_5_4", group: 5 }
            ]
        }
    ],
    links: [
        // Inter-cluster connections
        { source: "node_1_1", target: "node_1_2", value: 3 },
        { source: "node_1_1", target: "node_1_3", value: 3 },
        //
        { source: "node_1_1", target: "node_2_1", value: 3 },
        { source: "node_1_2", target: "node_3_2", value: 2 },
        { source: "node_1_3", target: "node_4_1", value: 4 },
        { source: "node_1_4", target: "node_5_3", value: 1 },

        { source: "node_2_1", target: "node_3_1", value: 2 },
        { source: "node_2_2", target: "node_4_2", value: 3 },
        { source: "node_2_3", target: "node_5_1", value: 2 },

        { source: "node_3_1", target: "node_4_3", value: 4 },
        { source: "node_3_3", target: "node_5_2", value: 1 },
        { source: "node_3_4", target: "node_1_1", value: 2 },

        { source: "node_4_1", target: "node_5_4", value: 3 },
        { source: "node_4_2", target: "node_1_2", value: 20 },
        { source: "node_4_2", target: "node_5_1", value: 30 },

        { source: "node_5_1", target: "node_1_3", value: 1 },
        { source: "node_5_3", target: "node_2_2", value: 2 },
        { source: "node_5_4", target: "node_3_5", value: 3 }
    ]
};