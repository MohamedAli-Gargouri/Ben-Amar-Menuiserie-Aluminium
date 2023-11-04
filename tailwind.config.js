/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sharp: ["Sharp Grotesk"],
      serif: ["ui-serif", "Georgia"],
      lato: ["Lato", "sans-serif"],
    },
    extend: {
      theme: {
        fontFamily: {
          sharp: ["Sharp Grotesk"],
          serif: ["ui-serif", "Georgia"],
          lato: ["Lato", "sans-serif"],
        },
        colors: {
          primary: '#558B2F',
          // You can define more colors here as needed
        },
      },
      animation: {
        fade: "fade 1s ease-in-out",
      },
      keyframes: {
        fade: {
          "0%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        }
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
