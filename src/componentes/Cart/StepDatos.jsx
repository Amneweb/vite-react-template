import { Container, Stack, Grid2, TextField, Alert } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { useContext, useState, useRef } from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import WarningAmberIcon from "@mui/icons-material/WarningAmber";

const StepDatos = ({
  nextComprador,

  submitRef,
}) => {
  const [nombre, setNombre] = useState("Amneris");
  const [nombreError, setNombreError] = useState(null);
  const [apellido, setApellido] = useState("Calle");
  const [apellidoError, setApellidoError] = useState(null);
  const [code, setCode] = useState("11");
  const [codeError, setCodeError] = useState(null);
  const [phone, setPhone] = useState("123456");
  const [phoneError, setPhoneError] = useState(null);
  const [email, setEmail] = useState("amneris.calle@gmail.com");
  const [emailError, setEmailError] = useState(null);
  const [openSnack, setOpenSnack] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");

  const mensajes = {
    nombre:
      "El nombre y el apellido deben tener un un mínimo de 2 y un máximo de 30 caracteres, y contener sólo letras o espacios",
    email: "El email es inválido",
    numero:
      "El código de área y/o el número de teléfono deben contener sólo números y/o espacios",
  };

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
    if (e.target.value.length < 2) {
      setNombreError(true);
    } else if (e.target.value.length > 30) {
      setNombreError(true);
    } else if (!/^[a-zA-ZÁÉÍÓÚáéíóú ]+$/.test(e.target.value)) {
      setNombreError(true);
    } else {
      setNombreError(false);
    }
  };
  const handleApellidoChange = (e) => {
    setApellido(e.target.value);
    if (e.target.value.length < 2) {
      setApellidoError(true);
    } else if (e.target.value.length > 30) {
      setApellidoError(true);
    } else if (!/^[a-zA-ZÁÉÍÓÚáéíóú ]+$/.test(e.target.value)) {
      setApellidoError(true);
    } else {
      setApellidoError(false);
    }
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!/^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/.test(e.target.value)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };
  const handleCodeChange = (e) => {
    setCode(e.target.value);
    if (!/^[0-9 ]+$/.test(e.target.value)) {
      setCodeError(true);
    } else {
      setCodeError(false);
    }
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    if (!/^[0-9 ]+$/.test(e.target.value)) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
  };

  const handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnack(false);
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleCloseSnack}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      nombre === "" ||
      email === "" ||
      apellido === "" ||
      phone === "" ||
      code === ""
    ) {
      setSnackMessage(
        "⚠️ Todos los campos son requeridos. No se pudo enviar el formulario."
      );

      setOpenSnack(true);
    } else if (
      nombreError ||
      emailError ||
      phoneError ||
      codeError ||
      apellidoError
    ) {
      setSnackMessage("⚠️ El formulario contiene errores. No se puede enviar.");
      setOpenSnack(true);
    } else {
      nextComprador({
        email: email,
        nombre: nombre,
        apellido: apellido,
        area: code,
        numero: phone,
      });
      setSnackMessage(
        "🚀 El formulario se envió con éxito y se generó el ticket de compra correspondiente."
      );
      setOpenSnack(true);
    }
  };

  return (
    <Container sx={{ width: "80%", mx: "auto" }}>
      <Snackbar
        open={openSnack}
        autoHideDuration={6000}
        onClose={handleCloseSnack}
        message={snackMessage}
        action={action}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
      <Stack
        spacing={2}
        component="form"
        ref={submitRef}
        onSubmit={handleSubmit}
        noValidate
      >
        <Alert
          variant="outlined"
          iconMapping={{
            info: <WarningAmberIcon fontSize="inherit" />,
          }}
          severity="info"
        >
          Todos los campos son requeridos
        </Alert>
        <Grid2 container spacing={2}>
          <Grid2 item size={6} sx={{ display: "flex", alignItems: "center" }}>
            <AccountCircleIcon
              fontSize="large"
              sx={{ color: "action.active", mr: 1, my: 0.5 }}
            />
            <TextField
              fullWidth
              label="Nombre"
              value={nombre}
              onChange={handleNombreChange}
              error={nombreError}
              helperText={nombreError && mensajes.nombre}
            />
          </Grid2>
          <Grid2 item size={6}>
            <TextField
              fullWidth
              label="Apellido"
              value={apellido}
              onChange={handleApellidoChange}
              error={apellidoError}
              helperText={apellidoError && mensajes.nombre}
            />
          </Grid2>
        </Grid2>
        <Grid2 container spacing={2}>
          <Grid2 item size={3} sx={{ display: "flex", alignItems: "center" }}>
            <LocalPhoneIcon
              fontSize="large"
              sx={{ color: "action.active", mr: 1, my: 0.5 }}
            />
            <TextField
              fullWidth
              label="Código de área"
              value={code}
              onChange={handleCodeChange}
              error={codeError}
              helperText={codeError && mensajes.numero}
            />
          </Grid2>
          <Grid2 item size={9}>
            <TextField
              fullWidth
              label="Número"
              value={phone}
              onChange={handlePhoneChange}
              error={phoneError}
              helperText={phoneError && mensajes.numero}
            />
          </Grid2>
        </Grid2>
        <Grid2 container spacing={2}>
          <Grid2 item size={12} sx={{ display: "flex", alignItems: "center" }}>
            <EmailIcon
              fontSize="large"
              sx={{ color: "action.active", mr: 1, my: 0.5 }}
            />
            <TextField
              fullWidth
              label="Email"
              value={email}
              onChange={handleEmailChange}
              error={emailError}
              helperText={emailError && mensajes.email}
            />
          </Grid2>
        </Grid2>
      </Stack>
    </Container>
  );
};

export default StepDatos;
