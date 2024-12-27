import {
  Autocomplete,
  Box,
  TextField,
  CircularProgress,
  Button,
  Grid2,
} from "@mui/material";
import base_api_url from "../../utlis/ruta";
import { useState } from "react";
import axios from "axios";
import { RestartAlt } from "@mui/icons-material";

const BatterySearchComponent = ({ onClick, onReset }) => {
  /* --------------------------------------
funciones para el autocomplete de marcas
--------------------------------------- */
  const getBrandList = async () => {
    try {
      const response = await axios.get(`${base_api_url}/api/marcas/`);
      const arrayMarcas = response.data.payload;
      setMarcas(arrayMarcas);
    } catch (error) {
      console.log("ERROR");
      console.log(error);
    }
  };
  const handleReset = () => {
    setHabilitarModelo(true);
    setHabilitarVersion(true);
    setHabilitarAnio(true);
    setMarcas([]);
    setModelos([]);
    setVersiones([]);
    setAnios([]);
    setMarcaInputValue("");
    setModeloInputValue("");
    setVersionInputValue("");
    setAnioInputValue("");
    onReset && onReset(null);
  };

  const handleMarcasOpen = async () => {
    setMarcasOpen(true);
    setHabilitarModelo(true);
    setHabilitarVersion(true);
    setHabilitarAnio(true);
    setModeloInputValue("");
    setVersionInputValue("");
    setAnioInputValue({});
    (async () => {
      setLoading(true);
      await getBrandList();
      setLoading(false);
    })();
  };

  const handleMarcasClose = () => {
    setMarcasOpen(false);
    setMarcas([]);
  };

  /* --------------------------------------
funciones para el autocomplete de modelos
--------------------------------------- */
  const getModelList = async () => {
    try {
      const response = await axios.get(
        `${base_api_url}/api/buscador/marca/${marca.nombre}`
      );
      const array = response.data.payload;
      setModelos(array);
    } catch (error) {
      console.log("ERROR");
      console.log(error);
    }
  };

  const handleModelosOpen = async () => {
    setModelosOpen(true);
    setHabilitarVersion(true);
    setHabilitarAnio(true);
    setVersionInputValue("");
    setAnioInputValue("");
    (async () => {
      setLoading(true);
      await getModelList();
      setLoading(false);
    })();
  };

  const handleModelosClose = () => {
    setModelosOpen(false);
    setModelos([]);
  };

  /* --------------------------------------
funciones para el autocomplete de versiones
--------------------------------------- */
  const getVersionList = async () => {
    try {
      const response = await axios.get(
        `${base_api_url}/api/buscador/marca/${marca.nombre}/modelo/${modelo}`
      );
      const array = response.data.payload;
      setVersiones(array);
    } catch (error) {
      console.log("ERROR");
      console.log(error);
    }
  };

  const handleVersionesOpen = async () => {
    setVersionesOpen(true);
    setHabilitarAnio(true);
    setAnioInputValue("");
    (async () => {
      setLoading(true);
      await getVersionList();
      setLoading(false);
    })();
  };

  const handleVersionesClose = () => {
    setVersionesOpen(false);
    setVersiones([]);
  };

  /* --------------------------------------
funciones para el autocomplete de anios
--------------------------------------- */
  const getAnioList = async () => {
    try {
      const response = await axios.get(
        `${base_api_url}/api/buscador/marca/${marca.nombre}/modelo/${modelo}/version/${version}`
      );
      const array = response.data.payload;
      setAnios(array);
    } catch (error) {
      console.log("ERROR");
      console.log(error);
    }
  };

  const handleAniosOpen = async () => {
    setAniosOpen(true);
    (async () => {
      setLoading(true);
      await getAnioList();
      setLoading(false);
    })();
  };

  const handleAniosClose = () => {
    setAniosOpen(false);
    setAnios([]);
  };

  const handleClick = () => {};
  /* --------------------------------------
ESTADOS DE LAS OPCIONES DROPDOWN
--------------------------------------- */
  const [marcasOpen, setMarcasOpen] = useState(false);
  const [modelosOpen, setModelosOpen] = useState(false);
  const [versionesOpen, setVersionesOpen] = useState(false);
  const [aniosOpen, setAniosOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [marcas, setMarcas] = useState([]);
  const [modelos, setModelos] = useState([]);
  const [versiones, setVersiones] = useState([]);
  const [anios, setAnios] = useState([]);
  const [modeloInputValue, setModeloInputValue] = useState("");
  const [versionInputValue, setVersionInputValue] = useState("");
  const [anioInputValue, setAnioInputValue] = useState("");
  const [marcaInputValue, setMarcaInputValue] = useState("");
  /* --------------------------------------
ESTADOS DE LOS VALORES SELECCIONADOS
--------------------------------------- */
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [version, setVersion] = useState("");
  const [anio, setAnio] = useState({});

  /* --------------------------------------
ESTADOS PARA HABILITAR LOS DROPDOWNS.
--------------------------------------- */
  /*el estado es al reves que la logica. Por ej. i habilitarModelo es true, el input estara deshabilitado*/
  const [habilitarModelo, setHabilitarModelo] = useState(true);
  const [habilitarVersion, setHabilitarVersion] = useState(true);
  const [habilitarAnio, setHabilitarAnio] = useState(true);
  const [habilitarBoton, setHabilitarBoton] = useState(true);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          /* height: "100%", */
          justifyContent: "center",
          gap: "1rem",
          top: { xs: 0, md: "-30px" },
          padding: "3rem 2rem",
          borderColor: "#10aee3",
          borderStyle: "solid",
          borderWidth: "2px",
          borderRadius: "10px",
          width: "90%",
          margin: "auto",
          backgroundColor: "#00020f",
          position: "relative",
        }}
      >
        {/*---marcas---*/}
        <Autocomplete
          onChange={(event, newValue) => {
            setMarca(newValue);
            setHabilitarModelo(false);
            setMarcaInputValue(newValue.nombre);
          }}
          open={marcasOpen}
          onOpen={handleMarcasOpen}
          onClose={handleMarcasClose}
          isOptionEqualToValue={(option, value) =>
            option.nombre === value.nombre
          }
          getOptionLabel={(option) => option.nombre}
          options={marcas}
          value={marcas[0]}
          inputValue={marcaInputValue}
          loading={loading}
          sx={{ flex: 1 }}
          disablePortal
          renderInput={(params) => (
            <TextField
              {...params}
              label="Marcas"
              variant="filled"
              slotProps={{
                input: {
                  ...params.InputProps,
                  endAdornment: (
                    <>
                      {loading ? (
                        <CircularProgress color="inherit" size={20} />
                      ) : null}
                      {params.InputProps.endAdornment}
                    </>
                  ),
                },
              }}
            />
          )}
        />
        {/*---modelos---*/}
        <Autocomplete
          disabled={habilitarModelo}
          value={modelo[0]}
          inputValue={modeloInputValue}
          onChange={(event, newValue) => {
            setModelo(newValue);
            setHabilitarVersion(false);
            setModeloInputValue(newValue);
          }}
          open={modelosOpen}
          onOpen={handleModelosOpen}
          onClose={handleModelosClose}
          isOptionEqualToValue={(option, value) => option === value}
          options={modelos}
          loading={loading}
          sx={{ flex: 1 }}
          disablePortal
          renderInput={(params) => (
            <TextField
              {...params}
              label="Modelos"
              variant="filled"
              slotProps={{
                input: {
                  ...params.InputProps,
                  endAdornment: (
                    <>
                      {loading ? (
                        <CircularProgress color="inherit" size={20} />
                      ) : null}
                      {params.InputProps.endAdornment}
                    </>
                  ),
                },
              }}
            />
          )}
        />
        {/*---versiones---*/}
        <Autocomplete
          disabled={habilitarVersion}
          value={""}
          inputValue={versionInputValue}
          onChange={(event, newValue) => {
            setVersion(newValue);
            setHabilitarAnio(false);
            setVersionInputValue(newValue);
          }}
          open={versionesOpen}
          onOpen={handleVersionesOpen}
          onClose={handleVersionesClose}
          isOptionEqualToValue={(option, value) => option === value}
          options={versiones}
          loading={loading}
          sx={{ flex: 1 }}
          disablePortal
          renderInput={(params) => (
            <TextField
              {...params}
              label="Versiones"
              variant="filled"
              slotProps={{
                input: {
                  ...params.InputProps,
                  endAdornment: (
                    <>
                      {loading ? (
                        <CircularProgress color="inherit" size={20} />
                      ) : null}
                      {params.InputProps.endAdornment}
                    </>
                  ),
                },
              }}
            />
          )}
        />
        {/*---anios---*/}
        <Autocomplete
          disabled={habilitarAnio}
          value={anios[0]}
          inputValue={anioInputValue}
          onChange={(event, newValue) => {
            setAnio(newValue);
            setHabilitarAnio(false);
            setAnioInputValue(`${newValue.anio_inicio} - ${newValue.anio_fin}`);
            setHabilitarBoton(false);
          }}
          open={aniosOpen}
          onOpen={handleAniosOpen}
          onClose={handleAniosClose}
          isOptionEqualToValue={(option, value) => option === value}
          options={anios}
          getOptionLabel={(option) =>
            `${option.anio_inicio} - ${option.anio_fin}`
          }
          loading={loading}
          sx={{ flex: 1 }}
          disablePortal
          renderInput={(params) => (
            <TextField
              {...params}
              label="Años"
              variant="filled"
              slotProps={{
                input: {
                  ...params.InputProps,
                  endAdornment: (
                    <>
                      {loading ? (
                        <CircularProgress color="inherit" size={20} />
                      ) : null}
                      {params.InputProps.endAdornment}
                    </>
                  ),
                },
              }}
            />
          )}
        />
        <Grid2 container spacing="1rem" sx={{ flex: 1 }}>
          <Grid2 item size={8}>
            <Button
              disabled={habilitarBoton}
              variant="contained"
              sx={{ width: "100%", height: "100%" }}
              onClick={() =>
                onClick({
                  marca: marca,
                  version: version,
                  anio: anio,
                  modelo: modelo,
                })
              }
            >
              Buscar
            </Button>
          </Grid2>
          <Grid2 item alignItems="stretch" size={4}>
            <Button
              variant="contained"
              disabled={habilitarModelo}
              onClick={() => handleReset()}
              aria-label="reset"
              disableElevation
              sx={{ width: "100%", height: "100%" }}
            >
              <RestartAlt />
            </Button>
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
};

export default BatterySearchComponent;
