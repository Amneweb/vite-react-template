import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box } from "@mui/material";
import base_api_url from "../../utlis/ruta";
function ImageCarousel({ array }) {
  const pathImagen = `${base_api_url}/uploads/images`;
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={`${pathImagen}/${array[i]}`} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <Box
      sx={{ maxWidth: "100%", width: "100%", mb: "150px" }}
      className="slider-container carousel-container"
    >
      <Slider {...settings}>
        {array.map((imagen) => (
          <Box>
            <img
              className="product_img dotted bordered rounded"
              src={`${pathImagen}/${imagen}`}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default ImageCarousel;
