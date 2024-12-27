import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";

const TablaMedidas = ({ bateria }) => {
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
              Alto
            </TableCell>
            <TableCell align="right">{`${bateria.alto} mm`}</TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">
              Ancho
            </TableCell>
            <TableCell align="right">{`${bateria.ancho} mm`}</TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">
              Largo
            </TableCell>
            <TableCell align="right">{`${bateria.largo} mm`}</TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">
              Peso
            </TableCell>
            <TableCell align="right">{`${bateria.peso} kg`}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TablaMedidas;
