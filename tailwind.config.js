/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "first-color": "hsl(184, 55%, 55%)",
        "button-color": "hsl(0, 0%, 17%)",
        "button-color-alt": "hsl(0, 0%, 21%)",
        "title-color": "hsl(0, 0%, 15%)",
        "text-color": "hsl(0, 0%, 35%)",
        "text-color-light": " hsl(0, 0%, 55%)",
        "body-color": "hsl(0, 0%, 99%)",
        "container-color": " #fff",
        "border-color": "hsl(0, 0%, 94%)",
      },
    },
  },
  plugins: [],
};
