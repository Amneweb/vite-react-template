import { Avatar } from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import { Link } from "react-router-dom";

const DesktopBrands = ({ arrayMarcas }) => {
  return (
    <Grid2
      container
      spacing={4}
      minHeight={150}
      display="flex"
      justifyContent="space-evenly"
      alignItems="center"
    >
      {arrayMarcas.map((marca) => (
        <Grid2
          item
          key={marca.nombre}
          lg={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Avatar
            component={Link}
            to={`/productos/filtro/marca/valor/${marca.nombre}`}
            alt={`logo ${marca.nombre}`}
            src={`/assets/images/logo${marca.nombre}.png`}
            className="avatar"
            sx={{ width: 120, height: 120, filter: "grayscale(100%)" }}
          />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default DesktopBrands;
