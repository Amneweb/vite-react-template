import oceanTheme from "./theme/create";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CssBaseline, Fab, ThemeProvider, Toolbar } from "@mui/material";
import { CartProvider } from "./context/CartContext";
import { DataProvider } from "./context/DataContext";
import { useState } from "react";
import PropTypes from "prop-types";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Nosotros from "./pages/Nosotros";
import Backoffice from "./pages/Backoffice";
import Productos from "./pages/Productos";
import Cart from "./pages/Cart";
import Busqueda from "./pages/Busqueda";
import Compra from "./pages/Compra";
import NavBar from "./componentes/Navigation/NavBar";
import PagosSkeleton from "./componentes/Cart/PagosSkeleton";
import Footer from "./componentes/Footer/Footer";
import ScrollTopButton from "./componentes/Navigation/ScrollTopButton";
import Buscador from "./pages/Buscador";
import ScrollToTop from "./pages/ScrollToTop";
import DataGrid from "./componentes/Data/DataGrid";

ScrollTopButton.propTypes = {
  children: PropTypes.element,
};

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <DataProvider>
      <CartProvider>
        <BrowserRouter>
          <ScrollToTop />
          <ThemeProvider theme={oceanTheme}>
            <CssBaseline />
            <NavBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <Toolbar id="back-to-top-anchor" />
            <Routes>
              <Route path="/" element={<Home />} />;
              <Route path="/product/:sku" element={<Product />} />;
              <Route
                path="/productos/filtro/:filtro/valor/:valor"
                element={<Productos />}
              />
              <Route path="/productos/" element={<Productos />} />
              <Route path="/cart" element={<Cart />} />;
              <Route path="/compra" element={<Compra />} />;
              <Route path="/esqueleto" element={<PagosSkeleton />} />;
              <Route path="/nosotros" element={<Nosotros />} />;
              <Route path="/backoffice" element={<Backoffice />} />;
              <Route path="/buscador" element={<Buscador />} />;
              <Route path="/data" element={<DataGrid />} />;
              <Route
                path="/busqueda"
                element={<Busqueda palabra={searchQuery} />}
              />
            </Routes>
            <Footer />
            <ScrollTopButton>
              <Fab size="small" aria-label="scroll back to top">
                <KeyboardArrowUpIcon />
              </Fab>
            </ScrollTopButton>
          </ThemeProvider>
        </BrowserRouter>
      </CartProvider>
    </DataProvider>
  );
}

export default App;
