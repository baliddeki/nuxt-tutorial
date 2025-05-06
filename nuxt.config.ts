/// <reference types="nuxt" />
// https://nuxt.com/docs/api/configuration/nuxt-config

import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
  alias: {
    "@": resolve(__dirname, "/"),
  },
  css: ["~/assets/main.scss",
  ],

  modules: ["@nuxtjs/tailwindcss"],
});

