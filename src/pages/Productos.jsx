import { useParams } from "react-router-dom";
import { Box, IconButton, Paper, Snackbar, Typography } from "@mui/material";
import ProductList from "../componentes/Products/ProductList";
import { useEffect, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import Leyenda from "../componentes/Products/Leyenda";
import DropDownFilter from "../componentes/Products/DropDownFilter";
import base_api_url from "../utlis/ruta";
import IntroAccordion from "../componentes/Products/IntroAccordion";
const Productos = () => {
  const filtro = useParams().filtro;
  const valor = useParams().valor;

  const [titulo, setTitulo] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [filtroMarca, setFiltroMarca] = useState();
  const [filtroAmperaje, setFiltroAmperaje] = useState();
  const [filtroCategoria, setFiltroCategoria] = useState();
  console.log("filtro marca ", filtroMarca);
  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };
  const handleOpenSnackbar = () => {
    setOpenSnackbar(true);
  };
  const handleFiltroMarca = (marca) => {
    setFiltroMarca(marca);
  };
  const handleFiltroCategoria = (categoria) => {
    setFiltroCategoria(categoria);
  };
  const handleFiltroAmperaje = (amperaje) => {
    setFiltroAmperaje(amperaje);
  };
  const action = (
    <>
      <IconButton size="small" href={`/cart`} color="inherit">
        <ShoppingCartIcon />
      </IconButton>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleCloseSnackbar}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );
  useEffect(() => {
    if (filtro === "amper") {
      async function traerRangos() {
        try {
          const response = await axios.get(
            `${base_api_url}/api/amperajes/${valor}`
          );
          const datos = response.data.payload;

          setTitulo(`Amperaje › ${datos.min} - ${datos.max}`);
        } catch (error) {
          console.log("ERROR");
          console.log(error);
        }
      }
      traerRangos();
    } else if (filtro === "badge") {
      setTitulo(`${valor}`);
    } else if (filtro) {
      setTitulo(`${filtro} › ${valor}`);
    } else {
      setTitulo("Todos los productos");
    }
    /* return () => {
      setTitulo("");
    }; */
  }, [filtro, valor]);

  return (
    <>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="Se agregó el producto. Miralo en el carrito."
        action={action}
      />
      <Paper
        elevation={0}
        sx={{
          pt: "8rem",
          borderRadius: 0,
          pl: "2rem",
          pb: "1rem",
          mb: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {filtro === "marca" ? (
          <IntroAccordion cate={valor} titulo={titulo} />
        ) : (
          <Typography
            variant="h2"
            component="h1"
            sx={{ color: "primary.main" }}
          >
            productos › {titulo}
          </Typography>
        )}
      </Paper>

      <Box
        mx={{ xs: 1, md: 5 }}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Leyenda />
        <DropDownFilter
          marcaVisible={handleFiltroMarca}
          amperajeVisible={handleFiltroAmperaje}
          categoriaVisible={handleFiltroCategoria}
          filtro={filtro}
        />
      </Box>
      <ProductList
        visibles={[filtroMarca, filtroCategoria, filtroAmperaje]}
        handleSnack={handleOpenSnackbar}
        filtro={filtro}
        valor={valor}
      />
    </>
  );
};

export default Productos;
