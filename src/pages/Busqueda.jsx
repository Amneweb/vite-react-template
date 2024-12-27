import base_api_url from "../utlis/ruta";
import { Box, Grid2, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../componentes/Products/ProductCard";
const Busqueda = ({ palabra }) => {
  const [baterias, setBaterias] = useState([]);

  useEffect(() => {
    async function traerBaterias() {
      try {
        const response = await axios.get(
          `${base_api_url}/api/baterias/search/${palabra}`
        );
        const datos = response.data.payload;
        setBaterias(datos);
      } catch (error) {
        console.log("ERROR");
        console.log(error);
      }
    }
    traerBaterias();
  }, [palabra]);

  return (
    <>
      <Paper
        elevation={0}
        sx={{
          pt: "8rem",
          bgcolor: "#1d1f25",
          borderRadius: 0,
          pl: "2rem",
          pb: "1rem",
          mb: "2rem",
        }}
      >
        <Typography
          variant="h2"
          component={"h1"}
          color="primary.main"
          sx={{ display: "inline" }}
        >
          Resultado de búsqueda ›{" "}
        </Typography>
        <Typography
          variant="h2"
          component={"h1"}
          color="white"
          sx={{ display: "inline" }}
        >
          {palabra}
        </Typography>
      </Paper>
      <Box>
        <Grid2 container spacing={{ md: 3, xs: 1 }} mx={{ md: 5, xs: 1 }}>
          {baterias.length > 0 ? (
            baterias.map((bateria) => (
              <Grid2
                item
                size={{ xs: 6, sm: 6, md: 4, lg: 3, xl: 2 }}
                key={bateria._id}
                sx={{ display: "flex" }}
              >
                <ProductCard bateria={bateria} />
              </Grid2>
            ))
          ) : (
            <Typography>
              No se han encontrado resultados para el término buscado
            </Typography>
          )}
        </Grid2>
      </Box>
    </>
  );
};

export default Busqueda;
