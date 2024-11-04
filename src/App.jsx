import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Header from "./components/customer/header/Header";
import { Link, Outlet } from "react-router-dom";
import { getDesignTokens } from "./pages/theme";
import { useState } from "react";
import Footer from "./components/customer/footer/Footer";
import Cart from "./components/customer/cart/Cart";
import { useSelector } from "react-redux";

function App() {
  const cart = useSelector((state) => state.cart);
  const [selectedTheme, setSelectedTheme] = useState(
    localStorage.getItem("theme")
  );
  // @ts-ignore
  const theme = createTheme(getDesignTokens(selectedTheme));

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header setSelectedTheme={setSelectedTheme} />
        <Link to={cart.length === 0? "not": "cart"}>
          <Cart />
        </Link>
        <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "130px" }}>
          <Outlet />
        </Box>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
