module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          background: "var(--primary-background)",
          foreground: "var(--primary-foreground)",
          light: "var(--primary-light)",
          dark: "var(--primary-dark)"
        },
        secondary: {
          background: "var(--secondary-background)",
          foreground: "var(--secondary-foreground)",
          light: "var(--secondary-light)",
          dark: "var(--secondary-dark)"
        },
        accent: {
          blue: "var(--accent-blue)",
          orange: "var(--accent-orange)",
          gradientStart: "var(--accent-gradient-start)",
          gradientEnd: "var(--accent-gradient-end)"
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
          light: "var(--text-light)",
          brand: "var(--text-brand)",
          blue: "var(--text-blue)"
        },
        bg: {
          main: "var(--bg-main)",
          overlay: "var(--bg-overlay)",
          light: "var(--bg-light)",
          neutral: "var(--bg-neutral)"
        },
        button: {
          primaryBg: "var(--button-primary-bg)",
          primaryText: "var(--button-primary-text)",
          secondaryBg: "var(--button-secondary-bg)"
        }
      },
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
        'inter': ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
};