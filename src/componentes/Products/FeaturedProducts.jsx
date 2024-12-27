import { Box, Grid2, Typography } from "@mui/material";
import CardCarousel from "./CardCarousel";
import { useEffect, useState } from "react";
import axios from "axios";
import base_api_url from "../../utlis/ruta";
const FeaturedProducts = ({ titulo, badge, handleSnack }) => {
  const [featured, setFeatured] = useState([]);
  useEffect(() => {
    async function fetchFeatured() {
      try {
        const response = await axios.get(
          `${base_api_url}/api/baterias/badge/${badge}`
        );
        const array = response.data.payload;
        console.log("badge ", badge);
        console.log("resultado de axios ", array);
        setFeatured(array);
      } catch (error) {
        console.log("ERROR");
        console.log(error);
      }
    }
    fetchFeatured();
  }, []);

  return (
    <Grid2
      container
      spacing={2}
      className="dotted"
      sx={{
        width: "90%",
        my: "2rem",
        mx: "auto",
        borderColor: "#10aee3",
        borderStyle: "solid",
        borderWidth: "2px",
        borderRadius: "10px",
        /* backgroundColor: "primary.main",
        backgroundImage: "url('/assets/images/iconBackground.png')",
        backgroundRepeat: "repeat-x repeat-y",
        backgroundSize: "30%", */
        px: { xs: "0.5rem", md: "3rem" },
        py: "4rem",
      }}
    >
      <Grid2 item size={{ md: 2, xs: 12 }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", hyphens: "manual", color: "primary.main" }}
        >
          {titulo}
        </Typography>
      </Grid2>
      <Grid2 item size={{ md: 10, xs: 12 }}>
        <CardCarousel handleSnack={handleSnack} featured={featured} />
      </Grid2>
    </Grid2>
  );
};

export default FeaturedProducts;
