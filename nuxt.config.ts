// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {
        enabled: true
    },
    modules: [
        '@nuxtjs/i18n'
    ],
    css: [
        '@/assets/tailwind.css',
        '@/assets/sass/app.scss'
    ],
    vite: {
        plugins: [
            tailwindcss()
        ]
    },
    i18n: {
        vueI18n: './i18n.config.ts'
    }
});
