import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light letterpress palette
        bone: "#F5F1E8", // primary background
        mist: "#EAE4D5", // subtle backgrounds, hover states
        ink: "#1A1A1A", // primary text, headlines
        slate: "#6B6660", // secondary text, dividers, UI chrome
        oxblood: "#6B2737", // legacy accent (replaced by the aqua→blue gradient)
        aqua: "#21C9C4", // accent gradient start
        deepblue: "#103B63", // accent gradient end
        dusk: "#4F5D6B", // secondary accent, used sparingly
      },
      fontFamily: {
        display: ["var(--font-archivo-expanded)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      maxWidth: {
        container: "1240px",
      },
      letterSpacing: {
        widest2: "0.25em",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        marquee: "marquee 76s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
