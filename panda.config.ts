import { defineConfig } from "@pandacss/dev";
import { theme } from "./panda.theme";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  conditions: {
    light: "[data-color-mode=light] &",
    dark: "[data-color-mode=dark] &",
  },

  // Useful for theme customization
  theme: {
    extend: theme,
  },

  // only allow token value and prevent custom or raw CSS values.
  strictTokens: false,

  // The output directory for your css system
  outdir: "styled-system",
  // todo umbenennen, damit es nach oben rutscht?

  // Decides which syntax to use: 'object-literal' | 'template-literal'
  syntax: "object-literal",

  jsxFramework: "react",
});
