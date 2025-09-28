/// <reference types="vite/client" />

declare module '*?asset' {
    const src: string;
    export default src;
}

interface ImportMetaEnv {
    readonly VITE_MODIFIED_VERSION?: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

declare module '*.json' {
    const value: any;
    export default value;
}

// Specific type for flare.json files
declare module '*/flare.json' {
    interface FlareNode {
        name: string;
        size: number;
        imports: string[];
    }
    const value: FlareNode[];
    export default value;
}
