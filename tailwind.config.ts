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
        sm: "320px",  // Small screens (mobile) starting at 320px
        md: "426px",  // Tablets starting at 426px
        lg: "1025px", // Desktops starting at 1025px
        xl: "1441px", // Large desktops starting at 1441px
        "2xl": "1920px", // Extra large desktops starting at 1920px
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: "82.5vw",     // Fluid up to 320px
          md: "84.86vw",     // Fluid between 426px and 1024px
          lg: "870px",    // Fixed for desktops (1025px to 1440px)
          xl: "988px",    // Fixed for large desktops (1441px to 1920px)
          "2xl": "988px", // Same for extra large desktops
        },
      },
      fontSize: {
        xs: ['10px', '14px'],   // Font size: 10px, Line height: 14px
        sm: ['12px', '16px'],   // Font size: 12px, Line height: 16px
        md: ['14px', '20px'],   // Font size: 14px, Line height: 20px
        base: ['16px', '24px'], // Font size: 16px, Line height: 24px
        lg: ['20px', '28px'],   // Font size: 20px, Line height: 28px
        xl: ['24px', '32px'],   // Font size: 24px, Line height: 32px
        '2xl': ['28px', '36px'],// Font size: 28px, Line height: 36px
        '3xl': ['36px', '36px'],// Font size: 36px, Line height: 36px
        '4xl': ['46px', '36px'],// Font size: 46px, Line height: 36px
        '5xl': ['48px', '36px'],// Font size: 48px, Line height: 36px
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
