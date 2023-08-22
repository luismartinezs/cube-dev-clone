import { type Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        dark: {
          200: '#323243'
        },
        'cherry': {
          '50': '#fcf2f9',
          '100': '#fce8f5',
          '200': '#f5c6e1',
          '300': '#f0a8cd',
          '400': '#e66c9d',
          '500': '#da3466',
          '600': '#c42b57',
          '700': '#a31d41',
          '800': '#82122c',
          '900': '#610b1d',
          '950': '#400410'
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
