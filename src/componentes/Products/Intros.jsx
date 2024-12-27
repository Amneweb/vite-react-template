import { Box, Grid2, Typography } from "@mui/material";

const Intros = ({ cate }) => {
  const path = "/assets/images/";
  return (
    <Box
      sx={{
        padding: "3rem",
      }}
    >
      <Grid2 container spacing={2}>
        <Grid2
          item
          sx={{
            backgroundImage: `url(${path}${cate}.png)`,
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
          size={{ xs: 12, md: 4 }}
        ></Grid2>
        <Grid2 item size={{ xs: 12, md: 8 }}>
          {cate === "EDNA" && (
            <>
              <Typography
                sx={{ width: 0.9, mx: "auto" }}
                variant="body2"
                color="text.secondary"
                textAlign="justify"
              >
                Baterías Edna, es una empresa que se dedica desde 1942 a la
                fabricación y ventas de baterías, placas e insumos, cuidando de
                manera responsable el medio ambiente. Ubicada en la provincia de
                Salta, muy cerca de la única mina de plomo de la región, desde
                sus comienzos Edna ha ido creciendo y consolidándose como un
                referente regional y nacional.
              </Typography>{" "}
              <Typography
                sx={{ width: 0.9, mx: "auto" }}
                variant="body2"
                color="text.secondary"
                textAlign="justify"
              >
                Todos los materiales utilizados en las baterías son 100%
                reciclados y en su fábrica se realiza el proceso de elaboración
                completo: fundición del plomo, elaboración de rejillas,
                producción de óxidos, empastado de placas, inyección de cajas,
                curado y montaje. La producción controlada garantiza la
                performance y vida útil de las baterías EDNA.
              </Typography>
            </>
          )}
          {cate === "MOURA" && (
            <>
              <Typography
                sx={{ width: 0.9, mx: "auto" }}
                variant="body2"
                color="text.secondary"
                textAlign="justify"
              >
                Fundada en 1957 en la ciudad de Belo Jardim, Pernambuco, Brasil,
                Moura ha ido dedicando su experiencia y competencia al
                desarrollo de baterías de la más alta calidad. Con un compromiso
                constante hacia la mejora continua y una inversión en
                innovación, la empresa se ha consolidado como el principal
                centro de fabricación en América del Sur. Aunque comenzó
                enfocada principalmente en el sector automotriz, han ampliado su
                presencia a otros sectores y hoy en día fabrica baterías y
                sistemas de almacenamiento de energía para una amplia variedad
                de aplicaciones.
              </Typography>{" "}
              <Typography
                sx={{ width: 0.9, mx: "auto" }}
                variant="body2"
                color="text.secondary"
                textAlign="justify"
              >
                Con una sólida presencia en Argentina, Uruguay y obviamente
                Brasil, Moura también extiende su campo de acción a más de 20
                países, estableciendo asociaciones tecnológicas con destacados
                fabricantes europeos, norteamericanos y asiáticos. Este
                compromiso añade un valor diferenciado de rendimiento a cada uno
                de sus productos.
              </Typography>
            </>
          )}
          {cate === "MATEO" && (
            <>
              <Typography
                sx={{ width: 0.9, mx: "auto" }}
                variant="body2"
                color="text.secondary"
                textAlign="justify"
              >
                Mateo Hermanos S.A. es una empresa dedicada a la fabricación y
                comercialización de baterías automotrices, ubicada en la ciudad
                de Ayacucho, Provincia de Buenos Aires. Con más de 50 años de
                trayectoria en el mercado automotriz, es una de las principales
                fábricas de baterías de nuestro país.
              </Typography>{" "}
              <Typography
                sx={{ width: 0.9, mx: "auto" }}
                variant="body2"
                color="text.secondary"
                textAlign="justify"
              >
                La estrategia aplicada en nuestra planta industrial persigue un
                concepto integral que abarca todo el ciclo de producción,
                obteniendo el reconocimiento del mercado nacional e
                internacional en base a su moderna tecnología de fabricación y
                su alto grado de prestación. En la actualidad, la empresa cuenta
                con tecnología de avanzada en la producción de rejillas,
                empastado de las mismas y una línea de armado con la capacidad
                para ensamblar más de 2000 baterías diarias.
              </Typography>
            </>
          )}
          {cate === "CLOREX" && (
            <>
              <Typography
                sx={{ width: 0.9, mx: "auto" }}
                variant="body2"
                color="text.secondary"
                textAlign="justify"
              >
                Las baterías Clorex son fabricadas en Entre Ríos por FADEMI SA,
                empresa de origen familiar que desde hace 50 años fabrican y
                comercializan baterías en la ciudad de Larroque, al sur de la
                provincia, constituyéndose en una empresa líder en su rubro, que
                aporta valor al progreso de su zona. La automatización de
                procesos, la innovación de productos, la certificación de
                normas, la capacitación del personal, la expansión de mercados y
                la exportación fueron elementos claves en el crecimiento de la
                empresa.
              </Typography>{" "}
              <Typography
                sx={{ width: 0.9, mx: "auto" }}
                variant="body2"
                color="text.secondary"
                textAlign="justify"
              >
                La planta posee maquinaria y tecnología de última generación, y
                los procesos son en su mayoría automatizados con intervención de
                personal calificado para el manejo y control; eso permite
                ofrecer al mercado un producto de alta performance, verificado
                en todas sus etapas de fabricación, y a un costo muy
                competitivo.
              </Typography>
            </>
          )}
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Intros;
