import { createContext, useContext, useMemo, useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material';
import App from "./App";
import { CssBaseline } from "@mui/material";

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export default function ThemedApp() {
  const [mode, setMode] = useState();

  const Theme = useMemo(() => {
    return createTheme({
      palette: {
        mode
      },
    });
  }, [mode]);

  return (
    <AppContext.Provider value={{ mode, setMode }}>
      <ThemeProvider theme={Theme}>
        <App />
        <CssBaseline/>
      </ThemeProvider>
    </AppContext.Provider>
  );
}
