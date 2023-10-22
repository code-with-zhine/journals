import type { Config } from "tailwindcss";
import { withUt } from "uploadthing/tw";

export default withUt({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#003DA5",

          secondary: "#f1ab00",

          accent: "#D6336B",

          neutral: "#5b8ff7",

          "base-100": "#f2f2f3",

          info: "#9bd6f8",

          success: "#148046",

          warning: "#c47b0e",

          error: "#ef6c7b",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
});
