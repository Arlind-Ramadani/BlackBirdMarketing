import Slider from 'react-slick';
import React from 'react';
import { leftArrow, octagon, person, rightArrow } from '../../public/images';

export const Testimonials = () => {
  var settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    dots: true,
    prevArrow: <img src={leftArrow} alt="arrow" />,
    nextArrow: <img src={rightArrow} alt="arrow" />,
  };

  return (
    <div className="testimonial-wrapper">
      <img src={octagon} alt="octagon" />
      <h2>What our members said?</h2>
      <p className="xl">Nam sollicitudin dignissim nunc, cursus ullamcorper.</p>

      <Slider {...settings} className="testimonial-slider">
        <div className="slider-item">
          <img src={person} alt="person" />
          <p>
            Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate sed. Vestibulum sit amet tortor sit amet
            libero lobortis semper at et odio. In eu tellus tellus. Pellentesque ullamcorper aliquet ultrices.
          </p>
        </div>
        <div className="slider-item">
          <img src={person} alt="person" />
          <p>
            Person 2 dignissim nunc, cursus ullamcorper eros vulputate sed. Vestibulum sit amet tortor sit amet libero
            lobortis semper at et odio. In eu tellus tellus. Pellentesque ullamcorper aliquet ultrices.
          </p>
        </div>
        <div className="slider-item">
          <img src={person} alt="person" />
          <p>
            Person 3 dignissim nunc, cursus ullamcorper eros vulputate sed. Vestibulum sit amet tortor sit amet libero
            lobortis semper at et odio. In eu tellus tellus. Pellentesque ullamcorper aliquet ultrices.
          </p>
        </div>
        <div className="slider-item">
          <img src={person} alt="person" />
          <p>
            Person 4 Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate sed. Vestibulum sit amet tortor
            sit amet libero lobortis semper at et odio. In eu tellus tellus. Pellentesque ullamcorper aliquet ultrices.
          </p>
        </div>
        <div className="slider-item">
          <img src={person} alt="person" />
          <p>
            Person 5 Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate sed. Vestibulum sit amet tortor
            sit amet libero lobortis semper Nam sollicitudin at et odio. In eu tellus tellus. Pellentesque ullamcorper
            aliquet ultrices.
          </p>
        </div>
      </Slider>
    </div>
  );
};
