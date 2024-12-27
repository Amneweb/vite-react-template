import { Box, Grid2, Typography } from "@mui/material";
import IconedAvatar from "./IconedAvatar";

const BannerCategorias = ({ arrayCategorias }) => {
  return (
    <Box sx={{ pt: "8rem" }}>
      <Typography
        variant="h3"
        sx={{
          mb: "3rem",
          textAlign: "center",
          fontWeight: "bold",
          color: "white",
        }}
      >
        Categorías
      </Typography>
      <Grid2
        container
        spacing={4}
        minHeight={150}
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        backgroundColor="#1d1f25"
        sx={{ py: "4rem", mb: "6rem" }}
      >
        {arrayCategorias.map((cate) => (
          <Grid2
            item
            key={cate._id}
            lg={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <IconedAvatar cate={cate.category} />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default BannerCategorias;
