import { Box, Divider, Grid2, Stack, Typography } from "@mui/material";
import FixedCartItem from "./FixedCartItem";
import { formateado } from "../../utlis/format";
import { CartContext } from "../../context/CartContext";
import { useContext, useState } from "react";

const StepCarrito = () => {
  const { carrito, totalApagar } = useContext(CartContext);
  const [total, setTotal] = useState(totalApagar());
  return (
    <Box sx={{ width: "90%", mx: "auto" }}>
      <Stack spacing={2}>
        <Grid2 container spacing={2} justifyContent="space-between">
          <Grid2 item size={1}></Grid2>
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
        {carrito.map((item) => (
          <>
            <FixedCartItem key={item.sku} item={item} />
            <Divider />
          </>
        ))}
      </Stack>
      <Box
        sx={{ mt: 3, display: "flex", justifyContent: "flex-end", gap: "5rem" }}
      >
        <Typography variant="h6" sx={{ color: "primary.main" }}>
          Total a pagar:
        </Typography>
        <Typography
          variant="h6"
          value={totalApagar()}
          sx={{ color: "primary.main" }}
        >
          {formateado.format(total)}
        </Typography>
      </Box>
    </Box>
  );
};

export default StepCarrito;
