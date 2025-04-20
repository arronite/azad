import { createTheme } from "@mui/material";

import "@fontsource/vazirmatn";

export const theme = createTheme({
  direction: "rtl",
  palette: {
    primary: {
      main: "#1976D2",
      contrastText: "#2A3875",
      light: "#f9f9f9",
    },
    secondary: {
      main: "#9c27b0",
    },
    background: {
      default: "#f9f9f9",
      paper: "#D9D9D9",
    },
    info: {
      main: "#212121",
    },
    text: {
      main: "#647ED1",
      secondary: "#f9f9f9",
      contrastText: "#2A3875",
    },
  },
  typography: {
    fontFamily: "Vazirmatn, Roboto, Arial, sans-serif",
    button: {
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 12,
  },
});
