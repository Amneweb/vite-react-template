import { Grid2, Typography } from "@mui/material";

import TipsGarantia from "../Tips/TipsGarantia";
import TipsPagos from "../Tips/TipsPagos";
import TipsPrecio from "../Tips/TipsPrecio";
const InfoGeneral = () => {
  return (
    <>
      <Grid2
        container
        sx={{ color: "rgba(255, 255, 255, 0.7)", width: 0.9, margin: "auto" }}
      >
        <Grid2 item size={{ xs: 12, md: 6 }}>
          <TipsPrecio />
          <TipsPagos />
        </Grid2>
        <Grid2 item size={{ xs: 12, md: 6 }}>
          <TipsGarantia />
        </Grid2>
      </Grid2>
    </>
  );
};

export default InfoGeneral;
