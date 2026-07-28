/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#05070f',
        surface: '#0d1324',
        muted: '#8a9bb8',
        brand: '#46e0c7',
        accent: '#ff8f5c'
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Manrope', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(70, 224, 199, 0.35), 0 10px 40px rgba(0, 0, 0, 0.45)'
      },
      backgroundImage: {
        mesh: 'radial-gradient(circle at 15% 20%, rgba(70, 224, 199, 0.2), transparent 45%), radial-gradient(circle at 85% 10%, rgba(255, 143, 92, 0.2), transparent 40%), linear-gradient(160deg, #05070f 0%, #0b1221 60%, #111a31 100%)'
      }
    }
  },
  plugins: []
};
