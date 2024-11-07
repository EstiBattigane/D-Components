import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import "./ImageSlider.css";
import "../../../node_modules/slick-carousel/slick/slick.css";
import '../../../node_modules/slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  const [images, setImages] = useState([]);
  const storage = getStorage();
  const imageRef = ref(storage, 'Img/');

  useEffect(() => {
    listAll(imageRef)
      .then((res) => {
        const promises = res.items.map((item) => getDownloadURL(item));
        return Promise.all(promises);
      })
      .then((urls) => {
        const shuffledUrls = urls.sort(() => Math.random() - 0.5);
        setImages(shuffledUrls);
      })
      .catch((error) => {
        console.error("Error al obtener las imágenes: ", error);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplayspeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className='slider'>
      <Slider {...settings}>
        {images.map((url, index) => (
          <div key={index}>
            <img className='slider-image' src={url} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
