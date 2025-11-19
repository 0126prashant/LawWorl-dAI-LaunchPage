module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx,js,jsx,mdx}",
    "./src/components/**/*.{ts,tsx,js,jsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "pulse-slow": "pulse 6s ease-in-out infinite",
        spotlight: "spotlight 5s ease-in-out infinite",
      },
      keyframes: {
        spotlight: {
          "0%, 100%": { textShadow: "0 0 20px #00adef, 0 0 40px #00adef" },
          "50%": { textShadow: "0 0 40px #00adef, 0 0 80px #0076e5" },
        },
      },
    },
  },
  plugins: [],
};