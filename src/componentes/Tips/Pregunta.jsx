import {
  Grid2,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Pregunta = () => {
  return (
    <>
      <Grid2
        container
        sx={{
          backgroundColor: "primary.main",
          pt: "2rem",
          pb: 0,
          borderTopLeftRadius: "5px",
          borderTopRightRadius: "5px",
        }}
      >
        <Grid2
          item
          size={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <img
            className="product_img"
            src={"/assets/images/pensando.png"}
            alt="persona analizando la siuación"
          />
        </Grid2>
        <Grid2
          item
          size={8}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            pr: "1rem",
          }}
        >
          <Typography variant="body1">No sé nada de baterías...</Typography>{" "}
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            ¿tengo que considerar todos los datos técnicos para elegir la
            batería de mi auto? 😲
          </Typography>
        </Grid2>
      </Grid2>

      <Accordion
        elevation="0"
        sx={{
          "&:before": { height: "0px" },
          border: `1px solid`,
          borderColor: "primary.main",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ padding: "1rem", textAlign: "justify" }}
          >
            No te asustes, no tenés que marearte con tantos datos. Una vez que
            sabés el amperaje y tenés que decidir entre varias opciones, hacé
            click acá y tené en cuenta lo siguiente:
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List dense>
            <ListItem>
              <ListItemIcon>
                <CheckCircleOutlineOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                secondary="Que las medidas sean las correctas, es decir, que la batería
      entre en el lugar que tu auto tiene para tal fin."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleOutlineOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                secondary="Que la ubicación
      del borne positivo sea la correcta (normalmente es a la derecha, pero
      algunos autos lo tienen a la izquierda)"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleOutlineOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                secondary="A igual amperaje las baterías con
      más placas tienen más duración y mejor funcionamiento que las de menos
      placas."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleOutlineOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                secondary="En este rubro, un precio mayor normalmente implica que la batería
      es mejor (siempre que compres en lugares serios ⚠️)"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleOutlineOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                secondary="Por último: si aun tenés dudas, llamanos o acercate con tu auto
      y te asesoramos"
              />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default Pregunta;
