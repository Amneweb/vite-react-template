import { Avatar, Grid2, Typography } from "@mui/material";
import { formateado } from "../../utlis/format";
import { useEffect, useState } from "react";
import axios from "axios";
import base_api_url from "../../utlis/ruta";
const FixedCartItem = ({ item }) => {
  const pathImagen = `${base_api_url}/uploads/images`;

  const [bateria, setBateria] = useState({});
  useEffect(() => {
    async function datosBateria(sku) {
      try {
        const response = await axios.get(`${base_api_url}/api/baterias/${sku}`);
        const datos = response.data.payload;

        setBateria(datos);
      } catch (error) {
        console.log("ERROR");
        console.log(error);
      }
    }
    datosBateria(item.item.sku);
  }, []);
  return (
    <Grid2 container spacing={3} justifyContent="space-between">
      <Grid2
        item
        size={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar
          alt={bateria.sku}
          src={
            bateria.imagen
              ? `${pathImagen}/${bateria.imagen[0]}`
              : `${pathImagen}/noPhotoTransp.png`
          }
          sx={{ width: 80, height: 80 }}
        />
      </Grid2>
      <Grid2 item size={3}>
        <Typography>{bateria.nombre}</Typography>
        <Typography>SKU: {bateria.sku}</Typography>
      </Grid2>
      <Grid2
        item
        size={2}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography>{item.contador}</Typography>
      </Grid2>
      <Grid2
        item
        size={2}
        display="flex"
        justifyContent="end"
        alignItems="center"
      >
        <Typography>{formateado.format(bateria.precio)}</Typography>
      </Grid2>
      <Grid2
        item
        size={2}
        display="flex"
        justifyContent="end"
        alignItems="center"
      >
        <Typography>
          {formateado.format(bateria.precio * item.contador)}
        </Typography>
      </Grid2>
    </Grid2>
  );
};

export default FixedCartItem;
