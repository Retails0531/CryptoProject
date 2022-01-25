import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import Gethttp from "./Axios";

const Gallery = () => {
  const url = "/dummy.json";
  const data = Gethttp(url).carousel;

  const [state, setState] = useState({
    nav1: null,
    nav2: null,
  });

  const slider1 = useRef();
  const slider2 = useRef();

  useEffect(() => {
    setState({
      nav1: slider1.current,
      nav2: slider2.current,
    });
  }, []);

  const { nav1, nav2 } = state;

  const settingsSliderNav1 = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const settingsSliderNav2 = {
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="imagesection">
      <div className="imagesection-image">
        <Slider
          asNavFor={nav2}
          ref={(slider) => (slider1.current = slider)}
          {...settingsSliderNav1}
        >
          {data &&
            data.map((carousel) => {
              return (
                <a href={carousel.url} key={carousel.id}>
                  <img src={carousel.image} />
                </a>
              );
            })}
        </Slider>
      </div>
      <div className="imagesection-contents">
        <Slider
          asNavFor={nav1}
          ref={(slider) => (slider2.current = slider)}
          {...settingsSliderNav2}
        >
          {data &&
            data.map((carousel) => {
              return (
                <div className="imagesection-contentsbox" key={carousel.id}>
                  <div className="imagesection-contentsbox-a1">
                    {carousel.head}
                  </div>
                  <div className="imagesection-contentsbox-a2">
                    {carousel.contents}
                  </div>
                </div>
              );
            })}
        </Slider>
      </div>
    </div>
  );
};

export default Gallery;
