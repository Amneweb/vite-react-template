import { Box, Grid2, Typography } from "@mui/material";
import ComprasAccordion from "./ComprasAccordion";

const ComoComprar = () => {
  return (
    <Box>
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          mb: "4rem",
          mt: "6rem",
          color: "primary.main",
          fontWeight: "bold",
        }}
      >
        Cómo comprar
      </Typography>
      <Grid2 container spacing={2}>
        <Grid2 item size={{ xs: 12, md: 6 }}>
          <ComprasAccordion />
        </Grid2>
        <Grid2
          item
          size={{ xs: 12, md: 6 }}
          sx={{
            backgroundImage: "url(/assets/images/mateoEnClark.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "top left",
            height: { xs: "400px", md: "auto" },
          }}
        ></Grid2>
      </Grid2>
    </Box>
  );
};

export default ComoComprar;
