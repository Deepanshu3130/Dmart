/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#F59E0B",
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",
          800: "#92400E",
          900: "#78350F",
        },
        dark: {
          DEFAULT: "#0F172A",
          50: "#1E293B",
          100: "#0F172A",
          200: "#0B1120",
          900: "#070B14",
        },
        surface: {
          base: "#0B0F19",
          card: "#111827",
          elevated: "#182234",
          highlight: "#1E293B",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.08)",
          muted: "rgba(255, 255, 255, 0.14)",
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
        }
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.06)',
        'card-hover': '0 12px 30px -4px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(245, 158, 11, 0.25)',
        'glow-primary': '0 0 25px -5px rgba(245, 158, 11, 0.3)',
      },
      mixBlendMode: {
        multiply: "multiply",
      },
    },
  },
  plugins: [],
}

