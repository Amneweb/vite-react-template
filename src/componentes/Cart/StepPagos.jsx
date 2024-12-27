import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Alert, Button, Card, Container, Stack } from "@mui/material";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import CreditCardOffIcon from "@mui/icons-material/CreditCardOff";
import CardActionArea from "@mui/material/CardActionArea";
import base_api_url from "../../utlis/ruta";
import { useContext, useState } from "react";
import axios from "axios";
import { CartContext } from "../../context/CartContext";
export default function StepPagos({ comprador, nextTicket, submitTicketRef }) {
  const { carrito, vaciarCarrito } = useContext(CartContext);
  const [value, setValue] = useState("MP");
  const handleRadioChange = (e) => {
    setValue(e.target.value);
  };
  const enviarOrden = async (value) => {
    const response = await axios
      .post(
        `${base_api_url}/api/tickets/`,
        JSON.stringify({
          carrito: carrito,
          ...comprador,
          forma: value,
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .catch(function (error) {
        console.log(error.toJSON());
      });
    const resultado = response.data.payload;
    nextTicket(resultado);
    vaciarCarrito();
  };
  /* const enviarFormaPago = async (value, id) => {
    const response = await axios
      .put(
        `${base_api_url}/api/tickets/${id}`,
        JSON.stringify({
          forma: value,
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {

        modificado();
      })
      .catch(function (error) {
        console.log(error.toJSON());
      });
  }; */
  const handleSubmit = async (e) => {
    e.preventDefault();

    await enviarOrden(value);
  };
  return (
    <Container sx={{ width: "80%" }}>
      <FormControl
        component="form"
        ref={submitTicketRef}
        fullWidth
        sx={{ marginBottom: "0.5rem" }}
        onSubmit={handleSubmit}
      >
        <RadioGroup
          aria-labelledby="pagos"
          name="radio-buttons-pagos"
          value={value}
          onChange={handleRadioChange}
        >
          <Stack direction="row" spacing={2} sx={{ paddingBottom: "1rem" }}>
            <CardActionArea>
              <Card
                variant="outlined"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  padding: "2rem",
                  alignContent: "center",
                }}
              >
                <FormControlLabel
                  value="MP"
                  control={<Radio />}
                  label="Plataforma de Mercado Pago"
                />
                <AccountBalanceWalletOutlinedIcon
                  sx={{ opacity: "50%", fontSize: "4rem" }}
                />
              </Card>
            </CardActionArea>
            <CardActionArea>
              <Card
                variant="outlined"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  padding: "2rem",
                  alignContent: "center",
                }}
              >
                <FormControlLabel
                  value="transferencia"
                  control={<Radio />}
                  label="Transferencia"
                />
                <AccountBalanceOutlinedIcon
                  sx={{ opacity: "50%", fontSize: "4rem" }}
                />
              </Card>
            </CardActionArea>
            <CardActionArea>
              <Card
                variant="outlined"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  padding: "2rem",
                  alignContent: "center",
                }}
              >
                <FormControlLabel
                  value="efectivo"
                  control={<Radio />}
                  label="Efectivo en nuestro local"
                />
                <PaymentsOutlinedIcon
                  sx={{ opacity: "50%", fontSize: "4rem" }}
                />
              </Card>
            </CardActionArea>
          </Stack>
        </RadioGroup>
        <Stack spacing={1}>
          <Alert
            variant="outlined"
            severity="info"
            iconMapping={{
              info: <CreditCardOffIcon fontSize="inherit" />,
            }}
          >
            NO ACEPTAMOS PAGOS CON TARJETA A DISTANCIA (tipo Payway)
          </Alert>
          {/*  <Button type="submit" variant="contained">
            Confirmar forma de pago
          </Button> */}
        </Stack>
      </FormControl>
    </Container>
  );
}
