import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import Intros from "./Intros";
import { Box, Typography } from "@mui/material";

export default function IntroAccordion({ cate, titulo }) {
  return (
    <Accordion elevation={0} sx={{ "&:before": { height: "0px" } }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: 1,
            alignItems: "center",
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{ color: "primary.main" }}
          >
            productos › {titulo}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", mr: "0.5rem" }}
          >
            Conocé más sobre {cate}
          </Typography>
        </Box>
      </AccordionSummary>

      <AccordionDetails>
        <Intros cate={cate} />
      </AccordionDetails>
      <AccordionActions>
        <Button>Ver más</Button>
      </AccordionActions>
    </Accordion>
  );
}
