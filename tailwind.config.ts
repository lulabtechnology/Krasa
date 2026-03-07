import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        blush: '#D2A898',
        terracotta: '#CA9A88',
        beige: '#E8DBD8',
        cream: '#FEF5EA',
        ivory: '#FDFDFC',
        lilacgray: '#C4BDC2',
        ink: '#141414'
      },
      boxShadow: {
        soft: '0 10px 30px rgba(20,20,20,0.06)'
      },
      backgroundImage: {
        'soft-radial': 'radial-gradient(circle at top, rgba(210,168,152,0.2), rgba(253,252,252,0) 40%)'
      }
    }
  },
  plugins: []
};

export default config;
