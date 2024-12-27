import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function MobileDatosAuto(props) {
  const { marca, version, anioini, aniofin, modelo } = props;
  return (
    <TableContainer component={Paper} variant="outlined">
      <Table aria-label="tabla datos vehículo" size="small">
        <TableBody>
          <TableRow>
            <TableCell sx={{ bgcolor: "#F5f5f5" }}>Marca</TableCell>
            <TableCell>{marca}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ bgcolor: "#F5f5f5" }}>Modelo</TableCell>
            <TableCell>{modelo}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ bgcolor: "#F5f5f5" }}>Versión</TableCell>
            <TableCell>{version}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ bgcolor: "#F5f5f5" }}>
              Año de fabricación
            </TableCell>{" "}
            <TableCell>{`${anioini} - ${aniofin}`}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
