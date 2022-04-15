
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'sidebarblue' : '#0B2635',
      'sidebargraytext' : '#A5A5A5',
      'gold': '#C19A51',
      'formgray' :'#ACACAC'
      
      
    },
    fontFamily: {
      'Raleway': ['RalewaySemiBold','RalewayRegular'],
      
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}}