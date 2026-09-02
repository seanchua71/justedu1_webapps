import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Placeholder brand palette — swap for JustEdu's real brand colours
        brand: {
          50: "#fdf6ec",
          100: "#f8e7cc",
          400: "#e0a94a",
          500: "#c98f2e", // warm gold accent (placeholder)
          600: "#a8741f",
          900: "#3d2c17",
        },
      },
      fontFamily: {
        heading: ["Georgia", "serif"],
        body: ["system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
