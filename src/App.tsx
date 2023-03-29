import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./routes";
import { ThemeProvider } from "@emotion/react";
import { Light } from "@mui/icons-material";
import { AppThemeProvider } from "./shared/contexts/ThemeContext";


export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppThemeProvider>
  );
}


