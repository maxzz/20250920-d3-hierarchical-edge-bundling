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
