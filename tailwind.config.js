/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./features/**/*.{js,jsx,ts,tsx}",
  ],

  presets: [require("nativewind/preset")],

  theme: {
    extend: {
      colors: {
        background: "#F9FAFB",
        surface: "#FFFFFF",

        foreground: "#0E1216",
        muted: "#5F6469",

        primary: {
          DEFAULT: "#3F82F0",
          foreground: "#FFFFFF",
          soft: "#E3EFFF",
        },

        border: "#E3E5E7",

        destructive: "#EE343B",
        success: "#20B46B",
        warning: "#EFA831",

        category: {
          blue: "#3F82F0",
          purple: "#9D57DE",
          pink: "#F3669A",
          orange: "#F3821D",
          green: "#20B46B",
          teal: "#00B4BC",
          red: "#EE343B",
        },
      },

      fontFamily: {
        interRegular: ["Inter_400Regular"],
        interMedium: ["Inter_500Medium"],
        interSemiBold: ["Inter_600SemiBold"],
        interBold: ["Inter_700Bold"],
      },
    },
  },

  plugins: [],
};
