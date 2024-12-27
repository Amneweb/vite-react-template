import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import base_api_url from "../../utlis/ruta";
import { formateado } from "../../utlis/format";
import { Button, CardActionArea, IconButton, Snackbar } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Counter from "../Cart/Counter";
export default function ProductSmallCard({ bateria, handleSnack }) {
  const { carrito, alCarrito, verificarElemento } = useContext(CartContext);
  const [item, setItem] = useState();

  useEffect(() => {
    const enStorage = verificarElemento(bateria.sku);
    enStorage && setItem(enStorage);
  }, [carrito]);

  return (
    bateria && (
      <Card
        variant="outlined"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          borderColor: "rgba(255,255,255,0.2)",
          alignSelf: "stretch",
          mx: "0.3rem",
        }}
      >
        <CardActionArea
          component={Link}
          to={`/product/${bateria.sku}`}
          viewTransition
        >
          <CardMedia
            sx={{ height: "auto" }}
            className="battery-gradient"
            component="img"
            image={
              bateria.imagen && bateria.imagen.length > 0
                ? `${base_api_url}/uploads/images/${bateria.imagen[0]}`
                : `${base_api_url}/uploads/images/noPhotoTransp.png`
            }
            alt={bateria.nombre}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {bateria.sku}
            </Typography>
            <Typography
              variant="body2"
              component="p"
              sx={{ color: "text.secondary", textWrap: "wrap" }}
            >
              {bateria.nombre}
            </Typography>
            <Typography variant="body1" sx={{ color: "primary.main" }}>
              {formateado.format(bateria.precio)}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
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
        </CardActions>
      </Card>
    )
  );
}
