import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0F172A",
        surface: "#1E293B",
        primary: {
          DEFAULT: "#2563EB",
          glow: "#3B82F6",
          dark: "#1D4ED8",
        },
        secondary: {
          DEFAULT: "#06B6D4",
          glow: "#22D3EE",
        },
        accent: {
          DEFAULT: "#8B5CF6",
          glow: "#A78BFA",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "spin-slow": "spin 12s linear infinite",
        "pulse-subtle": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
      },
      boxShadow: {
        "cyan-glow": "0 0 25px -5px rgba(6, 182, 212, 0.4)",
        "blue-glow": "0 0 25px -5px rgba(37, 99, 235, 0.4)",
        "purple-glow": "0 0 25px -5px rgba(139, 92, 246, 0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
