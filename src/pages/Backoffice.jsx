import { Box, Button, Link, Typography } from "@mui/material";
import axios from "axios";
import base_api_url from "../utlis/ruta";
import { useState } from "react";
import { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
{
  /* <Timeline /> */
}
const Backoffice = () => {
  const [downloadUrl, setDownloadUrl] = useState("");
  useEffect(() => {
    async function bajarDatos() {
      try {
        const response = await axios.get(
          `${base_api_url}/api/baterias/bulk/download`
        );
        const datos = response.data.payload;
        console.log("url", datos);
        setDownloadUrl(datos);
      } catch (error) {
        console.log("ERROR");
        console.log(error);
      }
    }
    bajarDatos();
  }, []);
  return (
    <Box sx={{ height: "300px", mt: "100px", width: 0.9, mx: "auto" }}>
      <Typography>Bajar archivo</Typography>
      <Link underline="hover" component={RouterLink} to={"/home"}>
        Ir a inicio
      </Link>
      <Button variant="contained" component={RouterLink} to={downloadUrl}>
        Bajar archivo
      </Button>
      <Typography variant="h3">Guia:</Typography>
      <Typography variant="body1">
        Con bulk upload se cargan registros que no estaban en la base de datos
        (si se quieren cargar registros que ya estaban, el sistema
        automaticamente los saltea)
      </Typography>
      <Typography variant="body1">
        Con bajar archivo (aca arriba) se baja un csv con todas las baterias y
        TODOS sus campos. Falta configurar que el archivo baje solo y que se
        pueda borrar despues. Y falta configurar que se pueda filtrar por
        categoria, etc.
      </Typography>
      <Typography variant="body1">
        Una vez descargado el archivo, se modifican los campos necesarios (ojo,
        no modificar las imagenes) y se usa el bulk update para subir el archivo
        modificado. Se pueden borrar columnas del archivo, para solo modificar
        los campos necesarios.
      </Typography>
    </Box>
  );
};

export default Backoffice;
