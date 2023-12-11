/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        poppins : "'Poppins', sans-serif",
         
      },
      backgroundImage : {
        'backgroud' : "url('https://i.ibb.co/q11wYY8/banner.webp')" ,
        'footerBackgroud' : "url('https://i.ibb.co/6Bc4D2s/footer-shape1.png')"

        
      }
    },
  },
  plugins: [require("daisyui")],
}