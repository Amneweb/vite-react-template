import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useContext, useState } from "react";

import { DataContext } from "../../context/DataContext";
import { Box, Typography } from "@mui/material";

export default function DropDownFilter({
  marcaVisible,
  categoriaVisible,
  amperajeVisible,
  filtro,
}) {
  const [categoriasOpen, setCategoriasOpen] = useState(false);
  const [marcasOpen, setMarcasOpen] = useState(false);
  const [amperajesOpen, setAmperajesOpen] = useState(false);
  const [categoriasValue, setCategoriasValue] = useState("");
  const [marcasValue, setMarcasValue] = useState("");
  const [amperajesValue, setAmperajesValue] = useState("");
  const { categorias, marcas, amperajes } = useContext(DataContext);
  console.log("filtro ", filtro);
  const handleCategoriasOpen = () => {
    setCategoriasOpen(true);
  };

  const handleCategoriasClose = () => {
    setCategoriasOpen(false);
  };
  const handleMarcasOpen = () => {
    setMarcasOpen(true);
  };

  const handleMarcasClose = () => {
    setMarcasOpen(false);
  };
  const handleAmperajesOpen = () => {
    setAmperajesOpen(true);
  };

  const handleAmperajesClose = () => {
    setAmperajesOpen(false);
  };

  const categoriasOptions = categorias.map((categoria) => categoria.category);
  const marcasOptions = marcas.map((marca) => marca.nombre);
  const amperajesOptions = amperajes.map(
    (rango) => `${rango.min} - ${rango.max}`
  );

  return (
    <Box sx={{ display: "flex", gap: 1, flex: 1, alignItems: "center" }}>
      <Typography variant="body2" color="primary.main">
        Filtros:{" "}
      </Typography>
      <Autocomplete
        disabled={filtro === "categoria"}
        sx={{ flex: 1 }}
        open={categoriasOpen}
        size="small"
        value={categoriasValue}
        onChange={(event, newValue) => {
          setCategoriasValue(newValue);
          categoriaVisible(newValue);
        }}
        onOpen={handleCategoriasOpen}
        onClose={handleCategoriasClose}
        options={categoriasOptions}
        renderInput={(params) => <TextField {...params} label="Categorias" />}
      />
      <Autocomplete
        disabled={filtro === "marca"}
        sx={{ flex: 1 }}
        open={marcasOpen}
        size="small"
        value={marcasValue}
        onChange={(event, newValue) => {
          setMarcasValue(newValue);
          marcaVisible(newValue);
        }}
        onOpen={handleMarcasOpen}
        onClose={handleMarcasClose}
        options={marcasOptions}
        renderInput={(params) => <TextField {...params} label="Marca" />}
      />
      <Autocomplete
        sx={{ flex: 1 }}
        disabled={filtro === "amper"}
        open={amperajesOpen}
        size="small"
        value={amperajesValue}
        onChange={(event, newValue) => {
          setAmperajesValue(newValue);
          amperajeVisible(newValue);
        }}
        onOpen={handleAmperajesOpen}
        onClose={handleAmperajesClose}
        options={amperajesOptions}
        renderInput={(params) => <TextField {...params} label="Amperaje" />}
      />
    </Box>
  );
}
