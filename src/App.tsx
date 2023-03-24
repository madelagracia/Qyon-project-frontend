import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./routes";
import { ThemeProvider } from "@emotion/react";
import { Light } from "@mui/icons-material";


export const App = () => {
  return (
    <ThemeProvider theme={Light}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}


