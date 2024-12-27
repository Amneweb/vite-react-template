import { Box, Chip, Typography } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import VerticalShadesClosedIcon from "@mui/icons-material/VerticalShadesClosed";

const Leyenda = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        flex: 1,
        mx: "auto",
        gap: "6px",
        my: "2rem",
      }}
    >
      <Typography variant="body2" color="primary.main">
        Leyenda:{" "}
      </Typography>
      <Chip
        sx={{ borderRadius: "5px" }}
        icon={<BookmarkIcon />}
        label="MARCA"
        size="small"
      />
      <Chip
        sx={{ borderRadius: "5px" }}
        icon={<VerticalShadesClosedIcon />}
        label="CANTIDAD DE PLACAS"
        size="small"
      />
      <Chip
        sx={{ borderRadius: "5px" }}
        icon={<ElectricBoltIcon />}
        label="AMPERAJE COMERCIAL"
        size="small"
      />
    </Box>
  );
};

export default Leyenda;
