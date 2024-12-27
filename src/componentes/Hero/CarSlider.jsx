import Slider from "react-slick";

function CarSlider() {
  const path = "/assets/images/";

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    pauseOnHover: false,
    waitForAnimate: false,
    /* speed: 5000, */
    autoplaySpeed: 500,
    arrows: false,
  };
  return (
    <div className="slider-container cars">
      <Slider {...settings}>
        <div className="carSlider">
          <img src={`${path}VanGris.png`} />
        </div>
        <div className="carSlider">
          <img src={`${path}AutoAzul.png`} />
        </div>
        <div className="carSlider">
          <img src={`${path}AutoBlanco.png`} />
        </div>
        <div className="carSlider">
          <img src={`${path}AutoAmarillo.png`} />
        </div>
      </Slider>
    </div>
  );
}

export default CarSlider;
