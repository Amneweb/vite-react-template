import DesktopDatosAuto from "./DesktopDatosAuto";
import MobileDatosAuto from "./MobileDatosAuto";
import { Box } from "@mui/material";

export default function DatosAuto(props) {
  const { marca, version, anioini, aniofin, modelo } = props;
  return (
    <>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <DesktopDatosAuto
          marca={marca}
          version={version}
          anioini={anioini}
          aniofin={aniofin}
          modelo={modelo}
        />
      </Box>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <MobileDatosAuto
          marca={marca}
          version={version}
          anioini={anioini}
          aniofin={aniofin}
          modelo={modelo}
        />
      </Box>
    </>
  );
}
