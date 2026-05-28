export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Inter", "Arial", "sans-serif"],
        mono: ["Space Mono", "Courier New", "monospace"],
        script: ["Caveat", "Segoe Script", "cursive"]
      },
      colors: {
        cream: "#f7efe3",
        porcelain: "#fffaf1",
        blush: "#edb6c9",
        rosewood: "#a95f78",
        mocha: "#8f7566",
        espresso: "#35221c",
        cocoa: "#5a3b32",
        oat: "#d8c5ad",
        mink: "#b69c8c"
      },
      boxShadow: {
        editorial: "0 28px 80px rgba(53, 34, 28, 0.18)",
        sticker: "0 12px 30px rgba(53, 34, 28, 0.16)"
      }
    }
  },
  plugins: []
};
