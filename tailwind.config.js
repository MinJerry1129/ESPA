module.exports = {
  purge: ["./src/components/**/*.js", "./src/pages/**/*.js"],
  theme: {
    extend: {
      fontSize: {
        "2xs": "0.5rem",
        detail: "0.77vw",
        "detail-sm": "1.57vw",
        mod: "1vw",
        "mod-sm": "2vw",
        20:'20px',
      },
      colors: {
        primary: "#2340B0",
      },
      minHeight: {
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        "8/10": "80%",
        "9/10": "90%",
        full: "100%",
      },
      maxWidth: {
        732: '732px',
        941: '941px',
      },
      width: {
        60: "15rem",
        72: "18rem",
        84: "21rem",
        96: "24rem",
        198: "198px",
        280: "280px",
        354: '354px',
      },
      height: {
        57: "57px",
      },
      lineHeight: {
        'extra-35': '35px',
        'extra-28': '28px',
      },
      screens: {
        'laptop-3': '710px',
        'laptop-2': '946px',
        'laptop-1': '1066px', 
      },
      borderColor: ["hover", "focus"],
      textColor: ["hover", "focus"],
      backgroundColor: ["hover", "focus"],
      boxShadow: ["hover", "focus"],
    },
    fontFamily: {
      sans: ["Ode Gaming", "Tw Cent"],
    },
  },
  variants: {},
  plugins: [],
};
