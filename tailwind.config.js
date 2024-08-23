/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bpink: "#F8EDED",
        borange: "#FF8225",
        bred: "#B43F3F",
        bteal: "#173B45",
      },
      scrollbar: ["rounded"],
      fontFamily: {
        lora: "Lora",
        nunito: "Nunito",
        robot: "Roboto",
        inter: "Inter Tight",
        figtree: "Figtree",
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(circle at center, hsla(0, 0%, 50%, 0.2) 20%, transparent 200%)",
      },
    },
  },
  plugins: [],
};
