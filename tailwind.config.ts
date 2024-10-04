import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-montserrat)'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand:"#73448C",
        accent:"#FFE100",
        gray:"#D9D9D9",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
      },
      fontSize: {
        base: 'var(--font-base)',           // Default base: 16px
        paragraph: 'var(--font-paragraph)', // Paragraph: 18px
        h1: 'var(--font-h1)',               // h1: 40px
        h2: 'var(--font-h2)',               // h2: 30px
        h3: 'var(--font-h3)',               // h3: 24px
        large:"50px"
      },
      animation: {
        'scroll-left': 'scroll-left 80s linear infinite',
      },
      keyframes: {
        'scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-90%)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
