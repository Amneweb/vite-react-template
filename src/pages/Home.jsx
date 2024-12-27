import axios from "axios";
import Marcas from "../componentes/Products/Marcas";
import HeroContainer from "../componentes/Hero/HeroContainer";
import { useEffect, useState, useRef } from "react";
import Resultados from "../componentes/Buscador/Resultados";
import FeaturedProducts from "../componentes/Products/FeaturedProducts";
import Categorias from "../componentes/Categorias/Categorias";
import ComoComprar from "../componentes/Tips/ComoComprar";
import TipsList from "../componentes/Tips/TipsList";
import { Box, IconButton, Slide, Snackbar } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import VideoSlider from "../componentes/ImageBanner/VideoSlider";
import TipTabs from "../componentes/Tips/TipTabs";
import base_api_url from "../utlis/ruta";
const Home = () => {
  const [open, setOpen] = useState(false);
  const isPageRendered = useRef(null);
  const [selectedValue, setSelectedValue] = useState("");
  const [datos, setDatos] = useState({});
  const [bateriasEncontradas, setBateriasEncontradas] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };
  const handleOpenSnackbar = () => {
    setOpenSnackbar(true);
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
  const handleClickOpen = (datos) => {
    setOpen(true);

    setDatos(datos);
  };
  useEffect(() => {
    async function encontradas(datos) {
      const { marca, version, anio, modelo } = datos;
      try {
        const response = await axios.get(
          `${base_api_url}/api/buscador/marca/${marca.nombre}/modelo/${modelo}/version/${version}/anioi/${anio.anio_inicio}/aniof/${anio.anio_fin}`
        );
        const encontradasObj = response.data.payload;
        //encontradasObj es un objeto con los datos del auto buscado que en la propiedad sku tiene un array con los sku de las baterias que pueden ir. Para mandar despues a buscar la info de cada bateria hay que usar encontradasObj.sku
        setBateriasEncontradas(encontradasObj);
      } catch (error) {
        console.log("ERROR");
        console.log(error);
      }
    }
    if (isPageRendered.current) {
      encontradas(datos);
    }
    isPageRendered.current = true;
  }, [datos]);

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
    setBateriasEncontradas({});
  };

  return (
    <Slide direction="down" in={true} timeout={500}>
      <Box>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          message="Se agregó el producto. Miralo en el carrito."
          action={action}
        />
        <HeroContainer onClick={handleClickOpen} />
        <Marcas />
        <FeaturedProducts
          titulo="Los más vendi&shy;dos"
          handleSnack={handleOpenSnackbar}
          badge="VENDIDOS"
        />
        {bateriasEncontradas && (
          <Resultados
            selectedValue={selectedValue}
            open={open}
            onClose={handleClose}
            arrayBaterias={bateriasEncontradas}
          />
        )}
        <VideoSlider />
        <Categorias />
        <FeaturedProducts
          titulo="Ofer&shy;tas del mes"
          handleSnack={handleOpenSnackbar}
          badge="OFERTA"
        />
        <ComoComprar />

        <TipsList />
        <TipTabs />
      </Box>
    </Slide>
  );
};

export default Home;
