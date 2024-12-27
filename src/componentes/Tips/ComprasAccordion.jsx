import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import BatteryCharging20Icon from "@mui/icons-material/BatteryCharging20";
import BatteryCharging60Icon from "@mui/icons-material/BatteryCharging60";
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PaymentsIcon from "@mui/icons-material/Payments";
import {
  Alert,
  Avatar,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState } from "react";

export default function ComprasAccordion() {
  const [expanded, setExpanded] = useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <List sx={{ width: "100%", bgcolor: "transparent" }}>
            <ListItem>
              <ListItemAvatar>
                <Avatar
                  variant="rounded"
                  sx={{ backgroundColor: "primary.main" }}
                >
                  1
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Seleccionar el/los producto/s" />
            </ListItem>
          </List>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" sx={{ mb: "1rem" }}>
            Si no sabés qué batería lleva tu auto, lo mejor es usar nuestro{" "}
            <Link href="/buscador" underline="hover">
              buscador
            </Link>
            . Ingresá la marca, modelo, versión y año de tu vehículo y te van a
            aparecer los modelos que sirven para tu auto, con toda la
            información de cada uno.
          </Typography>
          <Typography variant="body2" sx={{ mb: "1rem" }}>
            Si sabés qué tipo de batería estás buscando, recorré el{" "}
            <Link href="/productos" underline="hover">
              catálogo
            </Link>{" "}
            completo o filtrando por marca, cantidad de placas, amperaje o
            categoría hasta encontrar el producto.
          </Typography>
          <Alert severity="warning">
            Si no encontrás el producto no dejes de contactarte con nosotros
            porque es muy probable que podamos conseguir el modelo que buscás.
          </Alert>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <List sx={{ width: "100%", bgcolor: "transparent" }}>
            <ListItem>
              <ListItemAvatar>
                <Avatar
                  variant="rounded"
                  sx={{ backgroundColor: "primary.main" }}
                >
                  2
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Armar el carrito" />
            </ListItem>
          </List>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" sx={{ mb: "1rem" }}>
            Una vez encontrada la batería, hacé click en el botón comprar (podés
            modificar la cantidad con los botones +/-) para que la batería se
            agregue al carrito de compras. Una vez elegidos todos los productos,
            podés ver el carrito desde el ícono <ShoppingBasketIcon /> en la
            esquina superior derecha de la pantalla, desde cualquier lugar del
            sitio.
          </Typography>
          <Typography variant="body2" sx={{ mb: "1rem" }}>
            En la vista del carrito vas a encontrar las baterías elegidas y el
            total a pagar. Podes cambiar cantidades e incluso quitar baterias.
            Luego seleccioná iniciar compra
          </Typography>
          <Alert severity="warning" sx={{ mb: "1rem" }}>
            Hasta este paso podrás modificar el carrito, una vez iniciada la
            compra ya no podrás.
          </Alert>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <List sx={{ width: "100%", bgcolor: "transparent" }}>
            <ListItem>
              <ListItemAvatar>
                <Avatar
                  variant="rounded"
                  sx={{ backgroundColor: "primary.main" }}
                >
                  3
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Iniciar compra" />
            </ListItem>
          </List>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" sx={{ mb: "1rem" }}>
            Con el carrito ya definido, hacé click en el botón iniciar compra.
            Una vez iniciada, el proceso incluye 3 pasos:
          </Typography>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <BatteryCharging20Icon />
                </ListItemIcon>
                <ListItemText
                  primary="Confirmar el carrito"
                  secondary="Sólo para que te asegures de que lo que elegiste y las cantidades están correctas"
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <BatteryCharging60Icon />
                </ListItemIcon>
                <ListItemText
                  primary="Ingresar datos"
                  secondary="Te pediremos los datos mínimos para poder contactarnos con vos e informarte del estado de tu compra."
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <BatteryChargingFullIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Seleccionar método de pago"
                  secondary="Podrás elegir entre transferencia, efectivo en nuestro local, o tarjeta a través de la plataforma de Mercado Pago"
                />
              </ListItemButton>
            </ListItem>
          </List>

          <Alert severity="error">
            Los datos ingresados sólo serán usados por nosotros a los efectos de
            efectivizar la compra y entrega del producto. NO SERÁN COMPARTIDOS
            CON NADIE AJENO A NUESTRA EMPRESA.
          </Alert>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <List sx={{ width: "100%", bgcolor: "transparent" }}>
            <ListItem>
              <ListItemAvatar>
                <Avatar
                  variant="rounded"
                  sx={{ backgroundColor: "primary.main" }}
                >
                  4
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Pagar" />
            </ListItem>
          </List>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" sx={{ mb: "1rem" }}>
            Una vez elegido el método de pago, se te enviará un correo con los
            datos de tu compra e información según el método de pago
            seleccionado. MERCADO PAGO: el sistema te dirigirá a la plataforma y
            una vez realizado el pago, te llegará un segundo email con la
            confirmación del pago.
          </Typography>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CreditCardIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Tarjeta de crédito a través de Mercado Pago"
                  secondary="el sistema te dirigirá a la plataforma y una vez realizado el pago, te llegará un segundo email con la confirmación del pago."
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AccountBalanceIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Transferencia"
                  secondary="En el email te llegará toda la información para realizar la transferencia. Tendrás que enviarnos el comprobante una vez que la realices"
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PaymentsIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Efectivo"
                  secondary="Tendrás que contactarnos por email o whatsapp para coordinar la entrega y el pago"
                />
              </ListItemButton>
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel5-content"
          id="panel5-header"
        >
          <List sx={{ width: "100%", bgcolor: "transparent" }}>
            <ListItem>
              <ListItemAvatar>
                <Avatar
                  variant="rounded"
                  sx={{ backgroundColor: "primary.main" }}
                >
                  5
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="¡Listo!!!! 🥳" />
            </ListItem>
          </List>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" sx={{ mb: "1rem" }}>
            Te esperamos en nuestro local para entregarte o colocar la batería
            en tu auto. (Recordá que este servicio es sin cargo :) )
          </Typography>
          <Typography variant="body2" sx={{ mb: "1rem" }}>
            Si necesitás que vayamos a instalarla a domicilio, contactate con
            nosotros. Recordá que este servicio es sólo para clientes ubicados
            en un radio de 10 cuadras a la redonda de nuestro local.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
