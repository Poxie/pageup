import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./assets/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      padding: {
        section: '6rem 0',
      },
      backgroundColor: {
        primary: '#fff',
        secondary: '#F2F2F2',
        tertiary: '#E7E7E7',
        'c-primary': '#DC143C',
      },
      borderColor: {
        primary: '#fff',
        secondary: '#F2F2F2',
        tertiary: '#E7E7E7',
      },
      textColor: {
        primary: '#0f172a',
        muted: '#475569',
        light: '#fff',
        'c-primary': '#DC143C',
      },
      width: {
        main: '1200px',
      },
      maxWidth: {
        main: '90%',
      },
      fill: {
        primary: '#fff',
        secondary: '#F2F2F2',
        tertiary: '#E7E7E7',
        'c-primary': '#DC143C',
        't-muted': '#475569',
      },
      animation: {

      }
    },
  },
  plugins: [],
};
export default config;
