/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        limeGreen: 'hsl(163, 72%, 41%)',
        brightRed: 'hsl(356, 69%, 56%)',
        facebook: 'hsl(208, 92%, 53%)',
        twitter: 'hsl(203, 89%, 53%)',
        instagram: 'linear gradient hsl(37, 97%, 70%) to hsl(329, 70%, 58%)',
        youtube: 'hsl(348, 97%, 39%)',
        toggleDarkFrom: 'hsl(210, 78%, 56%)',
        toggleDarkTo: 'hsl(146, 68%, 55%)',
        toggleLight: 'hsl(230, 22%, 74%)',
        // Dark
        VeryDarkBlue: 'hsl(230, 17%, 14%)', // (BG)
        VeryDarkBlueTop: 'hsl(232, 19%, 15%)', // (Top BG Pattern)
        DarkDesaturatedBlue: 'hsl(228, 28%, 20%)', // (Card BG)
        DesaturatedBlue: 'hsl(228, 34%, 66%)', // (Text)
        WhiteText: 'hsl(0, 0%, 100%)', // (Text)
        // White
        White: 'hsl(0, 0%, 100%)', // (BG)
        VeryPaleBlue: 'hsl(225, 100%, 98%)', // (Top BG Pattern)
        LightGrayishBlue: 'hsl(227, 47%, 96%)', // (Card BG)
        DarkGrayishBlue: 'hsl(228, 12%, 44%)', // (Text)
        VeryDarkBlueText: 'hsl(230, 17%, 14%)' // (Text)
      }
    },
    fontFamily: {
      inter: 'Inter'
    }
  },
  plugins: []
}
