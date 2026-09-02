import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0B0F19",
        surface: "#121826",
        surface2: "#161D2C",
        accent: "#3B82F6",
        accentSoft: "#1D4ED8",
        text: "#F8FAFC",
        muted: "#94A3B8",
        line: "rgba(248,250,252,0.08)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(180deg, rgba(59,130,246,0.08) 0%, rgba(11,15,25,0) 60%)",
      },
    },
  },
  plugins: [],
};
export default config;
