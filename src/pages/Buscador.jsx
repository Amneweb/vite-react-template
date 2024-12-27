import { Box, Grid2, Paper, Stack, Typography } from "@mui/material";
import BatterySearchComponent from "../componentes/Buscador/BatterySearchComponent";
import { useEffect, useState } from "react";
import base_api_url from "../utlis/ruta";
import FoundBatteries from "../componentes/Products/FoundBatteries";
import axios from "axios";

/* <Grid2 item size={{ xs: 12, sm: 6, md: 3 }} key={sku}>
                    <FoundBatteries sku={sku} />
                  </Grid2> */

const Buscador = () => {
  const [datos, setDatos] = useState({});
  const [bateriasEncontradas, setBateriasEncontradas] = useState(null);
  const handleClick = (datos) => {
    setDatos(datos);
  };
  useEffect(() => {
    async function encontradas(datos) {
      const { marca, version, anio, modelo } = datos;
      try {
        const response = await axios.get(
          `${base_api_url}/api/buscador/marca/${marca.nombre}/modelo/${modelo}/version/${version}/anioi/${anio.anio_inicio}/aniof/${anio.anio_fin}`
        );
        const encontradasObj = response.data.payload;
        //encontradasObj es un objeto con los datos del auto buscado que en la propiedad sku tiene un array con los sku de las baterias que pueden ir. Para mandar despues a buscar la info de cada bateria hay que usar encontradasObj.sku
        setBateriasEncontradas(encontradasObj);
      } catch (error) {
        console.log("ERROR");
        console.log(error);
      }
    }
    encontradas(datos);
  }, [datos]);

  return (
    <>
      <Paper
        elevation={0}
        sx={{
          pt: "8rem",
          borderRadius: 0,
          pl: "2rem",
          pb: "1rem",
          mb: "6rem",
          color: "primary.main",
        }}
      >
        <Typography variant="h2" component={"h1"} textAlign={"center"}>
          Buscador por modelo de auto
        </Typography>
      </Paper>
      <BatterySearchComponent
        onClick={handleClick}
        onReset={setBateriasEncontradas}
      />
      {bateriasEncontradas && (
        <Box
          sx={{
            display: "flex",
            width: { xs: 1, md: 0.9 },
            mx: "auto",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Typography variant="h6" color="primary.main">
            Baterías para tu auto
          </Typography>
          <Box>
            <Grid2 container spacing={2} mx={1}>
              {/*    {bateriasEncontradas.sku_baterias &&
                bateriasEncontradas.sku_baterias.map((sku) => (
                  <Stack
                    sx={{
                      border: "1px solid rgba(255,255,255,0.2)",
                      width: "100%",
                      px: "1rem",
                    }}
                  >
                    <FoundBatteries encontradas={bateriasEncontradas.sku_baterias} />
                  </Stack>
                ))} */}
              <Grid2 container spacing={2} mx={1}>
                <FoundBatteries
                  encontradas={bateriasEncontradas.sku_baterias}
                />
              </Grid2>
            </Grid2>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Buscador;
