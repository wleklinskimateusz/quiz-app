import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const colors = {
  purple: "#A729F5",
  white: "#FFFFFF",
  green: "#26D782",
  red: "#EE5454",
  navy: {
    DEFAULT: "#3B4D66",
    dark: "#313E51",
    gray: "#626C7F",
  },
  light: {
    bluish: "#ABC1E1",
    gray: "#F4F6FA",
  },
} as const;

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    boxShadow: {
      DEFAULT: "0px 16px 40px 0px rgba(143, 160, 193, 0.14)",
    },
    fontSize: {
      display: ["144px", "144px"],
      headingL: ["64px", "64px"],
      headingM: ["36px", "36px"],
      headingS: ["28px", "28px"],
      bodyM: ["24px", "36px"],
      bodyS: ["20px", "30px"],
    },
    extend: {
      backgroundImage: {
        buttonBg: `linear-gradient(0deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.50) 100%), ${colors.purple}`,
      },
      colors,
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      // look for the selected class in the parents of the current node
      addVariant("radio-check", [
        'input[type="radio"]:checked + &',
        'input[type="radio"]:checked+label>&',
      ]);
    }),
  ],
};
export default config;
