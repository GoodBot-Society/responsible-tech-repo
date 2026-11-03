/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    screens: {
      xs: "475px",
      sm: "768px",
      md: "1060px",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        openSans: ["Open Sans"],
      },
      colors: {
        'goodbot-primary': {
          DEFAULT: '#0c4a6e',
          light: '#0284c7',
          dark: '#075985',
        },
        'goodbot-background': {
          DEFAULT: '#ecfcff',
          light: '#ffffff',
          starryNightBlack: '#242424'
        },
        'goodbot-text': {
          DEFAULT: '#242424',
          secondary: '#757575',
          dark: '#000000',
          disabled: '#b3b3b3',
        },
        'goodbot-gray': {
          light: "#f5f5f5",
          DEFAULT: "#d9d9d9",
          medium: "#979797",
          dark: "#757575",
        },
        'goodbot-button': {
          primary: {
            DEFAULT: '#a3e2ec',
            hover: '#95dbe6',
          },
          secondary: {
            DEFAULT: '#ffffff',
            hover: '#f4f4f5',
          },
        },

        goodbot: {
          primary: {
            lightgrey: "rgb(241 241 242 / 40%)",
            teal: "#91CAC9",
            yellow: "#f5a40a",
            skyBlue: "#06BADB",
            starryNightBlack: "#242424",
            offWhite: "#F1E7DD",
            gray: "#F5F5F5",
            blue: "#0aa0f5",
            purple: "#7f0af5",
            pink: "#f50ad6",
            red: "#f73b6a",
          },
          secondary: {
            neonGreen: "#96EA61",
            lightBlue: "#91CAC9",
            blueGradient: "color(display-p3 0.0392 0.6275 0.9608)",
            purpleGradient: "color(display-p3 0.498 0.0392 0.9608)",
            pinkGradient: "color(display-p3 0.9608 0.0392 0.8392)",
            redGradient: "color(display-p3 0.9686 0.2314 0.4157)",
            yellowGradient: "color(display-p3 0.9608 0.6431 0.0392)",
          },
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
