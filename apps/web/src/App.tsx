import { envModifiedDate } from "./utils";
import { sampleData as sampleData1 } from "./store/1-hierarchical-edge-bundling/data/1-sample-data";
import { HierarchicalEdgeBundlingMonolith } from "./components/1-edge-simple/1-native-d3-monolith";
import { HierarchicalEdgeBundlingByParts } from "./components/1-edge-simple/2-native-d3-by-parts";
import { HierarchicalEdgeBundlingReact } from "./components/1-edge-simple/3-native-react";
import { HierarchicalEdgeBundlingMonolith2 } from "./components/2-edge-big/1-native-d3-monolith/1m-hierarchical-edge-bundling";

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

            <main className="justify-self-center px-4 max-w-3xl bg-white flex flex-col items-center justify-center">

                {/* <HierarchicalEdgeBundlingMonolith className="" data={sampleData1} /> */}
                {/* <HierarchicalEdgeBundlingReact className="" data={sampleData1} /> */}
                
                <HierarchicalEdgeBundlingByParts className="border bg-white border-gray-200 rounded-lg shadow-sm" data={sampleData1} />

                {/* <HierarchicalEdgeBundlingMonolith2 className="border bg-green-500/20 border-gray-200 rounded-lg shadow-sm" data={sampleData1} /> */}

                <p className="py-2 text-gray-600">
                    Interaction: Hover over nodes to highlight their connections.
                    The visualization shows relationships between nodes grouped in different clusters with bundled edges.
                </p>
            </main>

            <Footer />
        </div>
    );
}

function Footer() {
    return (
        <footer className="py-4 text-gray-500 bg-gray-50 border-t border-gray-200">
            <p className="text-center">
                {`Last updated: ${envModifiedDate()}`}
            </p>
        </footer>
    );
}
