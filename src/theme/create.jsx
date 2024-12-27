import { createTheme } from "@mui/material/styles";

const oceanTheme = createTheme({
  typography: {
    fontFamily: '"Poppins", sans-serif',
    h1: {
      fontFamily: '"Barlow Condensed", sans-serif',
      fontSize: "6rem",
      "@media (max-width:900px)": {
        fontSize: "3rem",
      },
    },
    h2: { fontFamily: '"Barlow Condensed", sans-serif', fontSize: "4rem" },
    /* h3: { fontFamily: '"Barlow Condensed", sans-serif' }, */
  },

  palette: {
    background: {
      default: "#00020f",
      paper: "#1d1f25",
      box: "#1d1f25",
    },

    mode: "dark",
    primary: {
      light: "#4dabf5",
      main: "#10aee3", //turquesa
      dark: "#006ab5",
      contrastText: "#fff",
    },
    secondary: {
      light: "#f73378",
      main: "#f50057",
      dark: "#ab003c",
      contrastText: "#fff",
    },
    error: {
      light: "#ff784e",
      main: "#ff5722",
      dark: "#b23c17",
      contrastText: "#fff",
    },
    warning: {
      light: "#fddf5d",
      main: "#fdd835",
      dark: "#b19725",
      contrastText: "#fff",
    },
    success: {
      light: "#96c267",
      main: "#7cb342",
      dark: "#567d2e",
      contrastText: "#fff",
    },
    naranja: {
      main: "#567d2e",
      contrastText: "#fff",
    },
    gris: {
      main: "#1d1f25",
      contrastText: "#fff",
    },
    text: {
      primary: "rgba(255,255,255,0.9)",
      celeste: "#10aee3",
    },
  },
});

export default oceanTheme;
