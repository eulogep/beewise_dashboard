module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Productive honey warmth
        primary: {
          50: "#FEF7ED", // orange-50
          100: "#FED7AA", // orange-100
          200: "#FEB273", // orange-200
          300: "#F4A261", // orange-300
          400: "#F59E0B", // orange-400
          500: "#D97706", // orange-500
          600: "#B45309", // orange-600
          700: "#92400E", // orange-700
          800: "#78350F", // orange-800
          900: "#451A03", // orange-900
          DEFAULT: "#F4A261", // orange-300
        },
        
        // Secondary Colors - Monitoring confidence
        secondary: {
          50: "#F0FDFA", // teal-50
          100: "#CCFBF1", // teal-100
          200: "#99F6E4", // teal-200
          300: "#5EEAD4", // teal-300
          400: "#2DD4BF", // teal-400
          500: "#14B8A6", // teal-500
          600: "#2A9D8F", // teal-600
          700: "#0F766E", // teal-700
          800: "#115E59", // teal-800
          900: "#134E4A", // teal-900
          DEFAULT: "#2A9D8F", // teal-600
        },
        
        // Accent Colors - Critical alerts
        accent: {
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          200: "#FECACA", // red-200
          300: "#FCA5A5", // red-300
          400: "#F87171", // red-400
          500: "#E76F51", // red-500
          600: "#DC2626", // red-600
          700: "#B91C1C", // red-700
          800: "#991B1B", // red-800
          900: "#7F1D1D", // red-900
          DEFAULT: "#E76F51", // red-500
        },
        
        // Background Colors
        background: "#FEFEFE", // gray-50
        surface: "#F8F9FA", // gray-100
        
        // Text Colors
        text: {
          primary: "#264653", // slate-800
          secondary: "#6C757D", // gray-500
        },
        
        // Status Colors
        success: {
          50: "#F0F9FF", // green-50
          100: "#DCFCE7", // green-100
          500: "#52C41A", // green-500
          600: "#16A34A", // green-600
          DEFAULT: "#52C41A", // green-500
        },
        
        warning: {
          50: "#FEFCE8", // yellow-50
          100: "#FEF3C7", // yellow-100
          500: "#FAAD14", // yellow-500
          600: "#D97706", // yellow-600
          DEFAULT: "#FAAD14", // yellow-500
        },
        
        error: {
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          500: "#FF4D4F", // red-500
          600: "#DC2626", // red-600
          DEFAULT: "#FF4D4F", // red-500
        },
        
        // Border Colors
        border: {
          DEFAULT: "#E5E7EB", // gray-200
          active: "#F4A261", // orange-300
        },
      },
      
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      },
      
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-strong': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'alert': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      
      borderWidth: {
        '1': '1px',
        '2': '2px',
      },
      
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
      },
      
      transitionTimingFunction: {
        'smooth': 'ease-in-out',
      },
      
      animation: {
        'pulse-gentle': 'pulse-gentle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 400ms ease-in-out',
      },
      
      keyframes: {
        'pulse-gentle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'fadeIn': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}