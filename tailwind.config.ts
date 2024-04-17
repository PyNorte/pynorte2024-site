import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-poppins)',
      },
      colors: {
        sunset: {
          50: '#FFFAEB',
          100: '#FFF2C6',
          200: '#FFE388',
          300: '#FFCF4A',
          400: '#FFBC27',
          500: '#F99707',
          600: '#DD7002',
          700: '#B74D06',
          800: '#943B0C',
          900: '#7A310D',
          950: '#461802',
        },
        river: {
          50: '#F3F5FC',
          100: '#E7EDF7',
          200: '#C9D7EE',
          300: '#9AB6DF',
          400: '#648FCC',
          500: '#4071B7',
          600: '#2F589B',
          700: '#27477D',
          800: '#243D68',
          900: '#223558',
          950: '#17223A',
        },
        animals: {
          50: '#FDF3F3',
          100: '#FCE4E5',
          200: '#FBCDCF',
          300: '#F6ABAF',
          400: '#EF7A80',
          500: '#E44F56',
          600: '#D03239',
          700: '#A3242A',
          800: '#912328',
          900: '#782428',
          950: '#410E10',
        },
        forest: {
          50: '#F2FDF0',
          100: '#E2FBDD',
          200: '#C6F5BD',
          300: '#96EC89',
          400: '#61DA4E',
          500: '#3ABF26',
          600: '#2B9F1A',
          700: '#247D18',
          800: '#206318',
          900: '#1C5116',
          950: '#092D06',
        },
      },
    },
  },
  plugins: [],
}
export default config
