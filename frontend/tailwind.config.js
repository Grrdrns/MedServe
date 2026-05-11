/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        accent: {
          green: '#8bc34a',
          'green-light': '#9ccc65',
          blue: '#2196f3',
          'blue-light': '#42a5f5',
        },
        sidebar: {
          bg: '#ffffff',
          hover: '#f3f4f6',
          active: '#e5e7eb',
          text: '#6b7280',
          'text-active': '#374151',
        }
      },
    },
  },
  plugins: [],
}
