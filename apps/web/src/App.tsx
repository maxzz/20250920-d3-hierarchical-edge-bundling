import { HierarchicalEdgeBundling } from "./components/1-hierarchical-edge-bundling";
import { sampleData } from "./store/data/1-sample-data";

export function App() {
    return (
        <div className="min-h-screen max-w-3xl mx-auto text-sm bg-gray-50 grid grid-rows-[auto_1fr_auto]">

            <header className="px-4 py-2 bg-white border-b shadow-sm flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold text-gray-900">
                    Interactive Hierarchical Edge Bundling
                </h1>
                <p className="text-gray-600">
                    This visualization demonstrates hierarchical edge bundling, where connections between nodes
                    in different clusters are bundled together to reduce visual clutter and reveal structural patterns.
                </p>
            </header>

            <main className="m-4 bg-white rounded-xl shadow-lg 1overflow-hidden">
                <div className="p-6">
                    <HierarchicalEdgeBundling
                        data={sampleData}
                        width={800}
                        height={600}
                    />
                </div>

                <p className="px-4 text-gray-600">
                    <strong>Interaction:</strong> Hover over nodes to highlight their connections.
                    The visualization shows relationships between nodes grouped in different clusters with bundled edges.
                </p>
            </main>

            <footer className="bg-white border-t">
                <p className="text-center text-gray-500 text-sm">
                    September 2025
                </p>
            </footer>

        </div>
    );
}
