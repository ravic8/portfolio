/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#f8fafc",
          DEFAULT: "#0f172a",
          accent: "#2563eb",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Poppins", "system-ui", "sans-serif"],
      },
      boxShadow: {
        // provides the `shadow-soft` utility
        soft: "0 10px 30px rgba(2, 6, 23, 0.08)",
      },
      borderRadius: {
        "2xl": "1rem",
      },
    },
  },
  plugins: [],
};
