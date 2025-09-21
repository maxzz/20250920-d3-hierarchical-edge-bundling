import HierarchicalEdgeBundling from './components/HierarchicalEdgeBundling';
import { sampleData } from './data/sampleData';

function App() {
    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-2">
                            D3.js Hierarchical Edge Bundling
                        </h1>
                        <p className="text-lg text-gray-600 mb-4">
                            Interactive visualization with React 19, Vite, and Tailwind CSS v4
                        </p>
                        <div className="flex flex-wrap justify-center gap-2 text-sm">
                            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">React 19</span>
                            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full">D3.js v7</span>
                            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full">Vite</span>
                            <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full">Tailwind v4</span>
                            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full">TypeScript</span>
                        </div>
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

                    <div className="px-6 pb-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-gray-800 mb-2">Features</h3>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li>• Interactive node highlighting</li>
                                    <li>• Bundled edge visualization</li>
                                    <li>• Hierarchical clustering</li>
                                    <li>• Color-coded groups</li>
                                </ul>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-gray-800 mb-2">Tech Stack</h3>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li>• pnpm monorepo structure</li>
                                    <li>• React 19 with concurrent features</li>
                                    <li>• D3.js for data visualization</li>
                                    <li>• Tailwind CSS v4 for styling</li>
                                </ul>
                            </div>
                        </div>
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

export default App;