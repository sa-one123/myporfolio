import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#cfe7fe',
          200: '#aed4fd',
          300: '#7dbaf9',
          400: '#4c90f4',
          500: '#266bf1',
          600: '#1e56d8',
          700: '#1941b8',
          800: '#143198',
          900: '#0e227a',
        },
        secondary: '#ffed4a',
        danger: '#e3342f',
        success: '#38c172',
        info: '#3490dc',
        warning: '#f6993f',
      },
    },
  },
  plugins: [],
};
export default config;
