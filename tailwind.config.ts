import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/*/**/*.{js,ts,jsx,tsx,mdx}", // Adjust for dynamic locale paths
  ],
  theme: {
    extend: {
      screens: {
        sm: "320px",  // Small screens (mobile); upto 425
        md: "426px",  // Tablets upto; 1024
        lg: "1025px", // Desktops upto; 1440
        xl: "1441px", // Large desktops; upto 1920
        "2xl": "1920px", // Extra large desktops
      },
      container: {
        center: true,
        // MIGHT VARY DEPENDING ON PROJECT REQUIREMENTS
        screens: {
          sm: "82.5vw",
          md: "84.86vw",
          lg: "870px",
          xl: "988px",
          "2xl": "988px",
        },
      },
      fontSize: {
        xs: ['0.625rem', '0.875rem'],   // Font size: 10px, Line height: 14px
        sm: ['0.75rem', '1rem'],        // Font size: 12px, Line height: 16px
        md: ['0.875rem', '1.25rem'],    // Font size: 14px, Line height: 20px
        base: ['1rem', '1.5rem'],       // Font size: 16px, Line height: 24px
        lg: ['1.25rem', '1.75rem'],     // Font size: 20px, Line height: 28px
        xl: ['1.5rem', '2rem'],         // Font size: 24px, Line height: 32px
        '2xl': ['1.75rem', '2.25rem'],  // Font size: 28px, Line height: 36px
        '3xl': ['2.25rem', '2.25rem'],  // Font size: 36px, Line height: 36px
        '4xl': ['2.875rem', '2.25rem'], // Font size: 46px, Line height: 36px
        '5xl': ['3rem', '2.25rem'],     // Font size: 48px, Line height: 36px
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#0044FF",
      },
    },
  },
  plugins: [],
};
export default config;
