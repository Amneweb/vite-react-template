import {
  Box,
  Grid2,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import { formateado } from "../../utlis/format";
const StepTicket = ({ infoTicket }) => {
  console.log("info ticket ", infoTicket);
  return (
    <Grid2 container spacing={6} sx={{ display: "flex" }}>
      <Grid2 item size={{ xs: 12, md: 4 }}>
        <Typography variant="h6" color="primary.main" sx={{ mb: "2rem" }}>
          {"Datos de la orden".toUpperCase()}
        </Typography>
        <TableContainer
          component={Paper}
          elevation={0}
          sx={{
            "&:before": { height: "0px" },
            backgroundColor: "transparent",
            border: "solid 1px",
            borderColor: "primary.main",
            padding: "1rem",
          }}
        >
          <Table
            className="rounded"
            sx={{
              minWidth: "100%",

              "& td, & th": { border: 0 },
            }}
            aria-label="datos de la orden de compra"
          >
            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  Id compra
                </TableCell>
                <TableCell>{infoTicket._id}</TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  Nro de orden
                </TableCell>
                <TableCell>{infoTicket.orderID}</TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  Fecha de compra
                </TableCell>
                <TableCell>{infoTicket.purchase_datetime}</TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  Nombre comprador
                </TableCell>
                <TableCell>
                  {infoTicket.purchaser.nombre} {infoTicket.purchaser.apellido}
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  Email
                </TableCell>
                <TableCell>{infoTicket.purchaser.email}</TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  Teléfono
                </TableCell>
                <TableCell>{infoTicket.purchaser.telefono}</TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  Forma de pago
                </TableCell>
                <TableCell>{infoTicket.forma}</TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  Pago recibido
                </TableCell>
                <TableCell>{!infoTicket.verified ? "NO" : "SI"}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid2>
      <Grid2 item size={{ xs: 12, md: 8 }}>
        <Typography variant="h6" color="primary.main" sx={{ mb: "2rem" }}>
          {"Datos de los productos".toUpperCase()}
        </Typography>
        <TableContainer component={Paper}>
          <Table aria-label="Productos en la orden de compra">
            <TableHead>
              <TableRow>
                <TableCell>SKU</TableCell>
                <TableCell align="right">Nombre</TableCell>
                <TableCell align="right">Cantidad</TableCell>
                <TableCell align="right">Precio unitario</TableCell>
                <TableCell align="right">Precio total producto</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {infoTicket.order.map((item) => (
                <TableRow
                  key={item.item.sku}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.item.sku}
                  </TableCell>
                  <TableCell align="right">{item.item.nombre}</TableCell>
                  <TableCell align="right">{item.contador}</TableCell>
                  <TableCell align="right">
                    {formateado.format(item.item.precio)}
                  </TableCell>
                  <TableCell align="right">
                    {formateado.format(item.item.precio * item.contador)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            my: "2rem",
            px: "1rem",
          }}
        >
          <Typography variant="h6" color="primary.main">
            Total a pagar
          </Typography>
          <Typography variant="h5" color="primary.main">
            {formateado.format(infoTicket.total)}
          </Typography>
        </Box>
        <Box
          sx={{
            bgcolor: "background.paper",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            mb: "4rem",
          }}
        >
          <WarningRoundedIcon fontSize="large" color="warning" />
          <Typography variant="body2">
            Guardá los datos de la orden por si surge algún problema, aunque
            debería haberte llegado un correo con la confirmación y los datos
            completos. Abajo te aparecen instrucciones para proceder al pago
            según el método elegido. Si querés cambiar de meetodo de pago,
            escribinos a ventas@oceanbat.com o comunicate por whatsapp al. ....
            (Tené a mano el número de orden para hacer más fácil la
            comunicación)
          </Typography>
        </Box>
      </Grid2>
    </Grid2>
  );
};

export default StepTicket;
