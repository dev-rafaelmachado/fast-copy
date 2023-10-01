import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#1D1F2D',
        'secondary-color': '#24283B',
        'text-white': '#242424',
        'text-black': '#dbdbdb',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
export default config
