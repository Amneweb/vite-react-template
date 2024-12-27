import { Grid2, Typography } from "@mui/material";
import Slider from "react-slick";
import HeroAvatarList from "./HeroAvatarList";
import CarSlider from "./CarSlider";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,

    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    dotsClass: "hero-dots",
    arrows: false,
  };
  return (
    <div
      className="slider-container hero"
      sx={{ width: "90%", display: "flex", justifyContent: "center" }}
    >
      <Slider {...settings}>
        <div>
          {/*primera diapo */}
          <Grid2
            container
            spacing={2}
            sx={{
              height: { md: "70vh" },
              minHeight: "650px",
            }}
          >
            <Grid2
              item
              size={{ xs: 12, md: 6 }}
              component="div"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                height: "90%",
              }}
            >
              <WavingHandIcon
                sx={{ fontSize: "5rem", color: "primary.main" }}
              />
              <Typography
                variant="h1"
                sx={{
                  fontWeight: "bold",
                  marginBottom: "2rem",
                }}
              >
                Bienvenidos a OCEANBAT
              </Typography>
              <Typography>
                Distribuidores de baterías con más de 30 años en el rubro. Somos
                representantes oficiales de las marcas Moura, Edna, Mateo y
                Clorex.
              </Typography>
            </Grid2>
            <Grid2
              item
              className="slider-image"
              size={{ xs: 12, md: 6 }}
              component="div"
              order={{ xs: -1, md: 1 }}
            >
              <img src="/assets/images/bateriaSola.png" />
            </Grid2>
          </Grid2>
        </div>
        <div>
          {/*segunda diapo */}
          <Grid2
            container
            spacing={2}
            sx={{
              height: { md: "70vh" },
              minHeight: "650px",
            }}
          >
            <Grid2
              item
              size={{ xs: 12, md: 6 }}
              component="div"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                height: "90%",
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: "bold",
                  marginBottom: "2rem",
                }}
              >
                ¿Qué te ofrecemos?
              </Typography>
              <HeroAvatarList />
            </Grid2>
            <Grid2
              item
              className="slider-image"
              size={{ xs: 12, md: 6 }}
              component="div"
            >
              <img src="/assets/images/muestrario.png" />
            </Grid2>
          </Grid2>
        </div>
        <div>
          {/*tercera diapo */}
          <Grid2
            container
            spacing={2}
            sx={{
              height: { md: "70vh" },
              minHeight: "650px",
            }}
          >
            <Grid2
              item
              size={{ xs: 12, md: 6 }}
              component="div"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                height: "90%",
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontWeight: "bold",
                  marginBottom: "2rem",
                }}
              >
                ¿Qué auto tenés?
              </Typography>
              <Typography sx={{ color: "white" }}>
                Sea cual sea tu auto, nosotros tenemos la batería que necesitás.
                Encontrala usando nuestro buscador acá abajo.
              </Typography>

              <Typography
                sx={{
                  color: "primary.main",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  pt: "2rem",
                }}
              >
                <ArrowCircleDownIcon
                  sx={{
                    fontSize: "10rem",
                  }}
                />
              </Typography>
            </Grid2>
            <Grid2
              item
              size={{ xs: 12, md: 6 }}
              component="div"
              order={{ xs: -1, md: 1 }}
            >
              <CarSlider />
            </Grid2>
          </Grid2>
        </div>
      </Slider>
    </div>
  );
};

export default HeroSlider;
