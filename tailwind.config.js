const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'sidebarblue' : '#0B2635',
      'sidebargraytext' : '#A5A5A5'
      
    },
    fontFamily: {
      'sans' : ['Proxima Nova',
      ...defaultTheme.fontFamily.sans,
    ],
      }

  }
}