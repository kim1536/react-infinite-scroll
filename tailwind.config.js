/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './index.html',
    './src/index.css'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00BCD4',
      },
      fontFamily: {
        'BIZUDPGothic': ['BIZ UDPGothic', 'sans'],
        'Inter': ['Inter', 'sans']
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}

