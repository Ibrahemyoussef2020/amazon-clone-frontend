/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        costum: {
          clr_primary: "#131921",
          clr_secondary: "#eaeded",
          clr_acc_blue: "#232fa1",
          clr_acc_yellow: "#febd69",
        },
      },
    },
  },
  plugins: [],
};
