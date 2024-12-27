import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import { Box, Typography } from "@mui/material";
import React from "react";

const Recordatorio = () => {
  return (
    <Box
      sx={{
        backgroundColor: "background.paper",
        borderRadius: "5px",
        padding: "2rem",
        flex: 1,
        backgroundImage: "url(/assets/images/bateriaVieja.png)",
        backgroundPosition: "right bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "40%",
      }}
    >
      <WarningRoundedIcon fontSize="large" color="warning" />
      <Typography variant="body2" sx={{ pr: "40%" }}>
        Recordá que el precio siempre es dejando tu batería vieja, de lo
        contrario se te cobrará un recargo.
      </Typography>
    </Box>
  );
};

export default Recordatorio;
