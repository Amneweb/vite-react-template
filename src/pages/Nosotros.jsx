import axios from "axios";
import Timeline from "../componentes/Nosotros/Timeline";
import TipCard from "../componentes/Tips/TipCard";
import base_api_url from "../utlis/ruta";
import { useState } from "react";
import { useEffect } from "react";
{
  /* <Timeline /> */
}
const Nosotros = () => {
  const [bateria, setBateria] = useState({});
  useEffect(() => {
    async function datosBateria() {
      try {
        const response = await axios.get(
          `${base_api_url}/api/baterias/bulk/download`
        );
        const datos = response.data.payload;

        setBateria(datos);
      } catch (error) {
        console.log("ERROR");
        console.log(error);
      }
    }
    datosBateria();
  }, []);
  return (
    <>
      <Timeline />
      <TipCard />
    </>
  );
};

export default Nosotros;
