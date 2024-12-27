import { Alert, Box, Button, Grid2, Link, Typography } from "@mui/material";
import { CartContext } from "../../context/CartContext";
import { useContext, useEffect, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Counter from "../Cart/Counter";
import ImageCarousel from "./ImageCarousel";
import TablaDatos from "./TablaDatos";
import TablaMedidas from "./TablaMedidas";
import Pregunta from "../Tips/Pregunta";
import DatosDisplay from "./DatosDisplay";
import Recordatorio from "../Tips/Recordatorio";
import base_api_url from "../../utlis/ruta";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
const ProductDisplay = ({ bateria }) => {
  const [item, setItem] = useState();
  const { carrito, alCarrito, verificarElemento } = useContext(CartContext);
  const pathImagen = `${base_api_url}/uploads/images`;
  useEffect(() => {
    const enStorage = verificarElemento(bateria.sku);
    enStorage && setItem(enStorage);
  }, [carrito]);

  return (
    <Grid2 container spacing={4}>
      <Grid2 item size={{ xs: 12, md: 5 }}>
        {bateria.imagen ? (
          bateria.imagen.length <= 1 ? (
            <img
              className="product_img dotted bordered rounded"
              src={
                bateria.imagen.length === 0
                  ? `${pathImagen}/noPhotoTransp.png`
                  : `${pathImagen}/${bateria.imagen[0]}`
              }
              alt={bateria.nombre}
            />
          ) : (
            <ImageCarousel array={bateria.imagen} />
          )
        ) : (
          <img
            className="product_img dotted bordered rounded"
            src={`${pathImagen}/noPhotoTransp.png`}
            alt={bateria.nombre}
          />
        )}
      </Grid2>
      <Grid2 container size={{ xs: 12, md: 7 }}>
        <Grid2 container size={6}>
          <DatosDisplay bateria={bateria} />
        </Grid2>
        <Grid2
          size={6}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          {!item ? (
            <Button
              size="small"
              width="100%"
              variant="contained"
              disableElevation
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
                agregar(item);
              }}
            >
              Comprar
            </Button>
          ) : (
            <Box sx={{ width: 1 }}>
              <Counter qty={item.contador} item={item} />
            </Box>
          )}
          <Recordatorio />
        </Grid2>
        <Grid2 size={12}>
          {bateria.descripcion && (
            <>
              <Typography variant="h6" color="primary.main">
                Descripción
              </Typography>

              <Typography
                variant="body2"
                textAlign="justify"
                color="text.secondary"
              >
                {bateria.descripcion}
              </Typography>
            </>
          )}
        </Grid2>
        <Typography variant="h5">Medidas</Typography>
        <Grid2 container size={12} spacing={2}>
          <Grid2 item size={{ xs: 6, md: 8 }} sx={{ display: "flex" }}>
            <TablaMedidas bateria={bateria} />
          </Grid2>
          <Grid2
            className="rounded"
            item
            size={{ xs: 6, md: 4 }}
            sx={{
              backgroundImage: `url(/assets/images/medidas.jpg)`,
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              display: "flex",
            }}
          ></Grid2>
        </Grid2>
      </Grid2>
      <Grid2 item size={{ xs: 12, md: 5 }}>
        <Pregunta />
      </Grid2>
      <Grid2 item size={{ xs: 12, md: 7 }}>
        <Typography variant="h5" sx={{ mb: "2rem" }}>
          Características técnicas
        </Typography>
        <TablaDatos bateria={bateria} />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 3,
          }}
        >
          <InfoOutlinedIcon color="primary" />
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: "1rem" }}
          >
            En esta{" "}
            <Link href="/data" underline="hover">
              tabla
            </Link>{" "}
            se puede ver un listado de todas las baterías de nuestro catálogo,
            con sus características técnicas.
          </Typography>
        </Box>
      </Grid2>
    </Grid2>
  );
};

export default ProductDisplay;
