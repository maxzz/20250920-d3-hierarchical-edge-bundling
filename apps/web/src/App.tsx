import HierarchicalEdgeBundling from './components/HierarchicalEdgeBundling';
import { sampleData } from './data/sampleData';

export function App() {
    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-2">
                            D3 Hierarchical Edge Bundling
                        </h1>
                        <p className="text-lg text-gray-600 mb-4">
                            Interactive visualization with React 19, Vite, and Tailwind CSS v4
                        </p>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="p-6 border-b border-gray-200">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                            Interactive Hierarchical Edge Bundling
                        </h2>
                        <p className="text-gray-600">
                            This visualization demonstrates hierarchical edge bundling, where connections between nodes
                            in different clusters are bundled together to reduce visual clutter and reveal structural patterns.
                        </p>
                    </div>

                    <div className="p-6">
                        <HierarchicalEdgeBundling
                            data={sampleData}
                            width={800}
                            height={600}
                        />
                    </div>

                </div>
            </main>

            <footer className="bg-white border-t mt-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <p className="text-center text-gray-500 text-sm">
                        Built with modern web technologies • September 2025
                    </p>
                </div>
            </footer>
        </div>
    );
}
