import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { themeSettings } from "theme";
import Main from "scenes/main";
import Result from "scenes/result";
function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            {/* <Route element={<Layout />}> */}
            {/* <Route path="/" element={<Navigate to="/" replace />} /> */}
            <Route path="/" element={<Main />} />/ {/* </Route> */}
            <Route path="/result" element={<Result />} />/ {/* </Route> */}
            {/* <Route element={<TranslateButton />}/> */}
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
