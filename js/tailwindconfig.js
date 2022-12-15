tailwind.config = {
  theme: {
    colors: {
      primary: "#C70D0E",
    },
    screens: {
        'xsm': '480px',
        // => @media (min-width: 640px) { ... }

        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '992px',
        // => @media (min-width: 992px) { ... }
  
        'xl': '1200px',
        // => @media (min-width: 1200px) { ... }
  
        '2xl': '1400px',
        // => @media (min-width: 1536px) { ... }

        '3xl': '1600px',
        // => @media (min-width: 1600px) { ... }
      }
  },
};
