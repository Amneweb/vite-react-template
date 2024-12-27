import { useEffect, useState } from "react";
import { createContext } from "react";
import axios from "axios";
import base_api_url from "../utlis/ruta";
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  function compareNumbers(a, b) {
    return a - b;
  }
  const [marcas, setMarcas] = useState([]);
  const [placas, setPlacas] = useState([]);
  const [amperajes, setAmperajes] = useState([]);
  const [categorias, setCategorias] = useState([]);
  useEffect(() => {
    async function traerCategorias() {
      try {
        const response = await axios.get(`${base_api_url}/api/categorias`);
        const datos = response.data.payload;
        console.log("categorias en async function en context ", datos);
        setCategorias(datos);
      } catch (error) {
        console.log("ERROR");
        console.log(error);
      }
    }
    async function traerMarcas() {
      try {
        const response = await axios.get(`${base_api_url}/api/battery-brand`);
        const datos = response.data.payload;

        setMarcas(datos);
      } catch (error) {
        console.log("ERROR");
        console.log(error);
      }
    }
    async function traerRangos() {
      try {
        const response = await axios.get(`${base_api_url}/api/amperajes`);
        const datos = response.data.payload;

        setAmperajes(datos);
      } catch (error) {
        console.log("ERROR");
        console.log(error);
      }
    }
    async function traerPlacas() {
      try {
        const response = await axios.get(`${base_api_url}/api/placas`);
        const datos = response.data.payload;

        setPlacas(datos.placas.sort(compareNumbers));
      } catch (error) {
        console.log("ERROR");
        console.log(error);
      }
    }
    traerCategorias();
    traerMarcas();
    traerRangos();
    traerPlacas();
    console.log("categorias en context ", categorias);
  }, []);

  return (
    <DataContext.Provider
      value={{
        marcas,
        categorias,
        amperajes,
        placas,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
