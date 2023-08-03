/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rebrand-primary-blue-default': '#4a54f5',
        'rebrand-primary-blue-L10': '#6c74f7',
        'rebrand-primary-blue-L20': '#8e94f9',
        'rebrand-primary-blue-L30': '#afb4fb',
        'rebrand-primary-blue-L40': '#d1d4fc',
        'rebrand-primary-blue-L50': '#f3f4fe',
        'rebrand-primary-blue-D10': '#414adb',
        'rebrand-primary-blue-D20': '#2932cb',
        'rebrand-primary-blue-D30': '#1219a3',
        'rebrand-primary-blue-D40': '#060c6d',
        'rebrand-primary-blue-D50': '#03073d',
        'rebrand-primary-blue-D60': '#01010c',
        'rebrand-primary-blue-N10': '#65658e',
        'rebrand-primary-yellow-default': '#f9d793',
        'rebrand-primary-yellow-L10': '#ffeab8',
        'rebrand-primary-yellow-L20': '#fff4da',
        'rebrand-primary-yellow-D10': '#f6c664',
        'rebrand-primary-yellow-D20': '#f4b435',
        'rebrand-primary-yellow-D30': '#eaa10d',
        'rebrand-primary-yellow-D40': '#906409',
        'rebrand-primary-accentBlue-default': '#70a1ee',
        'rebrand-primary-accentBlue-L10': '#afcaf5',
        'rebrand-primary-accentBlue-L20': '#deeafd',
        'rebrand-primary-accentBlue-D10': '#2871e6',
        'rebrand-primary-accentBlue-D20': '#175ac4',
        'rebrand-primary-accentBlue-D30': '#13489c',
        'rebrand-primary-accentBlue-D40': '#0e3778',
        'rebrand-primary-accentGreen-default': '#83d69d',
        'rebrand-primary-accentGreen-L10': '#b8eec9',
        'rebrand-primary-accentGreen-L20': '#d6f3df',
        'rebrand-primary-accentGreen-D10': '#16a76f',
        'rebrand-primary-accentGreen-D20': '#108759',
        'rebrand-primary-accentGreen-D30': '#0c6542',
        'rebrand-primary-accentGreen-D40': '#084830',
      }
    },
  },
  plugins: [],
}

