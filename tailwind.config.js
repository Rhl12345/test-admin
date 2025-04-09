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
        primary: {
          light: '#4F46E5', // You can adjust this color value as needed
          DEFAULT: '#4338CA',
          dark: '#3730A3',
        },
        secondary: {
          light: '#6B7280',
          DEFAULT: '#4B5563',
          dark: '#374151',
        },
        quaternary: {
          light: '#9CA3AF',
          dark: '#6B7280',
        },
        gray: {
          dark: '#1F2937',
          selected: '#E5E7EB',
          'selected/40': 'rgba(229, 231, 235, 0.4)',
          'selected/60': 'rgba(229, 231, 235, 0.6)',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
} 