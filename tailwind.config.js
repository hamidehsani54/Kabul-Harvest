/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.25rem",
        lg: "2rem"
      }
    },
    extend: {
      colors: {
        midnight: "#060A12",
        lime: "#C8FF4D",
        cyan: "#42E8E0"
      },
      boxShadow: {
        soft: "0 12px 40px rgba(0, 0, 0, 0.16)"
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" }
        },
        pulseGlow: {
          "0%,100%": { boxShadow: "0 0 0 rgba(200, 255, 77, 0)" },
          "50%": { boxShadow: "0 0 30px rgba(200, 255, 77, 0.35)" }
        }
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        pulseGlow: "pulseGlow 2.5s ease-in-out infinite"
      }
    }
  },
  plugins: []
};