import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import DirectionsBoatFilledIcon from "@mui/icons-material/DirectionsBoatFilled";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import { IconButton, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

const IconedAvatar = ({ cate }) => {
  return (
    <Tooltip
      title={cate}
      arrow
      slotProps={{
        popper: {
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, -30],
              },
            },
          ],
        },
      }}
    >
      <IconButton
        sx={{
          width: 150,
          height: 150,
          backgroundColor: "rgba(255,255,255,0.03)",
          /* backgroundColor: "primary.main" */
        }}
        component={Link}
        to={`/productos/filtro/categoria/valor/${cate}`}
      >
        {cate === "EMBARCACIONES" ? (
          <DirectionsBoatFilledIcon sx={{ fontSize: "3rem", color: "white" }} />
        ) : cate === "UTILITARIOS" ? (
          <AirportShuttleIcon sx={{ fontSize: "3rem", color: "white" }} />
        ) : cate === "LIVIANOS" ? (
          <DirectionsCarIcon sx={{ fontSize: "3rem", color: "white" }} />
        ) : cate === "MINI TRACTOR" ? (
          <AgricultureIcon sx={{ fontSize: "3rem", color: "white" }} />
        ) : (
          cate === "PESADOS" && (
            <LocalShippingIcon sx={{ fontSize: "3rem", color: "white" }} />
          )
        )}
      </IconButton>
    </Tooltip>
  );
};

export default IconedAvatar;
