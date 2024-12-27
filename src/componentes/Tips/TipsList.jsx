import React from "react";
import TipCard from "./TipCard";
import MapTwoToneIcon from "@mui/icons-material/MapTwoTone";
import AccessAlarmsTwoToneIcon from "@mui/icons-material/AccessAlarmsTwoTone";
import PendingActionsTwoToneIcon from "@mui/icons-material/PendingActionsTwoTone";
import BatteryCharging60TwoToneIcon from "@mui/icons-material/BatteryCharging60TwoTone";
import NoCrashTwoToneIcon from "@mui/icons-material/NoCrashTwoTone";
import ThumbDownOffAltTwoToneIcon from "@mui/icons-material/ThumbDownOffAltTwoTone";
import { Box, Button, Typography } from "@mui/material";
const TipsList = () => {
  return (
    <>
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          mb: "4rem",
          mt: "6rem",
          color: "primary.main",
          fontWeight: "bold",
        }}
      >
        Consejos y secretos
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          width: 0.9,
          margin: "auto",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <TipCard
          icon={<MapTwoToneIcon />}
          titulo="¿Te vas de viaje con el auto?"
          contenido="Antes de emprender un viaje largo con tu auto, en especial si vas a estar por zonas poco pobladas, verificá el estado de tu batería. Para eso podés acercarte a nuestro local y nosotros te chequeamos el estado sin costo alguno."
        />
        <TipCard
          icon={<AccessAlarmsTwoToneIcon />}
          titulo="¿Cuánto dura una batería?"
          contenido="Una batería en un auto de uso particular (no remis ni taxi) tiene una duración promedio de 3 años. Sin embargo, cuando el auto sale de fábrica la duración de la primer batería suele ser mayor, llegando a los 6 años en algunos casos. La duración de la batería también depende de la calidad de la misma y del amperaje: si el amperaje es el que le corresponde al motor, la batería dura más, si es menor, se gasta más rápido."
        />
        <TipCard
          icon={<PendingActionsTwoToneIcon />}
          titulo="¿Cada cuánto chequeo mi batería?"
          contenido="Conviene verificar la batería por lo menos dos veces al año, de esa manera te ahorrás el disgusto de que el auto no arranque justo cuando más lo necesitás. Además, en el mismo proceso se verifica que el alternador funcione correctamente, porque si no lo hace, la batería se descarga más rápido."
        />
        <TipCard
          icon={<BatteryCharging60TwoToneIcon />}
          titulo="¿Cómo sé si el problema es la batería?"
          contenido="Algunos indicios de que es la batería la que está fallando son: luz roja en el símbolo de batería al arrancar, el auto no arranca a los dos o tres primeros intentos y no hace ruido de motor, cuando prendo el aire acondicionado baja la intensidad de las luces."
        />
        <TipCard
          icon={<NoCrashTwoToneIcon />}
          titulo="¿Cómo elijo la batería correcta?"
          contenido="La mejor manera de saber cuál es la batería para tu auto es leer las especificaciones en el manual del vehículo. Si no tenés el manual, otra opción bastante confiable es ver cuál es la batería que el vehículo tiene colocada y comprar una de iguales características. También podés utilizar nuestro buscador, en el que podrás encontrar las baterías que tenemos para tu auto según el modelo, marca y año de fabricación"
        />
        <TipCard
          icon={<ThumbDownOffAltTwoToneIcon />}
          titulo="¿Qué situaciones reducen la vida útil de la batería?"
          contenido="Dejar el auto parado durante mucho tiempo sin arrancarlo ni conectarlo a un cargador;
usar el sistema de iluminación, el aire acondicionado, la radio o el GPS con el motor apagado; usar el auto por trayectos cortos que no permiten recargar la batería suficientemente son algunas de las situaciones que harán que la batería se descargue por debajo del 50% de su capacidad, lo cual acorta su vida útil."
        />
      </Box>
      <Typography
        variant="body1"
        sx={{ width: 0.9, textAlign: "right", pt: "2rem" }}
      >
        Encontrá estos y más consejos sobre la batería de tu vehículo haciendo
        click en el botón
      </Typography>
      <Button>MÁS INFO</Button>
    </>
  );
};

export default TipsList;
