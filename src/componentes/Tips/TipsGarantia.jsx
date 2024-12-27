import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const TipsGarantia = () => {
  return (
    <>
      <Typography variant="h6" color="primary.main">
        GARANTÍA
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
            primary="EN EL CASO DE VEHÍCULOS DE USO PARTICULAR,"
            secondary="todas las baterías cuentan
            con garantía de un año a partir del día de la compra."
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
            primary="En el caso de
            vehículos utilitarios o taxis, remises, etc, y vehículos con GNC"
            secondary="el
            plazo de garantía es de 6 meses."
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
            primary="Para reclamar la garantía debe acercarse a nuestro local"
            secondary="con el
            comprobante de compra y el comprobante de garantía (en el caso de las
            marcasa Moura y Mateo)"
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
            primary="La garantía NO cubre:"
          />
        </ListItem>
        <ListItem>
          <List dense component="div" disablePadding>
            <ListItem sx={{ pl: 4 }}>
              <ListItemIcon>
                <KeyboardArrowRightIcon />
              </ListItemIcon>
              <ListItemText secondary="rotura de bornes o del cajón de la batería;" />
            </ListItem>
            <ListItem sx={{ pl: 4 }}>
              <ListItemIcon>
                <KeyboardArrowRightIcon />
              </ListItemIcon>
              <ListItemText secondary="sobrecarga del alternador; " />
            </ListItem>
            <ListItem sx={{ pl: 4 }}>
              <ListItemIcon>
                <KeyboardArrowRightIcon />
              </ListItemIcon>
              <ListItemText secondary="explosión del acumulador; " />
            </ListItem>
            <ListItem sx={{ pl: 4 }}>
              <ListItemIcon>
                <KeyboardArrowRightIcon />
              </ListItemIcon>
              <ListItemText
                primary="mal funcionamiento
            por falta de agua."
              />
            </ListItem>
          </List>
        </ListItem>
      </List>
    </>
  );
};

export default TipsGarantia;
