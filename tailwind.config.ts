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
        'c-primary': '#DF9629',
        danger: '#FF0000',
        success: '#00FF00',
      },
      borderColor: {
        primary: '#fff',
        secondary: '#F2F2F2',
        tertiary: '#E7E7E7',
        danger: '#FF0000',
        success: '#00FF00',
      },
      textColor: {
        primary: '#0f172a',
        muted: '#475569',
        light: '#fff',
        'c-primary': '#DF9629',
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
        'c-primary': '#DF9629',
        't-muted': '#475569',
        't-primary': '#0f172a',
      },
      animation: {

      }
    },
  },
  plugins: [],
};
export default config;
