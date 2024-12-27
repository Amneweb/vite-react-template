import ProductDisplay from "../componentes/Products/ProductDisplay";
import { useParams } from "react-router-dom";
import { Box, Paper, Slide, Typography } from "@mui/material";

import SimilarProducts from "../componentes/Products/SimilarProducts";
import { useEffect, useState } from "react";
import axios from "axios";
import base_api_url from "../utlis/ruta";
import ComprasTabs from "../componentes/Products/ComprasTabs";
const Product = () => {
  const sku = useParams().sku;
  console.log("sku en producto ", sku);

  const [bateria, setBateria] = useState({});

  useEffect(() => {
    async function bateria(sku) {
      try {
        const response = await axios.get(`${base_api_url}/api/baterias/${sku}`);
        const datos = response.data.payload;

        setBateria(datos);
      } catch (error) {
        console.log("ERROR");
        console.log(error);
      }
    }
    bateria(sku);
  }, [sku]);

  return (
    <Slide direction="down" in={true} timeout={500}>
      <Box>
        <Paper
          elevation={0}
          sx={{
            pt: "8rem",
            borderRadius: 0,
            pl: "2rem",
            pb: "1rem",
            mb: "2rem",
          }}
        >
          <Typography
            sx={{ color: "primary.main" }}
            variant="h2"
            component={"h1"}
            textAlign="center"
          >
            {bateria.nombre}
          </Typography>
        </Paper>
        <Box sx={{ px: "5rem" }}>
          <ProductDisplay bateria={bateria} />
        </Box>
        <ComprasTabs />
        <SimilarProducts
          titulo="Baterías similares"
          filtro="amper"
          valor={bateria.amperaje}
        />
      </Box>
    </Slide>
  );
};

export default Product;
