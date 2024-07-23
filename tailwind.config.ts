import { type Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        holy: ["holy", "sans-serif"],
      },
      colors: {
        primary: "#be185d",
        secondary: "#4338ca",
      },
      borderWidth: {
        "1": "1px",
      },
      animation: {
        backgroundPositionSpin:
          "background-position-spin 3000ms infinite alternate",
      },
      keyframes: {
        "background-position-spin": {
          "0%": { backgroundPosition: "top center" },
          "100%": { backgroundPosition: "bottom center" },
        },
      },
    },
  },
  // deno-lint-ignore no-explicit-any
  plugins: [daisyui as any],
} satisfies Config;
