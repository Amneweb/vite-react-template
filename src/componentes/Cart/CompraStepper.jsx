import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useState, useRef } from "react";
import StepCarrito from "./StepCarrito";
import StepDatos from "./StepDatos";
import StepPagos from "./StepPagos";
import StepTicket from "./StepTicket";
import PagosSkeleton from "./PagosSkeleton";
import { Grid2 } from "@mui/material";

export default function CompraStepper() {
  const steps = [
    "Confirmar el carrito",
    "Ingresar datos",
    "Elegir forma de pago",
  ];
  const [activeStep, setActiveStep] = useState(0);
  const [ticket, setTicket] = useState();

  const [comprador, setComprador] = useState({});

  const stepperFormRef = useRef();
  const pagosFormRef = useRef();

  const handleNext = () => {
    if (activeStep === 1) {
      stepperFormRef.current.requestSubmit();
    }
    if (activeStep === 2) {
      pagosFormRef.current.requestSubmit();
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <Box sx={{ width: { xs: 1, md: 0.9 }, mx: "auto", mt: "4rem" }}>
          <Grid2
            className="rounded"
            container
            spacing={6}
            sx={{
              bgcolor: "background.paper",
              padding: "4rem",
              display: "flex",
              mb: "4rem",
            }}
          >
            <Grid2
              item
              size={{ xs: 12, md: 4 }}
              component="img"
              src="/assets/images/box.png"
              sx={{ maxWidth: "80px" }}
            />
            <Grid2
              item
              size={{ xs: 12, md: 8 }}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                justifyContent: "center",
              }}
            >
              <Typography variant="body1">Gracias...</Typography>{" "}
              <Typography variant="body1">
                Por comprar en OCEANBAT. En breve te aparecerán los datos de tu
                compra. Por favor verificalos y luego procedé al pago siguiendo
                las instrucciones de más abajo.
              </Typography>
            </Grid2>
          </Grid2>
          {ticket ? <StepTicket infoTicket={ticket} /> : <PagosSkeleton />}
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </Box>
      ) : (
        <>
          <Box
            sx={{
              mt: 5,
              mb: 5,
              width: { xs: 1, md: 0.9 },
              mx: "auto",
            }}
          >
            <Typography variant="h6" sx={{ color: "primary.main" }}>
              PASO {activeStep + 1} <KeyboardArrowRightIcon fontSize="small" />{" "}
              {steps[activeStep]}
            </Typography>
          </Box>
          {activeStep === 0 && <StepCarrito />}
          {activeStep === 1 && (
            <StepDatos
              presentActiveStep={activeStep}
              nextComprador={(comprador) => setComprador(comprador)}
              submitRef={stepperFormRef}
            />
          )}
          {activeStep === 2 &&
            (comprador ? (
              <StepPagos
                comprador={comprador}
                submitTicketRef={pagosFormRef}
                nextTicket={(newTicket) => setTicket(newTicket)}
              />
            ) : (
              <PagosSkeleton />
            ))}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              pt: 2,
              justifyContent: "center",
            }}
          >
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Atrás
            </Button>

            <Button variant="outlined" onClick={handleNext}>
              {steps[activeStep]}
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
}
