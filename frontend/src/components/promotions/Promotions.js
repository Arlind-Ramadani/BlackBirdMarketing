import Slider from 'react-slick';
import React from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { promotions } from '../../public/images';

export const Promotions = () => {
  var settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    prevArrow: <ArrowLeftOutlined />,
    nextArrow: <ArrowRightOutlined />,
  };
  return (
    <div className="promotions-wrapper">
      <Slider {...settings} className="promotions-slider">
        <div className="slider-item">
          <img src={promotions} alt="promotions" />
          <div className="content">
            <h2>Sed imperdiet enim ligula</h2>
            <p>Sed imperdiet enim ligula vitae viverra. Vivamus sit amet interdum elit.</p>
            <p className="lg">Periode: 12 Jul - 10 Aug</p>
          </div>
        </div>
        <div className="slider-item">
          <img src={promotions} alt="promotions" />
          <div className="content">
            <h2>Promotions 2 enim ligula</h2>
            <p>Sed imperdiet enim ligula vitae viverra. Vivamus sit amet interdum elit.</p>
            <p className="lg">Periode: 12 Jul - 10 Aug</p>
          </div>
        </div>
        <div className="slider-item">
          <img src={promotions} alt="promotions" />
          <div className="content">
            <h2>Promotions 3 enim ligula</h2>
            <p>Sed imperdiet enim ligula vitae viverra. Vivamus sit amet interdum elit.</p>
            <p className="lg">Periode: 12 Jul - 10 Aug</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};
