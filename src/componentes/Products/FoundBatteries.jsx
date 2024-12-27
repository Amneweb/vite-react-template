import { useEffect, useState } from "react";
import axios from "axios";
import ProductLongCard from "./ProductLongCard";
import { Box, Grid2, Stack } from "@mui/material";
import base_api_url from "../../utlis/ruta";
const FoundBatteries = ({ encontradas }) => {
  const [bateriasEncontradas, setBateriasEncontradas] = useState([]);
  console.log("encontradas en found batteries", encontradas);
  console.log("baterias encontradas en found batteries ", bateriasEncontradas);
  useEffect(() => {
    console.log("encontradas en use effect ", encontradas);
    async function datosBaterias() {
      console.log("encontradas en datos baterias ", encontradas);
      let baterias = [];
      for (const encontrada of encontradas) {
        const datos = await axios.get(
          `${base_api_url}/api/baterias/${encontrada}`
        );
        baterias.push(datos.data.payload);
      }
      setBateriasEncontradas(baterias);
    }
    datosBaterias();
  }, [encontradas]);

  return (
    <Box>
      <Grid2 container spacing={2} mx={1}>
        {bateriasEncontradas &&
          bateriasEncontradas.map((bateria) => (
            <Stack
              key={bateria.sku}
              sx={{
                border: "1px solid rgba(255,255,255,0.2)",
                width: "100%",
                px: "1rem",
              }}
            >
              <ProductLongCard bateria={bateria} />
            </Stack>
          ))}
      </Grid2>
    </Box>
  );
};

export default FoundBatteries;
