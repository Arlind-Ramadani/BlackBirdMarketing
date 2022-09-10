import { Col, Row } from 'antd';
import React from 'react';
import { crypto_banner } from '../../public/images';
import { FilledButton } from '../button/FilledButton';
import { OutlineButton } from '../button/OutlineButton';

export const Hero = () => {
  return (
    <div className="hero-wrapper">
      <Row gutter={16}>
        <Col className="gutter-row" span={12}>
          <h1>Digital currency leads at market in the right amount.</h1>
          <p>Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula, eget suscipit orci. </p>
          <div className="buttons-wrapper">
            <FilledButton text="Get Started" />
            <OutlineButton text="View Market" />
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <img src={crypto_banner} alt="crypto banner" />
        </Col>
      </Row>
    </div>
  );
};
