import { Col, Collapse, Row } from 'antd';
import React from 'react';
import { arrowUpOutline, crypto_banner, octagon } from '../../public/images';

export const FAQ = () => {
  const { Panel } = Collapse;
  return (
    <div className="faq-wrapper">
      <Row>
        <Col span={12}>
          <div className="faq-content">
            <img src={octagon} alt="octagon" />
            <h2>Frequently Asked Questions</h2>
            <p>Nam sollicitudin dignissim nunc, cursus ullamcorper.</p>

            <img src={crypto_banner} alt="crypto_banner" className="faq-image" />
          </div>
        </Col>
        <Col span={12}>
          <Collapse
            accordion
            defaultActiveKey={['1']}
            expandIconPosition="end"
            expandIcon={({ isActive }) => (
              <img src={arrowUpOutline.default} className={isActive && 'active'} alt="arrow" />
            )}
          >
            <Panel header="sollicitudin dignissim?" key="1">
              <p>Nam sollicitudin dignissim nunc, cursus ullamcorper.</p>
            </Panel>
            <Panel header="Nam sollicitudin dignissim nunc" key="2">
              <p>Nam sollicitudin dignissim nunc, cursus ullamcorper.</p>
            </Panel>
            <Panel header="Nam sollicitudin dignissim nunc" key="3">
              <p>Nam sollicitudin dignissim nunc, cursus ullamcorper.</p>
            </Panel>
            <Panel header="Nam sollicitudin dignissim nunc" key="4">
              <p>Nam sollicitudin dignissim nunc, cursus ullamcorper.</p>
            </Panel>
            <Panel header="Nam sollicitudin dignissim nunc" key="5">
              <p>Nam sollicitudin dignissim nunc, cursus ullamcorper.</p>
            </Panel>
          </Collapse>
        </Col>
      </Row>
    </div>
  );
};
