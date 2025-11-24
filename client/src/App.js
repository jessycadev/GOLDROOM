import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import Layout from "scenes/layout";
import Dashboard from "scenes/dashboard";
import Products from "scenes/products";
import Costumers from "scenes/customers";
import Transactions from "scenes/transactions";
import Quartos from "scenes/quartos";
import Login from "scenes/login";


function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
  // const dados = useGetLoginQuery();

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/login" replace />} />
              <Route path="/dashboard" element={<requireAuth> <Dashboard /> </requireAuth>} />
              <Route path="/products" element={<Products />} />
              <Route path="/customers" element={<Costumers />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/bill" element={<Quartos />} />
              <Route path="/login" element={<Login />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
