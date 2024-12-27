import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const TipsPagos = () => {
  return (
    <>
      <Typography variant="h6" color="primary.main">
        FORMAS DE PAGO
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <ChevronRightIcon />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{
              fontWeight: "bold",
              color: "white",
            }}
            primary="EFECTIVO"
            secondary="abonando en nuestro local, o en domicilio si es que entregamos la batería en domicilio."
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <ChevronRightIcon />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{
              fontWeight: "bold",
              color: "white",
            }}
            primary="TRANSFERENCIA"
            secondary="en nuestro local o en domicilio"
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <ChevronRightIcon />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{
              fontWeight: "bold",
              color: "white",
            }}
            primary="TARJETA"
            secondary="en nuestro local al retirar la batería. En un pago o en 3 cuotas con recargo"
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <ChevronRightIcon />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{
              fontWeight: "bold",
              color: "white",
            }}
            primary="MERCADO PAGO"
            secondary="en cualquiera de los medios de pago que ofrece la plataforma"
          />
        </ListItem>
      </List>
    </>
  );
};

export default TipsPagos;
