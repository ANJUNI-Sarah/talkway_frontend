/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_VERSION: string
    readonly VITE_OFFICIAL_WEBSITE: string
    readonly VITE_OFFICIAL_API_URL: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}