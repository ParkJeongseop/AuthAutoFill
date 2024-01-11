/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx,html}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "inset-2": "inset 0 0 0 2px var(--tw-shadow-color)",
      },
      animation: {
        scaleTo1: "scaleTo1 200ms linear 1",
        shake: "shake 300ms",
      },
      keyframes: {
        scaleTo1: {
          "0%": { transform: "scale(0.5)" },
          "100%": { transform: "scale(1)" },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%, 75%": { transform: "translateX(-5px)" },
          "50%": { transform: "translateX(5px)" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
