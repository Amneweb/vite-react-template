import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Pregunta = () => {
  const [expanded, setExpanded] = useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div>
      <Typography variant="body2" sx={{ display: "inline" }}>
        Soy un cliente inexperto,
      </Typography>{" "}
      <Typography
        variant="body2"
        sx={{ display: "inline", color: "primary.main" }}
      >
        ¿tengo que considerar todos los datos técnicos para elegir mi futura
        batería? 😲
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Si sos una persona que no sabe nada de baterías no te preocupes, no
        tenés que marearte con tantos datos. Para elegir tu batería, acá te
        pasamos algunos tips:
      </Typography>
      <Accordion
        elevation={0}
        sx={{ "&:before": { height: "0px" } }}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="body2">Batería de fábrica</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            La mejor manera de comprar es averiguar cuál es la batería con la
            que el auto salió de fábrica y comprar la misma (misma marca y
            mismas características). Si no encontrás exactamente la misma marca,
            comprá una marca equivalente (averiguá un poco cuáles son las
            mejores marcas en el mercado).
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        elevation={0}
        sx={{ "&:before": { height: "0px" } }}
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Manual del vehículo
        </AccordionSummary>
        <AccordionDetails>
          Si no sabés cuál fue la batería de fabrica, en el manual del vehículo
          seguramente encontrás las especificaciones. Si no tenés el manual,
          fijate cuál es la batería que el vehículo tiene colocada y, si duró
          más de 2 años, podés comprar la misma sin temor a equivocarte
          demasiado.
        </AccordionDetails>
      </Accordion>
      <Accordion
        elevation={0}
        sx={{ "&:before": { height: "0px" } }}
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Buscador online
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            También podés utilizar nuestro buscador, en el que podrás encontrar
            las baterías que tenemos para tu auto según el modelo, marca y año
            de fabricación.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Typography variant="body2">
        Ahora: ya usaste el buscador y te encontraste con varias opciones de
        similares características:
      </Typography>
      <Accordion
        elevation={0}
        sx={{ "&:before": { height: "0px" } }}
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          Medidas
        </AccordionSummary>
        <AccordionDetails>
          Fijate que las medidas sean las correctas (que la batería entre en el
          lugar que tu auto tiene para tal fin)
        </AccordionDetails>
      </Accordion>
      <Accordion
        elevation={0}
        sx={{ "&:before": { height: "0px" } }}
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel5-content"
          id="panel5-header"
        >
          Borne
        </AccordionSummary>
        <AccordionDetails>
          Fijate que la ubicación del borne positivo sea la correcta
          (normalmente es a la derecha, pero algunos autos lo tienen a la
          izquierda)
        </AccordionDetails>
      </Accordion>
      <Accordion
        elevation={0}
        sx={{ "&:before": { height: "0px" } }}
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel6-content"
          id="panel6-header"
          sx={{ borderBottom: "1px solid rgba(255,255,255,0.2)" }}
        >
          Placas
        </AccordionSummary>
        <AccordionDetails>
          A igual amperaje las baterías con más placas tienen más duración y
          mejor funcionamiento que las de menos placas.
        </AccordionDetails>
      </Accordion>
      <Accordion
        elevation={0}
        sx={{ "&:before": { height: "0px" } }}
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
      >
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel7-content"
          id="panel7-header"
        >
          Precio
        </AccordionSummary>
        <AccordionDetails>
          En este rubro, un precio mayor normalmente implica que la batería es
          mejor (siempre que compres en lugares serios, como en OCEANBAT 😉)
        </AccordionDetails>
      </Accordion>
      {/* <List dense>
        <ListItem>
          <ListItemText
            primary="Fijate que las medidas sean las correctas (que la batería
      entre en el lugar que tu auto tiene para tal fin)"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Fijate que la ubicación
      del borne positivo sea la correcta (normalmente es a la derecha, pero
      algunos autos lo tienen a la izquierda)"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="A igual amperaje las baterías con
      más placas tienen más duración y mejor funcionamiento que las de menos
      placas."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="En este rubro, un precio mayor normalmente implica que la batería
      es mejor (siempre que compres en lugares serios, como en OCEANBAT 😉)"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Por último: si aun tenés dudas, llamanos o acercate con tu auto
      y te asesoramos"
          />
        </ListItem>
      </List> */}
    </div>
  );
};

export default Pregunta;
