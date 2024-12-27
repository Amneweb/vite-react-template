import { Box, Stack, Typography } from "@mui/material";
import { formateado } from "../../utlis/format";
import ApplicationList from "../Categorias/ApplicationList";

const DatosDisplay = ({ bateria }) => {
  return (
    <>
      <Typography
        variant="h4"
        sx={{ color: "primary.main", fontWeight: "bold" }}
      >
        {formateado.format(bateria.precio)}
      </Typography>

      <Stack sx={{ width: 1 }} spacing={2}>
        <Box sx={{ display: "flex" }}>
          <Typography variant="body2" sx={{ color: "text.secondary", flex: 1 }}>
            Código SKU:
          </Typography>
          <Typography variant="body2" sx={{ flex: 2 }}>
            {bateria.sku}
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Typography variant="body2" sx={{ color: "text.secondary", flex: 1 }}>
            Stock:
          </Typography>
          <Typography variant="body2" sx={{ flex: 2 }}>
            {bateria.stock}
          </Typography>
        </Box>

        <Box sx={{ display: "flex" }}>
          <Typography variant="body2" sx={{ color: "text.secondary", flex: 1 }}>
            Amperaje:
          </Typography>

          <Typography variant="body2" sx={{ flex: 2 }}>
            12x{bateria.amperaje}
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Typography variant="body2" sx={{ color: "text.secondary", flex: 1 }}>
            Categoría/s:
          </Typography>
          <Typography variant="body2" sx={{ flex: 2 }}>
            {bateria.categoria &&
              bateria.categoria.length > 0 &&
              bateria.categoria.map((category) => category).join(", ")}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="body2" sx={{ color: "text.secondary", flex: 1 }}>
            Aplicaciones:
          </Typography>

          <ApplicationList application={bateria.aplicaciones} />
        </Box>
      </Stack>
    </>
  );
};

export default DatosDisplay;
