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
      fontFamily: {
        'syne': ['var(--font-syne)'],
        'inter': ['var(--font-inter)'],
        'outfit': ['var(--font-outfit)'],
        'space-grotesk': ['var(--font-space-grotesk)'],
      },
    },
  },
  plugins: [],
};
