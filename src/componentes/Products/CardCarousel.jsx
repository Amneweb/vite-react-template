import { Box } from "@mui/material";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import ProductSmallCard from "./ProductSmallCard";

function SamplePrevArrow(props) {
  const { onClick } = props;
  return <div className="customPrevArrow" onClick={onClick} />;
}
function SampleNextArrow(props) {
  const { onClick } = props;
  return <div className="customNextArrow" onClick={onClick} />;
}

function CardCarousel({ featured, handleSnack }) {
  console.log("array que llega a card carousel ", featured);
  const cards = featured.length;
  const slidestoshow = 4;

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: slidestoshow,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    dotsClass: "carousel-dots",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: slidestoshow - 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: slidestoshow - 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box className="slider-container" sx={{ width: "100%" }}>
      <Slider {...settings}>
        {featured &&
          featured.map((bateria) => (
            <ProductSmallCard
              key={bateria._id}
              handleSnack={handleSnack}
              bateria={bateria}
            />
          ))}
      </Slider>
    </Box>
  );
}

export default CardCarousel;
