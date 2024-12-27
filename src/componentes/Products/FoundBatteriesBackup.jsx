import { useEffect, useState } from "react";
import axios from "axios";
import ProductLongCard from "./ProductLongCard";
import base_api_url from "../../utlis/ruta";
const FoundBatteries = ({ sku }) => {
  const [bateria, setBateria] = useState(null);
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
    datosBateria(sku);
  }, []);
  return <>{bateria && <ProductLongCard bateria={bateria} />}</>;
};

export default FoundBatteries;
