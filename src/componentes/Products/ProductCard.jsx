import {
  Avatar,
  CardHeader,
  Chip,
  Box,
  CardActionArea,
  styled,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import GradeIcon from "@mui/icons-material/Grade";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import VisibilityIcon from "@mui/icons-material/Visibility";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import VerticalShadesClosedIcon from "@mui/icons-material/VerticalShadesClosed";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import { CartContext } from "../../context/CartContext";
import { useContext, useEffect, useState } from "react";
import Counter from "../Cart/Counter";
import { Link } from "react-router-dom";
import { formateado } from "../../utlis/format";
import base_api_url from "../../utlis/ruta";
const StyledHeader = styled(CardHeader)({
  "& .MuiCardHeader-content": {
    "& .MuiTypography-root": {
      fontFamily: '"Barlow Condensed", sans-serif',
      fontSize: "1.4rem",
    },
  },
});
export default function ProductCard({ bateria, handleSnack }) {
  const { carrito, alCarrito, verificarElemento } = useContext(CartContext);
  const [item, setItem] = useState();

  function ChipIcon({ badge }) {
    return badge === "OFERTA" ? (
      <Chip
        size="small"
        sx={{ ml: "100%", transform: "translateX(-110%)", mt: "0.5rem" }}
        label={badge}
        icon={<LoyaltyIcon />}
        color="success"
        variant="outlined"
      />
    ) : badge === "NOVEDADES" ? (
      <Chip
        size="small"
        sx={{ ml: "100%", transform: "translateX(-110%)", mt: "0.5rem" }}
        label={badge}
        icon={<GradeIcon />}
        color="error"
        variant="outlined"
      />
    ) : (
      badge === "VENDIDOS" && (
        <Chip
          size="small"
          sx={{ ml: "100%", transform: "translateX(-110%)", mt: "0.5rem" }}
          icon={<EmojiEventsIcon />}
          label={`MÁS ${badge}`}
          color="warning"
          variant="outlined"
        />
      )
    );
  }
  useEffect(() => {
    const enStorage = verificarElemento(bateria.sku);
    enStorage && setItem(enStorage);
  }, [carrito]);

  const pathImagen = `${base_api_url}/uploads/images`;
  return (
    bateria && (
      <Card
        variant="outlined"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          borderColor: "rgba(255,255,255,0.2)",
        }}
      >
        <CardHeader
          avatar={
            <Avatar
              sx={{ width: 50, height: 50 }}
              aria-label="marca"
              alt={bateria.marca}
              src={`/assets/images/avatar${bateria.marca}.png`}
            ></Avatar>
          }
          title={bateria.nombre}
        />

        <CardActionArea component={Link} to={`/product/${bateria.sku}`}>
          {(bateria.badge && bateria.badge.length) > 0 && (
            <ChipIcon badge={bateria.badge[0]} />
          )}
          <CardMedia
            sx={{ height: "auto" }}
            className="battery-gradient"
            component="img"
            image={
              bateria.imagen && bateria.imagen.length > 0
                ? `${pathImagen}/${bateria.imagen[0]}`
                : `${pathImagen}/noPhotoTransp.png`
            }
            alt={bateria.nombre}
          />
        </CardActionArea>

        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color="primary.main"
          >
            {formateado.format(bateria.precio)}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: "3px",
            }}
          >
            <Chip
              sx={{ borderRadius: "5px" }}
              icon={<BookmarkIcon />}
              component="a"
              href={`/productos/filtro/marca/valor/${bateria.marca}`}
              clickable
              label={bateria.marca}
              size="small"
            />
            <Chip
              sx={{ borderRadius: "5px" }}
              icon={<VerticalShadesClosedIcon />}
              label={bateria.placas}
              component="a"
              href={`/productos/filtro/placas/valor/${bateria.placas}`}
              clickable
              size="small"
            />
            <Chip
              sx={{ borderRadius: "5px" }}
              icon={<ElectricBoltIcon />}
              label={`12x${bateria.amperaje}`}
              component="a"
              href={`/productos/filtro/amper/valor/${bateria.amperaje}`}
              clickable
              size="small"
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Typography variant="body2" color="primary.main">
              SKU: {bateria.sku}
            </Typography>
            <Typography variant="body2" color="primary.main">
              Stock: {bateria.stock}
            </Typography>
          </Box>
        </CardContent>
        <CardActions
          disableSpacing
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0.3rem",
          }}
        >
          <Button
            variant="outlined"
            sx={{ width: "100%" }}
            disableElevation
            href={`/product/${bateria.sku}`}
            startIcon={<VisibilityIcon />}
          >
            Ver más
          </Button>
          {!item ? (
            <Button
              sx={{ width: "100%" }}
              variant="contained"
              disableElevation
              disabled={bateria.stock === 0}
              startIcon={<ShoppingCartIcon />}
              onClick={() => {
                alCarrito(
                  {
                    sku: bateria.sku,
                    stock: bateria.stock,
                    precio: bateria.precio,
                    nombre: bateria.nombre,
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
