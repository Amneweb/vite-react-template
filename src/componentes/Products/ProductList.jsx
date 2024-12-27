import { Box, Grid2 } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import base_api_url from "../../utlis/ruta";
const ProductList = (props) => {
  const { filtro, valor, handleSnack, visibles } = props;
  console.log("condiciones en product list ", visibles);
  const [featured, setFeatured] = useState([]);
  useEffect(() => {
    async function fetchFeatured(filtro, valor) {
      let response;
      try {
        if (!filtro || !valor) {
          response = await axios.get(`${base_api_url}/api/baterias/`);
        } else {
          response = await axios.get(
            `${base_api_url}/api/baterias/${filtro}/${valor}`
          );
        }

        const array = response.data.payload;
        setFeatured(array);
      } catch (error) {
        console.log("ERROR");
        console.log(error);
      }
    }
    fetchFeatured(filtro, valor);
  }, [valor]);

  const condicionales = (bateria) => {
    if (!visibles) {
      return true;
    }
    const condMarca = visibles[0] === bateria.marca || !visibles[0];
    console.log("cond marca ", condMarca);
    const condCategoria =
      (bateria.categoria && bateria.categoria.includes(visibles[1])) ||
      !visibles[1];
    console.log("cond categoria ", condCategoria);
    const rangos = visibles[2] && visibles[2].split(" - ");
    const condAmperaje =
      (bateria.amperaje &&
        rangos &&
        bateria.amperaje >= rangos[0] &&
        bateria.amperaje <= rangos[1]) ||
      !visibles[2];
    console.log("cond amperaje ", condAmperaje);
    return condMarca && condAmperaje && condCategoria;
  };

  return (
    <Box>
      <Grid2 container spacing={{ xs: 1, md: 4 }} mx={{ xs: 1, md: 5 }}>
        {featured &&
          featured.map((bateria) => {
            if (condicionales(bateria))
              return (
                <Grid2
                  item
                  size={{ xs: 6, sm: 6, md: 4, lg: 3, xl: 2 }}
                  key={bateria._id}
                  sx={{ display: "flex" }}
                >
                  <ProductCard handleSnack={handleSnack} bateria={bateria} />
                </Grid2>
              );
          })}
      </Grid2>
    </Box>
  );
};

export default ProductList;
