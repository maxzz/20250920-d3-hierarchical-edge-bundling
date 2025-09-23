import { sampleData } from "./store/data/1-sample-data";
import { HierarchicalEdgeBundlingMonolith } from "./components/1-native-d3-monolith";
import { HierarchicalEdgeBundlingByParts } from "./components/2-native-d3-by-parts";
import { HierarchicalEdgeBundlingReact } from "./components/3-native-react";

export function App() {
    return (
        <div className="min-h-screen mx-auto text-xs grid grid-rows-[auto_1fr_auto] gap-4">

            <header className="px-4 py-2 bg-gray-50 border-b border-gray-200 shadow-sm flex flex-col items-center justify-center">
                <h1 className="pb-1.5 text-xl font-bold tracking-tight text-gray-600 scale-y-150">
                    Interactive Hierarchical Edge Bundling
                </h1>
                <p className="max-w-3xl text-xs text-center text-balance text-gray-600">
                    This visualization demonstrates hierarchical edge bundling, where connections between nodes
                    in different clusters are bundled together to reduce visual clutter and reveal structural patterns.
                </p>
            </header>

            <main className="max-w-3xl mx-auto bg-white flex flex-col items-center justify-center">

                {/* <HierarchicalEdgeBundlingMonolith className="" data={sampleData} /> */}
                {/* <HierarchicalEdgeBundlingByParts className="" data={sampleData} /> */}
                <HierarchicalEdgeBundlingReact className="" data={sampleData} />

                <p className="py-1 text-gray-600">
                    Interaction: Hover over nodes to highlight their connections.
                    The visualization shows relationships between nodes grouped in different clusters with bundled edges.
                </p>
            </main>

            <footer className="py-4 text-gray-500 bg-gray-50 border-t border-gray-200">
                <p className="text-center">
                    September 2025
                </p>
            </footer>

        </div>
    );
}
