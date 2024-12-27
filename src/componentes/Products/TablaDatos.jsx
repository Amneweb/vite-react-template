import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";

const TablaDatos = ({ bateria }) => {
  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{ "&:before": { height: "0px" } }}
    >
      <Table sx={{ minWidth: "100%" }} aria-label="datos de la batería">
        <TableBody>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">
              Amperaje comercial
            </TableCell>
            <TableCell align="right">{`12x${bateria.amperaje} Ah`}</TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">
              Cantidad de placas
            </TableCell>
            <TableCell align="right">{`${bateria.placas}`}</TableCell>
          </TableRow>

          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">
              Corriente de arranque a 25&deg; C (HCA)
            </TableCell>
            <TableCell align="right">{`${bateria.hca} A`}</TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">
              Corriente de arranque a 0&deg; C
            </TableCell>
            <TableCell align="right">{`${bateria.cca0} A`}</TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">
              Corriente de arranque en frío (a -18&deg; C)
            </TableCell>
            <TableCell align="right">{`${bateria.cca18} A`}</TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">
              Reserva de capacidad (RC)
            </TableCell>
            <TableCell align="right">{`${bateria.reserva} min`}</TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">
              Capacidad Nominal (C20)
            </TableCell>
            <TableCell align="right">{`${bateria.c20} Ah`}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TablaDatos;
