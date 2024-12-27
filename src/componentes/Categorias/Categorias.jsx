import { Box } from "@mui/material";
import BannerCategorias from "./BannerCategorias";
import DropDownCategorias from "./DropDownCategorias";
import { useEffect, useState } from "react";
import axios from "axios";
import base_api_url from "../../utlis/ruta";
const Categorias = () => {
  const [categorias, setCategorias] = useState([]);
  useEffect(() => {
    const getCategoryList = async () => {
      try {
        const response = await axios.get(`${base_api_url}/api/categorias/`);
        const arrayCategorias = response.data.payload;
        setCategorias(arrayCategorias);
      } catch (error) {
        console.log("ERROR");
        console.log(error);
      }
    };
    getCategoryList();
  }, []);
  return (
    <>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        {categorias && <BannerCategorias arrayCategorias={categorias} />}
      </Box>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <DropDownCategorias arrayCategorias={categorias} />
      </Box>
    </>
  );
};

export default Categorias;
