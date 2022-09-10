import React from 'react';
import Slider from 'react-slick';
import { arrowDown, arrowUp, bitcoin, iota, mnr, nem, xrp } from '../../public/images';

export const Topbar = () => {
  var settings = {
    speed: 8000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
  };

  return (
    <>
      <Slider {...settings} className="marquee-slider">
        <div className="slider-item">
          <p>
            <img src={bitcoin.default} alt="Arrow" />
            BTC $ 10.200
          </p>
          <p>
            (
            <span className="green">
              <img src={arrowUp.default} alt="Arrow" /> 8%
            </span>
            )
          </p>
        </div>
        <div className="slider-item">
          <p>
            <img src={xrp.default} alt="Arrow" />
            XRP $ 0.003
          </p>
          <p>
            (
            <span className="red">
              <img src={arrowDown.default} alt="Arrow" /> 3%
            </span>
            )
          </p>
        </div>
        <div className="slider-item">
          <p>
            <img src={nem.default} alt="Arrow" />
            NEM $ 0.003
          </p>
          <p>
            (
            <span className="green">
              <img src={arrowUp.default} alt="Arrow" /> 8%
            </span>
            )
          </p>
        </div>
        <div className="slider-item">
          <p>
            <img src={iota.default} alt="Arrow" />
            IOTA $ 0.010
          </p>
          <p>
            (
            <span className="red">
              <img src={arrowDown.default} alt="Arrow" /> 3%
            </span>
            )
          </p>
        </div>
        <div className="slider-item">
          <p>
            <img src={mnr.default} alt="Arrow" />
            MNR $ 0.003
          </p>
          <p>
            (
            <span className="green">
              <img src={arrowUp.default} alt="Arrow" /> 8%
            </span>
            )
          </p>
        </div>
        <div className="slider-item">
          <p>
            <img src={xrp.default} alt="Arrow" />
            XRP $ 0.003
          </p>
          <p>
            (
            <span className="red">
              <img src={arrowDown.default} alt="Arrow" /> 3%
            </span>
            )
          </p>
        </div>
        <div className="slider-item">
          <p>
            <img src={nem.default} alt="Arrow" />
            NEM $ 0.003
          </p>
          <p>
            (
            <span className="green">
              <img src={arrowUp.default} alt="Arrow" /> 8%
            </span>
            )
          </p>
        </div>
      </Slider>
    </>
  );
};
