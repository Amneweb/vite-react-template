import { useState, cloneElement, useContext } from "react";

import { CartContext } from "../../context/CartContext";
import {
  Toolbar,
  IconButton,
  Box,
  Button,
  Badge,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import DrawerComponent from "./DrawerComponent";
import DrawerMenu from "./DrawerMenu";
import SearchBar from "./SearchBar";

/* function BackgroundScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 70,
  });

  return children
    ? cloneElement(children, {
        style: {
          backgroundColor: trigger ? "#1d1f25" : "transparent",
          borderBottom: trigger ? "rgba(255,255,255,0.1) solid 1px" : "none",
        },
      })
    : null;
}

BackgroundScroll.propTypes = {
  children: PropTypes.element,
}; */

const NavBar = (props) => {
  const { totalProductosEnCarrito } = useContext(CartContext);
  const [openMobileDrawer, setOpenMobileDrawer] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      {/* <BackgroundScroll {...props}> */}
      <Box
        elevation={2}
        position="fixed"
        zIndex={2000}
        width="100%"
        paddingY="0.5rem"
        sx={{
          backgroundColor: "#1d1f25",
          borderBottom: "rgba(255,255,255,0.1) solid 1px",
        }}
      >
        <Toolbar>
          <Box
            component="div"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
              flexWrap: { xs: "wrap", md: "nowrap" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                maxHeight: "60px",
                width: { xs: "100%", md: "auto" },
                order: { xs: -2, md: 0 },
                my: { xs: "10px", md: "auto" },
              }}
            >
              <img className="logo" src="/assets/images/logoOceanColor.png" />
            </Box>
            <Box>
              {matches && (
                <IconButton
                  onClick={() => {
                    setOpenMobileDrawer(true);
                  }}
                >
                  <MenuOutlinedIcon sx={{ color: "white" }} />
                </IconButton>
              )}
            </Box>
            {matches ? (
              <DrawerComponent
                openMobileDrawer={openMobileDrawer}
                setOpenMobileDrawer={setOpenMobileDrawer}
              />
            ) : (
              <Box sx={{ display: "flex" }}>
                <Button
                  href="/"
                  variant="text"
                  sx={{ marginRight: "1rem", color: "white" }}
                >
                  Inicio
                </Button>
                <Button
                  variant="text"
                  sx={{ marginRight: "1rem", color: "white" }}
                  onClick={() => {
                    setOpenDrawer(!openDrawer);
                  }}
                >
                  Productos
                </Button>
                <Button
                  variant="text"
                  sx={{ marginRight: "1rem", color: "white" }}
                >
                  Contacto
                </Button>

                <Button
                  variant="text"
                  sx={{ marginRight: "1rem", color: "white" }}
                  href="/nosotros"
                >
                  Nosotros
                </Button>
              </Box>
            )}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "2rem",
                alignItems: "center",
                order: { xs: -1, md: 0 },
                width: { xs: "100%", md: "auto" },
              }}
            >
              <SearchBar
                searchQuery={props.searchQuery}
                setSearchQuery={props.setSearchQuery}
              />

              <IconButton href="/cart">
                <Badge
                  badgeContent={totalProductosEnCarrito()}
                  color="secondary"
                >
                  <ShoppingBasketIcon />
                </Badge>
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </Box>
      {/* </BackgroundScroll> */}
      <DrawerMenu openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
    </>
  );
};

export default NavBar;
