import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CottageIcon from "@mui/icons-material/Cottage";
import StoreIcon from "@mui/icons-material/Store";
import BuildIcon from "@mui/icons-material/Build";
export default function HeroAvatarList() {
  return (
    <List sx={{ width: "100%", bgcolor: "transparent" }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar variant="rounded" sx={{ backgroundColor: "primary.main" }}>
            <DirectionsCarIcon sx={{ color: "white" }} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Baterías para todo tipo de vehículo"
          secondary="Livianos, pesados, embarcaciones"
        />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar variant="rounded" sx={{ backgroundColor: "primary.main" }}>
            <LocalShippingIcon sx={{ color: "white" }} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Ventas al por mayor"
          secondary="Amplio stock y reparto propio"
        />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar variant="rounded" sx={{ backgroundColor: "primary.main" }}>
            <BuildIcon sx={{ color: "white" }} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Ventas al por menor"
          secondary="Colocación y servicio de post-venta"
        />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar variant="rounded" sx={{ backgroundColor: "primary.main" }}>
            <CottageIcon sx={{ color: "white" }} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Entrega y colocación a domicilio"
          secondary="En un rango de 10 cuadras a la redonda"
        />
      </ListItem>
    </List>
  );
}
