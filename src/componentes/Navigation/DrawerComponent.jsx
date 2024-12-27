import {
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import TuneIcon from "@mui/icons-material/Tune";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import VerticalShadesClosedIcon from "@mui/icons-material/VerticalShadesClosed";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import axios from "axios";
import base_api_url from "../../utlis/ruta";
const DrawerComponent = ({ openMobileDrawer, setOpenMobileDrawer }) => {
  function compareNumbers(a, b) {
    return a - b;
  }
  const [openCategorias, setOpenCategorias] = useState(false);
  const [openMarcas, setOpenMarcas] = useState(false);
  const [openAmperaje, setOpenAmperaje] = useState(false);
  const [openPlacas, setOpenPlacas] = useState(false);
  const [categorias, setCategorias] = useState([]);
  const [marcas, setMarcas] = useState([]);
  const [amperaje, setAmperaje] = useState([]);
  const [placas, setPlacas] = useState([]);

  useEffect(() => {
    async function traerCategorias() {
      try {
        const response = await axios.get(`${base_api_url}/api/categorias`);
        const datos = response.data.payload;

        setCategorias(datos);
      } catch (error) {
        console.log("ERROR");
        console.log(error);
      }
    }
    async function traerMarcas() {
      try {
        const response = await axios.get(`${base_api_url}/api/battery-brand`);
        const datos = response.data.payload;

        setMarcas(datos);
      } catch (error) {
        console.log("ERROR");
        console.log(error);
      }
    }
    async function traerAmperaje() {
      try {
        const response = await axios.get(`${base_api_url}/api/amperajes`);
        const datos = response.data.payload;

        setAmperaje(datos);
      } catch (error) {
        console.log("ERROR");
        console.log(error);
      }
    }
    async function traerPlacas() {
      try {
        const response = await axios.get(`${base_api_url}/api/placas`);
        const datos = response.data.payload;

        setPlacas(datos.placas.sort(compareNumbers));
      } catch (error) {
        console.log("ERROR");
        console.log(error);
      }
    }
    traerCategorias();
    traerMarcas();
    traerAmperaje();
    traerPlacas();
  }, []);

  const handleClick = (e) => {
    const lista = e.currentTarget.id;
    lista === "lista-categorias" && setOpenCategorias(!openCategorias);
    lista === "lista-marcas" && setOpenMarcas(!openMarcas);
    lista === "lista-amperaje" && setOpenAmperaje(!openAmperaje);
    lista === "lista-placas" && setOpenPlacas(!openPlacas);
  };
  return (
    <Drawer anchor="left" open={openMobileDrawer}>
      <IconButton
        aria-label="close"
        onClick={() => setOpenMobileDrawer(false)}
        sx={(theme) => ({
          position: "absolute",
          right: 8,
          top: 160,
          color: "black",
        })}
      >
        <CloseIcon />
      </IconButton>
      <List sx={{ mt: "180px", minWidth: "250px" }}>
        <ListItemButton id="lista-categorias" onClick={(e) => handleClick(e)}>
          <ListItemIcon>
            <TuneIcon />
          </ListItemIcon>
          <ListItemText primary="Categorías" />
          {openCategorias ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openCategorias} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {categorias.map((categoria) => (
              <ListItemButton
                onClick={() => {
                  setOpenMobileDrawer(false), setOpenCategorias(false);
                }}
                key={categoria._id}
                sx={{ pl: 4 }}
              >
                <ListItemText primary={categoria.category} />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
        <Divider />
        <ListItemButton id="lista-marcas" onClick={(e) => handleClick(e)}>
          <ListItemIcon>
            <BookmarkIcon />
          </ListItemIcon>
          <ListItemText primary="Marcas" />
          {openMarcas ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openMarcas} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {marcas.map((marca) => (
              <ListItemButton
                onClick={() => {
                  setOpenMobileDrawer(false), setOpenMarcas(false);
                }}
                key={marca._id}
                sx={{ pl: 4 }}
              >
                <ListItemText primary={marca.nombre} />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
        <Divider />
        <ListItemButton id="lista-amperaje" onClick={(e) => handleClick(e)}>
          <ListItemIcon>
            <ElectricBoltIcon />
          </ListItemIcon>
          <ListItemText primary="Amperajes" />
          {openAmperaje ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openAmperaje} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {amperaje.map((ampers) => (
              <ListItemButton
                onClick={() => {
                  setOpenMobileDrawer(false), setOpenAmperaje(false);
                }}
                key={ampers.min}
                sx={{ pl: 4 }}
              >
                <ListItemText primary={`12x${ampers.min} - 12x${ampers.max}`} />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
        <Divider />
        <ListItemButton id="lista-placas" onClick={(e) => handleClick(e)}>
          <ListItemIcon>
            <VerticalShadesClosedIcon />
          </ListItemIcon>
          <ListItemText primary="Placas" />
          {openPlacas ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openPlacas} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {placas.map((placa) => (
              <ListItemButton
                onClick={() => {
                  setOpenMobileDrawer(false), setOpenPlacas(false);
                }}
                key={placa}
                sx={{ pl: 4 }}
              >
                <ListItemText primary={`${placa} placas`} />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      </List>
    </Drawer>
  );
};

export default DrawerComponent;
