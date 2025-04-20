import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "../routes/MainRoutes";
import Providers from "./Providers";

import "../shared/styles/index.css";
import { theme } from "../config/theme";
import { ThemeProvider } from "@emotion/react";
import { SnackbarProvider } from "notistack";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <SnackbarProvider>
          <Providers>
            <MainRoutes />
          </Providers>
        </SnackbarProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
