import { Col, Row } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { box, coins, group, heart, octagon, octagonWhite, playButton } from '../../public/images';
import { useSelector } from 'react-redux';

export const Features = () => {
  const [modal, setModal] = useState(false);
  const colorScheme = useSelector((state) => state);

  const handleVideoClick = () => {
    setModal(!modal);
  };

  return (
    <div className="features-wrapper">
      <div className={modal ? 'modal-wrapper active' : 'modal-wrapper'}>
        <iframe
          width="80%"
          height="80%"
          src={`https://www.youtube.com/embed/WQ6snVCCgt4`}
          frameBorder="0"
          allowFullScreen
          title="Embedded youtube"
        />

        <CloseCircleOutlined onClick={handleVideoClick} className="close" />
      </div>

      <Row>
        <Col lg={{ span: 11 }}>
          <img src={colorScheme === 'dark' ? octagon : octagonWhite} alt="octagon" />
          <h2>Fusce placerat enim et odio</h2>
          <p>Sed imperdiet enim ligula, vitae viverra justo porta vel.</p>

          <div className="video-wrapper">
            <button className="play-button" onClick={handleVideoClick}>
              <img src={playButton} alt="playButton" />
            </button>
          </div>
        </Col>
        <Col lg={{ offset: 3, span: 10 }}>
          <div className="feature-container">
            <div className="container-left">
              <div className="feature-item">
                <img src={coins} alt="coins" />
                <p>
                  <span>+100</span> Supported Coins
                </p>
              </div>
              <div className="feature-item">
                <img src={group} alt="group" />
                <p>
                  <span>+200K</span> Registered Users
                </p>
              </div>
            </div>
            <div className="container-right">
              <div className="feature-item">
                <img src={box} alt="box" />
                <p>
                  <span>+20M</span> Open Wallets
                </p>
              </div>
              <div className="feature-item">
                <img src={heart} alt="heart" />
                <p>
                  <span>+50M</span> USD Invested
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
