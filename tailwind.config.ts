import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#be185d",
        secondary: "#4338ca",
      },
      borderWidth: {
        "1": "1px",
      },
    },
  },
  plugins: [],
} satisfies Config;
