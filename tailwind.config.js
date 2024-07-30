// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        jetbrains: ["JetBrains Mono", "monospace"],
        montserrat: ["Montserrat", "sans-serif"],
        sourceSansPro: ["Source Sans Pro", "sans-serif"],
      },
      backgroundColor: {
        "main-bg": "var(--main-bg)",
        "titlebar-bg": "var(--titlebar-bg)",
        "sidebar-bg": "var(--sidebar-bg)",
        "sidebar-hover-bg": "var(--sidebar-hover-bg)",
        "explorer-bg": "var(--explorer-bg)",
        "explorer-hover-bg": "var(--explorer-hover-bg)",
        "tabs-bg": "var(--tabs-bg)",
        "tab-bg": "var(--tab-bg)",
        "tab-active-bg": "var(--tab-active-bg)",
        "bottombar-bg": "var(--bottombar-bg)",
        "button-bg": "var(--button-bg)",
        "button-hover-bg": "var(--button-hover-bg)",
        "bottombar-hover-bg": "var(--bottombar-hover-bg)",
        "scrollbar-track-bg": "var(--scrollbar-track-bg)",
        "article-bg": "var(--article-bg)",
      },
      borderColor: {
        "explorer-border": "var(--explorer-border)",
        "tab-border": "var(--tab-border)",
        "bottombar-border": "var(--bottombar-border)",
        "tab-bg": "var(--tab-bg)",
        "accent-color": "var(--accent-color)",
      },
      textColor: {
        "text-color": "var(--text-color)",
        "accent-color": "var(--accent-color)",
        "button-text": "var(--button-text)",
        "bg-text": "var(--bg-text)",
        "bottombar-text": "var(--bottombar-text)",
        "typewriter-color": "var(--typewriter-color)",
      },
      scrollbar: {
        track: "var(--scrollbar-track-bg)",
        thumb: "var(--scrollbar-thumb-bg)",
      },
    },
  },
  plugins: [
    // Uncomment if using scrollbar plugin
    // require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
