/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      minHeight: {
        section: "calc(100vh - 112px)",
      },
      maxWidth: {
        section: "1320px",
      },
      boxShadow: {
        neon: "0px 0px 28px 3px rgb(34, 211, 238)",
        neonCard: "0px 0px 3px rgb(34, 211, 238)",
        neonCardActive: "0px 0px 6px rgb(34, 211, 238)",
      },
      translate: {
        halfDown: "0, -50%",
      },
      flex: {
        50: "50%",
      },
      backgroundImage: {
        "sky-star": "url('./src/assets/black-start.jpg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
