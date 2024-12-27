import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import TuneIcon from "@mui/icons-material/Tune";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { DataContext } from "../../context/DataContext";
import { useContext } from "react";

export default function DrawerMenu({ openDrawer, setOpenDrawer }) {
  const { categorias, marcas, amperajes } = useContext(DataContext);

  const toggleDrawer = (newOpen) => () => {
    setOpenDrawer(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{
        display: "flex",
        gap: "1rem",
        justifyContent: "space-evenly",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <Box
        sx={{
          marginTop: "0.6rem",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Button
          component={Link}
          to="/productos/"
          disableElevation
          variant="contained"
          color="primary"
        >
          TODOS LOS PRODUCTOS
        </Button>
        <Button
          component={Link}
          to="/productos/filtro/badge/valor/VENDIDOS"
          disableElevation
          variant="outlined"
          color="info"
        >
          MÁS VENDIDOS
        </Button>
        <Button
          component={Link}
          to="/productos/filtro/badge/valor/OFERTA"
          disableElevation
          variant="outlined"
          color="info"
        >
          EN OFERTA
        </Button>
        <Button
          component={Link}
          to="/productos/filtro/badge/valor/NOVEDADES"
          disableElevation
          variant="outlined"
          color="info"
        >
          NOVEDADES
        </Button>
        <Button
          component={Link}
          to="/buscador"
          disableElevation
          variant="outlined"
          color="warning"
        >
          BUSCAR POR VEHICULO
        </Button>
      </Box>
      <List>
        <Divider orientation="vertical" sx={{ height: "100%" }} />
      </List>
      <List>
        <ListItem>
          <ListItemIcon>
            <TuneIcon />
          </ListItemIcon>
          <ListItemText primary="Categorías" />
        </ListItem>
        <Divider />
        {categorias.length > 0 &&
          categorias.map((categoria) => (
            <ListItem key={categoria._id} disablePadding>
              <ListItemButton
                component={Link}
                to={`/productos/filtro/categoria/valor/${categoria.category}`}
              >
                <ListItemText primary={categoria.category} />
              </ListItemButton>
            </ListItem>
          ))}
      </List>
      <List>
        <Divider orientation="vertical" sx={{ height: "100%" }} />
      </List>
      <List>
        <ListItem>
          <ListItemIcon>
            <BookmarkIcon />
          </ListItemIcon>
          <ListItemText primary="Marcas" />
        </ListItem>
        <Divider />
        {marcas.length > 0 &&
          marcas.map((marca) => (
            <ListItem key={marca._id} disablePadding>
              <ListItemButton
                component={Link}
                to={`/productos/filtro/marca/valor/${marca.nombre}`}
              >
                <ListItemText primary={marca.nombre} />
              </ListItemButton>
            </ListItem>
          ))}
      </List>
      <List>
        <Divider orientation="vertical" sx={{ height: "100%" }} />
      </List>
      <List>
        <ListItem>
          <ListItemIcon>
            <ElectricBoltIcon />
          </ListItemIcon>
          <ListItemText primary="Amperaje" />
        </ListItem>
        <Divider />
        {amperajes.length > 0 &&
          amperajes.map((rango) => (
            <ListItem key={rango._id} disablePadding>
              <ListItemButton
                component={Link}
                to={`/productos/filtro/amper/valor/${rango.min}`}
              >
                <ListItemText
                  primary={
                    rango.min === 200
                      ? `mayor a 12x${rango.min}`
                      : `12x${rango.min} - 12x${rango.max}`
                  }
                />
              </ListItemButton>
            </ListItem>
          ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer
        elevation={0}
        sx={{
          "&.MuiDrawer-root .MuiDrawer-paper": {
            paddingTop: "100px",
            borderBottom: "solid 1px rgba(255,255,255, 0.3)",
          },
        }}
        anchor="top"
        open={openDrawer}
        onClose={toggleDrawer(false)}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}
