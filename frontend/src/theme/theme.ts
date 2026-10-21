import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#6366F1",
    },
    secondary: {
      main: "#22D3EE",
    },
    background: {
      default: "#0B1120",
      paper: "#151E2E",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", sans-serif',
  },
  shape: {
    borderRadius: 12,
  },
});
