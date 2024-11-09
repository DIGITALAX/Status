import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        offBlack: "#111313",
        offBlue: "#01030c",
        offWhite: "#F2F2F2",
      },
      fontFamily: {
        mag: "Letter Magic",
        fut: "Futurist",
      },
      fontSize: {
        xxs: "0.6rem",
        xxxs: "0.4rem",
      }
    },
  },
  plugins: [],
};
export default config;
