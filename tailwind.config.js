module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito"],
        roboto: ["Roboto"],
        space: ["Space Mono"],
        hand: ["Shadows Into Light"],
      },
      transitionDuration: ["hover", "focus", "active"],
      blur: {
        xs: "2px",
        "2xs": "1px",
      },
      animation: {
        "spin-fast": "spin 0.15s linear infinite",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
