/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This ensures Tailwind scans all your component files
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#7A83CC', // Your custom color from Figma
        'custom-gray': '#686D9D',
        'custom-light-gray': '#F3EEEA',
        'custom-beige': '#EBE3D5',
        'custom-yellow': '#FFE351',
      },
    },
  },
  plugins: [],
}
