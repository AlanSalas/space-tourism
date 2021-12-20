import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          overflow: "hidden",
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 481,
      md: 768,
      lg: 1200,
      xl: 1440,
    },
  },
  palette: {
    primary: {
      main: "#0B0D17",
    },
    secondary: {
      main: "#D0D6F9",
    },
    tertiary: {
      main: "#FFFFFF",
      opacity: "rgba(255,255,255,0.25)",
    },
  },
  typography: {
    fontFamily: "'Bellefair', sans-serif",
    h1: {
      fontSize: "9.37rem",
    },
    h2: {
      fontSize: "6.25rem",
      textTransform: "uppercase",
    },
    h3: {
      fontSize: "3.5rem",
      textTransform: "uppercase",
    },
    h4: {
      fontSize: "2rem",
      textTransform: "uppercase",
    },
    h5: {
      fontFamily: "'Barlow Condensed', sans-serif",
      fontSize: "1.75rem",
      letterSpacing: "4.75px",
    },
    subtitle1: {
      fontSize: "1.75rem",
      textTransform: "uppercase",
    },
    subtitle2: {
      fontFamily: "'Barlow Condensed', sans-serif",
      fontSize: "0.875rem",
      letterSpacing: "2.35px",
      textTransform: "uppercase",
    },
    navText: {
      fontFamily: "'Barlow Condensed', sans-serif",
      fontSize: "1rem",
      letterSpacing: "2.7px",
    },
    bodyText: {
      fontFamily: "'Barlow Condensed', sans-serif",
      fontSize: "1.3rem",
      lineHeight: "2rem",
    },
  },
});

export default theme;
