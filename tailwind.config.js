/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { light: "#88c4ff", DEFAULT: "#1E90FF", dark: "#0e59a3" },
        secondary: "#155fa7",
        // "primary-dark": "#2C2C2C",
        // "primary-dark-2": "#1E1E1E",
        // "primary-dark-3": "#444444",
      },
    },
  },
  plugins: [],
};

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
