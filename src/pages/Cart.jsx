import {
  Box,
  Button,
  Divider,
  Grid2,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import ShopIcon from "@mui/icons-material/Shop";

import { CartContext } from "../context/CartContext";
import { useContext, useEffect, useState } from "react";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { formateado } from "../utlis/format";
import CartList from "../componentes/Cart/CartList";

const Cart = () => {
  const { carrito, vaciarCarrito, removerElemento, totalApagar, expira } =
    useContext(CartContext);

  const [total, setTotal] = useState(totalApagar());

  useEffect(() => {
    setTotal(totalApagar());
  }, [carrito]);

  const handleVaciar = () => {
    vaciarCarrito();
  };
  const handleRemover = (item) => {
    removerElemento(item);
  };
  return (
    <>
      <Paper
        elevation={0}
        sx={{
          pt: "8rem",
          color: "primary.main",
          borderRadius: 0,
          pl: "2rem",
          pb: "1rem",
          mb: "2rem",
        }}
      >
        <Typography variant="h2" component={"h1"} textAlign={"center"}>
          Carrito de compras
        </Typography>
      </Paper>

      <Box sx={{ width: "100%", px: "5rem", color: "rgba(255,255,255,0.7)" }}>
        {carrito.length > 0 ? (
          <>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mb: "3rem",
              }}
            >
              {expira != null && (
                <Typography variant="p">
                  Este carrito expira a las{" "}
                  {new Date(expira).toLocaleTimeString()}
                </Typography>
              )}
              <Button
                variant="contained"
                onClick={() => handleVaciar()}
                startIcon={<RemoveShoppingCartIcon />}
              >
                VACIAR CARRITO
              </Button>
            </Box>
            <Stack spacing={2}>
              <Grid2 container spacing={2}>
                <Grid2 item size={1} display="flex" justifyContent="center">
                  <Typography>Borrar</Typography>
                </Grid2>
                <Grid2 item size={2}></Grid2>
                <Grid2 item size={3}>
                  <Typography>Batería</Typography>
                </Grid2>
                <Grid2 item size={2} display="flex" justifyContent="center">
                  <Typography>Cantidad</Typography>
                </Grid2>
                <Grid2 item size={2} display="flex" justifyContent="end">
                  <Typography>Precio unitario</Typography>
                </Grid2>
                <Grid2 item size={2} display="flex" justifyContent="end">
                  <Typography>Total</Typography>
                </Grid2>
              </Grid2>
              <Divider />
              <CartList remover={handleRemover} />
            </Stack>
            <Grid2
              container
              sx={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Typography variant="h6" value={totalApagar()}>
                Total a pagar {formateado.format(total)}
              </Typography>
            </Grid2>
            <Box
              sx={{ display: "flex", justifyContent: "center", gap: "1rem" }}
            >
              <Button
                variant="outlined"
                href="/productos"
                size="large"
                startIcon={<AddShoppingCartIcon />}
              >
                AGREGAR MAS PRODUCTOS
              </Button>

              <Button
                variant="contained"
                href="/compra"
                size="large"
                startIcon={<ShopIcon />}
              >
                INICIAR COMPRA
              </Button>
            </Box>
          </>
        ) : (
          <Grid2 container spacing={2}>
            <Grid2
              item
              size={{ xs: 12, md: 6 }}
              sx={{ py: "10rem", px: "4rem" }}
            >
              <Typography variant="h4" sx={{ color: "white", pb: "3rem" }}>
                El carrito aun está vacío.
              </Typography>
              <Typography variant="body1">
                Te invitamos a recorrer nuestro catálogo para encontrar tu nueva
                batería.
              </Typography>
            </Grid2>
            <Grid2
              item
              size={{ xs: 12, md: 6 }}
              sx={{
                backgroundImage: "url(/assets/images/anaqueles.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "top left",
                height: { xs: "400px", md: "auto" },
              }}
            ></Grid2>
          </Grid2>
        )}
      </Box>
    </>
  );
};

export default Cart;
