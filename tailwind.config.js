/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          pink: '#FF00FF',
          blue: '#00FFFF',
          green: '#39FF14',
          purple: '#9D00FF',
          yellow: '#FFFF00',
        },
        obvsly: {
          dark: '#0A0A0A',
          darker: '#050505',
          darkest: '#000000',
          accent: '#FF00FF',
          secondary: '#00FFFF',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-orbitron)', 'sans-serif'],
        mono: ['var(--font-space-mono)', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'noise': "url('/images/noise.png')",
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 10px rgba(255, 0, 255, 0.7), 0 0 20px rgba(255, 0, 255, 0.5), 0 0 30px rgba(255, 0, 255, 0.3)' },
          '100%': { textShadow: '0 0 20px rgba(255, 0, 255, 0.9), 0 0 30px rgba(255, 0, 255, 0.7), 0 0 40px rgba(255, 0, 255, 0.5)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'neon': '0 0 5px theme("colors.neon.pink"), 0 0 20px theme("colors.neon.pink")',
        'neon-blue': '0 0 5px theme("colors.neon.blue"), 0 0 20px theme("colors.neon.blue")',
        'neon-green': '0 0 5px theme("colors.neon.green"), 0 0 20px theme("colors.neon.green")',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}; 