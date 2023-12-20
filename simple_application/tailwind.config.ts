import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        default: "#F6F6FD",
      },
      colors: {
        grey: {
          medium: "#B9BACC50",
          light: "#DCDDE5",
          ultralight: "#DCDDE51A",
        },
        navy: "#2A2B38",
        "bright-green": "#48DA82",
        support: "#15B48E",
        "support-light": "#15B48E40",
        reject: "#EF6461",
        "reject-light": "#EF646140",
      },
    },
  },
  plugins: [],
};
export default config;
