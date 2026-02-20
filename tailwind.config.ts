import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F8F7F2",
        charcoal: "#1A1D22",
        navy: "#0E1A2E",
        gold: "#B9975B",
        slate: "#4A5568"
      },
      fontFamily: {
        display: ["\"Cormorant Garamond\"", "\"Times New Roman\"", "serif"],
        sans: ["\"Avenir Next\"", "\"Helvetica Neue\"", "\"Segoe UI\"", "sans-serif"]
      },
      boxShadow: {
        luxe: "0 24px 60px -24px rgba(14, 26, 46, 0.45)",
        soft: "0 12px 36px -22px rgba(14, 26, 46, 0.35)"
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both"
      }
    }
  },
  plugins: []
};

export default config;
