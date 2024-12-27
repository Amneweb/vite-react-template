import { Avatar, Grid2, IconButton, Link, Typography } from "@mui/material";
import { formateado } from "../../utlis/format";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import Counter from "./Counter";
import { useEffect, useState } from "react";
import axios from "axios";
import base_api_url from "../../utlis/ruta";
import { Link as RouterLink } from "react-router-dom";
const CartItem = ({ item, remover }) => {
  console.log("item que llega al cartitem", item);
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
    <Grid2 container spacing={3}>
      <Grid2
        item
        size={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <IconButton onClick={() => remover(item)}>
          <DeleteForeverRoundedIcon sx={{ color: "primary.main" }} />
        </IconButton>
      </Grid2>
      <Grid2
        item
        size={2}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar
          alt={bateria.sku}
          src={
            bateria.imagen && bateria.imagen.length > 0
              ? `${pathImagen}/${bateria.imagen[0]}`
              : `${pathImagen}/noPhotoTransp.png`
          }
          sx={{ width: 100, height: 100 }}
        />
      </Grid2>
      <Grid2 item size={3}>
        <Link
          underline="hover"
          component={RouterLink}
          to={`/product/${bateria.sku}`}
        >
          {bateria.nombre}
        </Link>

        <Typography>SKU: {bateria.sku}</Typography>
        <Typography>Stock: {bateria.stock}</Typography>
      </Grid2>
      <Grid2
        item
        size={2}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Counter qty={item.contador} item={item} />
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

export default CartItem;
