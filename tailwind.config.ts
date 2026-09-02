import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // JustEdu brand palette — derived from the official logo (maroon + charcoal)
        brand: {
          50: "#FBF4F1", // pastel cream — page background
          100: "#F3E1DD", // soft blush — hover / subtle fill
          200: "#E7C4BE", // light accent border
          300: "#D39A96", // mid-light accent
          400: "#A8425A", // mid maroon
          500: "#851F34", // primary maroon (logo)
          600: "#6B1929", // deep maroon — headings, hover
          700: "#521320", // darkest maroon
          900: "#282828", // charcoal (logo) — body text
        },
        // Pastel accent tokens used to differentiate subjects (English / Math / Science)
        rose: {
          50: "#FBEAEC",
          200: "#F3D0D6",
          600: "#B14A5F",
          700: "#9C3B4D",
        },
        gold: {
          50: "#F6E7C8",
          200: "#EBD69E",
          600: "#835A0A",
          700: "#6E4C08",
        },
        sage: {
          50: "#E7EEE1",
          200: "#CFE0C3",
          600: "#4B6C3F",
          700: "#3F5A34",
        },
      },
      fontFamily: {
        heading: ["Georgia", "serif"],
        body: ["system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 10px -2px rgba(40, 40, 40, 0.08)",
        lift: "0 12px 24px -8px rgba(133, 31, 52, 0.25)",
        floating: "0 8px 30px -6px rgba(40, 40, 40, 0.12)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-14px) scale(1.03)" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "float-slow": "float 10s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
