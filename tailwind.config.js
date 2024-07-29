/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "main-bg": "var(--main-bg)",
        "sidebar-bg": "var(--sidebar-bg)",
        "sidebar-hover-bg": "var(--sidebar-hover-bg)",
        "explorer-bg": "var(--explorer-bg)",
        "explorer-hover-bg": "var(--explorer-hover-bg)",
        "tabs-bg": "var(--tabs-bg)",
        "tab-bg": "var(--tab-bg)",
        "tab-active-bg": "var(--tab-active-bg)",
        "bottombar-bg": "var(--bottombar-bg)",
        "button-bg": "var(--button-bg)",
        "bottombar-hover-bg": "var(--bottombar-hover-bg)",
        "scrollbar-track-bg": "var(--scrollbar-track-bg)",
        "article-bg": "var(--article-bg)",
      },
      borderColor: {
        "explorer-border": "var(--explorer-border)",
        "tab-border": "var(--tab-border)",
        "bottombar-border": "var(--bottombar-border)",
      },
      color: {
        "text-color": "var(--text-color)",
        "accent-color": "var(--accent-color)",
        "button-text": "var(--button-text)",
        "bg-text": "var(--bg-text)",
      },
      scrollbar: {
        track: "var(--scrollbar-track-bg)",
        thumb: "var(--scrollbar-thumb-bg)",
      },
    },
  },
  plugins: [
    // Include plugin for scrollbar if needed
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
