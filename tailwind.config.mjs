/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      aspectRatio: {
        '3.55/1': '3.55 / 1',
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
        serif: ["var(--font-newsreader)", "serif"],
        Plus_Jakarta_Sans: ["var(--font-manrope)", "sans-serif"],
      }
    },
  },
  plugins: [],
};
