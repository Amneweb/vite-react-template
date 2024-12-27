import { Box, Typography } from "@mui/material";
import DesktopBrands from "./DesktopBrands";
import MobileBrands from "./MobileBrands";
import { useEffect, useState } from "react";
import axios from "axios";
import base_api_url from "../../utlis/ruta";
const Marcas = () => {
  const [marcas, setMarcas] = useState([]);
  useEffect(() => {
    const getBrandList = async () => {
      try {
        const response = await axios.get(`${base_api_url}/api/battery-brand/`);
        const arrayMarcas = response.data.payload;
        setMarcas(arrayMarcas);
      } catch (error) {
        console.log("ERROR");
        console.log(error);
      }
    };
    getBrandList();
  }, []);
  return (
    <Box sx={{ my: "4rem" }}>
      <Typography
        sx={{
          mb: "3rem",
          textAlign: "center",
          fontWeight: "bold",
          color: "white",
        }}
        variant="h3"
      >
        {"Nuestras marcas"}
      </Typography>
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          py: "4rem",
          backgroundColor: "#1d1f25",
        }}
      >
        {marcas && <DesktopBrands arrayMarcas={marcas} />}
      </Box>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <MobileBrands arrayMarcas={marcas} />
      </Box>
    </Box>
  );
};

export default Marcas;
