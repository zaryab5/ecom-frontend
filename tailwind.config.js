/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors:{
      
      'text-1':'rgba(250, 250, 250, 1)',
      'text-2':'rgba(80, 66, 66, 1)',
      'text-3':'rgba(0, 0, 0, 1)',
      'star-placeholder':'#BFBFBF',
      'star':'#FFAD33'

    },
    backgroundColor:{
      
      'primary':'#FFFFFF',
      // 'placeholder':'rgba(160, 163, 189, 0.1)',
      'placeholder':'#F5F5F5',
      'primary-2':"#363738",
      'secondary-1':'#F5F5F5',
      'secondary-2':'#FEFAF1',
      'secondary-3':'#DB4444',
      'btn-1':'#47B486',
      'btn-2':'#DB4444',
      'btn-hover-1':'#E2B93B',
      'btn-hover-2':'#EB5757',
    },
    fontFamily:
      {
       'inter':["Inter"]
      
    }
    },
    
  
  },
  plugins: [],
}

