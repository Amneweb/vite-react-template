import { Box, Grid2 } from "@mui/material";
import BatterySearchComponent from "../Buscador/BatterySearchComponent";
import HeroBackground from "./HeroBackground";
import HeroSlider from "./HeroSlider";

const HeroContainer = ({ onClick }) => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#00020f",
          height: { xs: "auto", md: "70vh" },
          minHeight: "650px",
        }}
      >
        <Grid2 container sx={{ position: "relative" }} spacing={2}>
          <HeroBackground />

          <Grid2
            item
            size={12}
            zIndex={10}
            mx={4}
            sx={{ width: "90%", margin: "auto" }}
          >
            <HeroSlider />
          </Grid2>
        </Grid2>
      </Box>

      <BatterySearchComponent onClick={onClick} />
    </>
  );
};

export default HeroContainer;
