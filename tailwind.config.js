/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#060608',
          deep: '#030304',
          surface: '#0d0d12',
          card: '#12121a',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        gold: {
          light: '#f5e6a8',
          DEFAULT: '#d4af37',
          champagne: '#e5c158',
          dark: '#9a7b24',
          metallic: 'linear-gradient(135deg, #d4af37 0%, #fff2be 50%, #aa820a 100%)',
        },
        silver: {
          light: '#f1f5f9',
          DEFAULT: '#94a3b8',
          dark: '#475569',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Syne', 'Cinzel', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        ultra: '0.25em',
        widest: '0.15em',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'metallic-gold': 'linear-gradient(135deg, #d4af37 0%, #fff0b3 50%, #997510 100%)',
        'metallic-silver': 'linear-gradient(135deg, #e2e8f0 0%, #ffffff 50%, #64748b 100%)',
        'dark-glass': 'linear-gradient(180deg, rgba(20,20,28,0.7) 0%, rgba(10,10,14,0.85) 100%)',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};
