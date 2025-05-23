/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors :{
        primary : "#ffc727",
        dark: "#111111"
      },
      container:{
        center : true,
        padding : {
          DEFAULT : "1rem",
          sm : "3rem"
        }
      },
      mixBlendMode: {
        multiply: "multiply",
      },
    },
  },
  plugins: [],
}

