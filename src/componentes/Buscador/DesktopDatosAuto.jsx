import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function DesktopDatosAuto(props) {
  const { marca, version, anioini, aniofin, modelo } = props;
  return (
    <TableContainer component={Paper} variant="outlined">
      <Table
        sx={{ minWidth: 650 }}
        aria-label="tabla datos vehículo"
        size="small"
      >
        <TableHead>
          <TableRow>
            <TableCell>Marca</TableCell>
            <TableCell>Modelo</TableCell>
            <TableCell>Versión</TableCell>
            <TableCell>Año de fabricación</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow
            key={`${marca}_${modelo}`}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell>{marca}</TableCell>
            <TableCell>{modelo}</TableCell>
            <TableCell>{version}</TableCell>
            <TableCell>{`${anioini} - ${aniofin}`}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
