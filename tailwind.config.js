/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'red': {
          100: '#ff7a85',
          300: '#ff525d',
          500: '#ff3d54',
        },
        'orange': {
          300: '#ff8f70',
        },
        'blue': {
          50: '#c8c8cb',
          100: '#ebebeb',
          150: '#657682',
          300: '#4b5862',
          600: '#1f3f5b',
          700: '#3f4164',
          800: '#2c2d3f',
          900: '#25252d',
        },
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600', 
        bold: '700',
      },
      screens: {
        sm: {'max': '849px'},
        md: {'min': '321px', 'max': '380px'},
        xl: {'min': '381px', 'max': '849px'},
        'laptop': {'min': '850px'},
        'desktop': {'min': '1050px'},
      }
    },
  },
  plugins: [],
}
/*
## Colors

### Primary

- Light red 300(CTA text): #ff525d;
- Very light red 100 (CTA hover background): #ff7a85;
- Very dark blue 600(headings): #1f3f5b;

### Neutral

- White (text): #ffffff
- Grayish blue 50 (footer text): #c8c8cb
- Very dark grayish blue 300 (body copy): #4b5862
- Very dark black blue 900 (footer background): #25252d

### Gradient

Background gradient - Intro/CTA mobile nav:

- Very light orange 300: #ff8f70
- Light red 500: #ff3d54

Background gradient - body:

- Very dark gray blue 800 : #2c2d3f
- Very dark desaturated blue 700: #3f4164

## Typography

### Body Copy

- Font size: 16px

### Fonts

- Family: [Overpass](https://fonts.google.com/specimen/Overpass?preview.text_type=custom)   
- Weights: 300, 600

- Family: [Ubuntu](https://fonts.google.com/specimen/Ubuntu?preview.text_type=custom)
- Weights: 400, 500, 700
*/