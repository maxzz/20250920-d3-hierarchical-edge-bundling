/// <reference types="vite/client" />

declare module '*?asset' {
    const src: string;
    export default src;
}

// // Add this file to declare the env property on ImportMeta
// interface ImportMetaEnv {
//     readonly VITE_MODIFIED_VERSION?: string;
//     // add other env variables here if needed
// }

// interface ImportMeta {
//     readonly env: ImportMetaEnv;
// }
