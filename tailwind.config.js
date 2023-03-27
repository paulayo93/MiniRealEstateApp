/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './screens/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter_semibold: 'Inter_600SemiBold',
        inter_medium: 'Inter_500Medium',
        inter_regular: 'Inter_400Regular',
      },
    },
  },
  plugins: [],
};
