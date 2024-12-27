import Dialog from "@mui/material/Dialog";

import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import {
  Alert,
  Box,
  Button,
  DialogActions,
  IconButton,
  Slide,
  Typography,
} from "@mui/material";

import DatosAuto from "./DatosAuto";
import CloseIcon from "@mui/icons-material/Close";

import FoundBatteries from "../Products/FoundBatteries";
import { forwardRef } from "react";
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Resultados(props) {
  const { onClose, selectedValue, open, arrayBaterias } = props;
  console.log("array baterias en resultados", arrayBaterias);

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      fullWidth
      maxWidth="md"
      TransitionComponent={Transition}
      sx={{
        zIndex: 2000,
        /*background: "#00020f",
        "& .MuiPaper-root": {
          background: "#1d1f25",
        },  */
      }}
    >
      <DialogTitle bgcolor="primary.main">
        Resultados de tu búsqueda
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={(theme) => ({
          position: "absolute",
          right: 8,
          top: 8,
          color: "white",
        })}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Alert severity="info">
            Antes que nada, verificá que los datos de tu auto sean los
            correctos.
          </Alert>
          <DatosAuto
            marca={arrayBaterias.marca}
            version={arrayBaterias.version}
            anioini={arrayBaterias.anio_inicio}
            aniofin={arrayBaterias.anio_fin}
            modelo={arrayBaterias.modelo}
          />
          <Typography variant="h6">Baterías para tu auto</Typography>

          <FoundBatteries encontradas={arrayBaterias.sku_baterias} />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cerrar</Button>
        <Button
          variant="contained"
          onClick={handleClose}
          href={"/cart"}
          autoFocus
        >
          Cerrar e ir al carrito
        </Button>
      </DialogActions>
    </Dialog>
  );
}
