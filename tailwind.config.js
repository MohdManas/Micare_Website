/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        md: "2rem",
        lg: "2.5rem",
        xl: "3rem",
        "2xl": "4rem",
      },
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#F9F7F2",
          50: "#FBF8F5",
          100: "#F9F7F2",
          200: "#F3EFE6",
        },
        secondary: {
          DEFAULT: "#1B2A41",
          90: "#17243B",
          80: "#22304B",
          70: "#2B3A57",
        },
        accent: {
          DEFAULT: "#C5A059",
          90: "#B29455",
          80: "#A17E4E",
        },
        neutral: {
          DEFAULT: "#E5E1DB",
          50: "#F6F3F0",
          100: "#ECE7E2",
          200: "#D8D2CB",
          300: "#C4BEB3",
        },
        muted: {
          DEFAULT: "#8B7D70",
          90: "#A09586",
        },
      },
    },
  },
  plugins: [],
};
