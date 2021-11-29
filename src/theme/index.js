import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
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
    },
  },
  typography: {
    fontFamily: "'Bellefair', sans-serif",
    h1: {
      fontSize: "9.37rem",
    },
    h2: {
      fontSize: "6.25rem",
    },
    h3: {
      fontSize: "3.5",
    },
    h4: {
      fontSize: "2rem",
    },
    h5: {
      fontFamily: "'Barlow Condensed', sans-serif",
      fontSize: "1.75rem",
      letterSpacing: "4.75px",
    },
    subtitle1: {
      fontSize: "1.75rem",
    },
    subtitle2: {
      fontFamily: "'Barlow Condensed', sans-serif",
      fontSize: "0.875rem",
      letterSpacing: "2.35px",
    },
    navText: {
      fontFamily: "'Barlow Condensed', sans-serif",
      fontSize: "1rem",
      letterSpacing: "2.7px",
    },
  },
});

export default theme;
