import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { formateado } from "../../utlis/format";
import { Avatar, Button, Grid2, Link } from "@mui/material";
import base_api_url from "../../utlis/ruta";
import { Link as RouterLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Counter from "../Cart/Counter";

export default function ProductLongCard({ bateria, handleSnack }) {
  const { carrito, alCarrito, verificarElemento } = useContext(CartContext);
  const [item, setItem] = useState();
  console.log("lo que llega a product long card ", bateria);

  useEffect(() => {
    const enStorage = verificarElemento(bateria.sku);
    enStorage && setItem(enStorage);
  }, [carrito]);

  return (
    bateria && (
      <Grid2
        container
        spacing={2}
        sx={{
          justifyContent: "space-between",

          alignItems: "center",
        }}
      >
        <Grid2
          className="image_container"
          item
          size={{ xs: 12, md: 3, maxHeight: "300px" }}
        >
          <Avatar
            alt={bateria.nombre}
            src={
              bateria.imagen && bateria.imagen.length > 0
                ? `${base_api_url}/uploads/images/${bateria.imagen[0]}`
                : `${base_api_url}/uploads/images/noPhotoTransp.png`
            }
            sx={{ width: 100, height: 100 }}
          />
        </Grid2>

        <Grid2 item size={{ xs: 12, md: 4 }}>
          <Link
            underline="hover"
            component={RouterLink}
            to={`/product/${bateria.sku}`}
            variant="body1"
            sx={{ color: "text.secondary", textWrap: "wrap" }}
          >
            {bateria.nombre}
          </Link>
          <Typography variant="body2">{bateria.sku}</Typography>
        </Grid2>

        <Grid2 item size={{ xs: 12, md: 3 }}>
          <Typography variant="body1" sx={{ color: "primary.main" }}>
            {formateado.format(bateria.precio)}
          </Typography>
        </Grid2>

        <Grid2 item size={{ xs: 12, md: 2 }}>
          {!item ? (
            <Button
              variant="contained"
              sx={{ width: "100%" }}
              disableElevation
              color="gris.main"
              startIcon={<ShoppingCartIcon />}
              onClick={() => {
                alCarrito(
                  {
                    sku: bateria.sku,
                    stock: bateria.stock,
                    precio: bateria.precio,
                  },
                  1
                );
                handleSnack();
              }}
            >
              Comprar
            </Button>
          ) : (
            <Counter qty={item.contador} item={item} />
          )}
        </Grid2>
      </Grid2>
    )
  );
}
