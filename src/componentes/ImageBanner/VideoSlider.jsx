import { styled } from "@mui/system";
import { Box } from "@mui/material";
import Slider from "react-slick";

const VideoSlider = () => {
  const StyledBox = styled("div")({
    height: "500px",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    width: "100%",
  });

  const settings = {
    fade: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    arrows: false,
    dots: false,
  };

  return (
    <Box sx={{ maxHeight: "500px", overflow: "hidden", mt: "5rem" }}>
      <div className="slider-container">
        <Slider {...settings}>
          <StyledBox
            sx={{
              backgroundImage: "url('/assets/images/mouraEnRacks.jpg')",
            }}
          ></StyledBox>
          <StyledBox
            sx={{
              backgroundImage: "url('/assets/images/NosotrosSlideshow4.jpg')",
            }}
          ></StyledBox>
          <StyledBox
            sx={{
              backgroundImage: "url('/assets/images/anaquelesInterno.jpg')",
            }}
          ></StyledBox>
          <StyledBox
            sx={{
              backgroundImage: "url('/assets/images/NosotrosSlideshow7.jpg')",
            }}
          ></StyledBox>
          <StyledBox
            sx={{
              backgroundImage: "url('/assets/images/NosotrosSlideshow8.jpg')",
            }}
          ></StyledBox>
          <StyledBox
            sx={{
              backgroundImage: "url('/assets/images/NosotrosSlideshow9.jpg')",
            }}
          ></StyledBox>
        </Slider>
      </div>
    </Box>
  );
};

export default VideoSlider;
