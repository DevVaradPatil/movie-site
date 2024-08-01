/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          bg: '#0D0D0F',
          text: '#FFFFFF',
        },
        secondary: {
          bg: '#1A171E',
          text: '#CCCCCC',
        },
        tertiary: {
          bg: '#333333',
        },
        accent: {
          primary: '#EB1C24',
          secondary: '#821118',
          tertiary: '#FF8888',
        },
        highlight: '#FFD700',
        border: {
          primary: '#444444',
          secondary: '#555555',
        },
        divider: '#666666',
        button: {
          primary: {
            bg: '#EB1C24',
            text: '#FFFFFF',
            hover: '#FF2A2A',
          },
          secondary: {
            bg: '#FF6B6B',
            text: '#FFFFFF',
          },
          disabled: {
            bg: '#333333',
            text: '#888888',
          },
        },
      },
    },
  },
  plugins: [],
};