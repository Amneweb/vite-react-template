import { Box, Grid2, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import SimilarCarousel from "./SimilarCarousel";
import base_api_url from "../../utlis/ruta";
const SimilarProducts = ({ filtro, valor, titulo }) => {
  console.log("valor ", valor);
  console.log("filtro ", filtro);
  const [similar, setSimilar] = useState([]);
  useEffect(() => {
    async function fetchSimilar() {
      try {
        const response = await axios.get(
          `${base_api_url}/api/baterias/${filtro}/${valor}`
        );
        const array = response.data.payload;

        console.log("resultado de axios ", array);
        setSimilar(array);
      } catch (error) {
        console.log("ERROR");
        console.log(error);
      }
    }
    fetchSimilar();
  }, [valor]);

  return (
    <Box sx={{ mt: "3rem" }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          hyphens: "manual",
          color: "primary.main",
          textAlign: "center",
          mb: 2,
        }}
      >
        {titulo}
      </Typography>
      <Box
        className="dotted"
        sx={{
          width: "100%",
          my: "2rem",

          borderColor: "#10aee3",
          borderStyle: "solid",
          borderWidth: "2px",
          borderLeft: 0,
          borderRight: 0,
          px: { xs: "0.5rem", md: "3rem" },
          py: "4rem",
        }}
      >
        <SimilarCarousel similar={similar} />
      </Box>
    </Box>
  );
};

export default SimilarProducts;
