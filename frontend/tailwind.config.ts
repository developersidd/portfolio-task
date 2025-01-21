import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        syne: ["Syne", "sans-serif"],
      },
      colors: {
        "primary-orange": "hsl(var(--color-primary-orange))",
        "dark-theme": "hsl(var(--color-gray-background))",
        "light-gray": "hsl(var(--color-text-light))",
        "medium-gray": "hsl(var(--color-text-dark))",
        "stone-gray": "hsl(var(--color-stone-gray))",
        "deep-dark": "hsl(var(--color-dark-background))",
      },
      
    },
  },
  plugins: [],
} satisfies Config;
