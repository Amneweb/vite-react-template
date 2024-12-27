import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const TipsPrecio = () => {
  return (
    <>
      {" "}
      <Typography variant="h6" color="primary.main">
        PRECIO
      </Typography>
      <List dense>
        <ListItem>
          <ListItemIcon>
            <ChevronRightIcon />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{
              fontWeight: "bold",
              color: "white",
            }}
            primary="El precio indicado es dejando la batería usada."
            secondary="Caso contrario se
    cobrará una monto extra, que será reintegrado contraentrega de la
    batería usada."
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
            primary="El precio no incluye el costo de envío,"
            secondary="que variará dependiendo de la
    zona de entrega y la urgencia de la compra."
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
            primary="El precio no incluye los posibles recargos financieros por pagos en cuotas o los"
            secondary="establecidos
    por Mercado Pago en caso de elegirse el pago por esa plataforma."
          />
        </ListItem>
      </List>
    </>
  );
};

export default TipsPrecio;
