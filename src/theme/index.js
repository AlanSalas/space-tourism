import { createTheme } from "@mui/material/styles";

const theme = createTheme({
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
      letterSpacing: "4.75em",
    },
    subtitle1: {
      fontSize: "1.75rem",
    },
    subtitle2: {
      fontFamily: "'Barlow Condensed', sans-serif",
      fontSize: "0.875rem",
      letterSpacing: "2.35rem",
    },
    navText: {
      fontFamily: "'Barlow Condensed', sans-serif",
      fontSize: "1rem",
      letterSpacing: "2.7rem",
    },
  },
});

export default theme;
