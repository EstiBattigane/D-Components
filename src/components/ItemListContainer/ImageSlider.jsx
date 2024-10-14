import React from 'react';
import Slider from 'react-slick';
import "./ImageSlider.css";
import "../../../node_modules/slick-carousel/slick/slick.css";
import '../../../node_modules/slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className='slider'>
      <Slider {...settings}>
        <div>
          <img className='slider-image' src="/src/components/Img/imagen1.jpg" alt="Slide 1" />
        </div>
        <div>
          <img className='slider-image' src="/src/components/Img/imagen2.jpg" alt="Slide 2" />
        </div>
        <div>
          <img className='slider-image' src="/src/components/Img/imagen5.png" alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
