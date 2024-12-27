import { Paper, Typography } from "@mui/material";

import { CartContext } from "../context/CartContext";
import { useContext, useEffect, useState } from "react";

import CompraStepper from "../componentes/Cart/CompraStepper";

const Compra = () => {
  const { carrito, totalApagar } = useContext(CartContext);

  const [total, setTotal] = useState(totalApagar());

  useEffect(() => {
    setTotal(totalApagar());
  }, [carrito]);

  return (
    <>
      <Paper
        elevation={0}
        sx={{
          pt: "8rem",
          borderRadius: 0,
          pl: "2rem",
          pb: "1rem",
          mb: "2rem",
          color: "primary.main",
        }}
      >
        <Typography variant="h2" component={"h1"} textAlign={"center"}>
          Compra
        </Typography>
      </Paper>
      <CompraStepper />
    </>
  );
};

export default Compra;
