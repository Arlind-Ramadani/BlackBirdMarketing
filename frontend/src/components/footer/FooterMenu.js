import { Col, Row, Select } from 'antd';
import { arrowUpOutline, facebook, globe, instagram, linkedin, logo, twitter } from '../../public/images';

export const FooterMenu = () => {
  const { Option } = Select;

  return (
    <div className="footer-menu">
      <div className="container">
        <Row>
          <Col xxl={{ span: 11 }} xl={{ span: 24 }}>
            <div className="logo-wrapper">
              <img src={logo.default} alt="logo" />
              <h3>Coinz</h3>
            </div>
            <p className="md">Integer id orci sed ante tincidunt tincidunt sit amet sed libero. </p>

            <div className="quick-links">
              <h4>Quick Links</h4>

              <ul>
                <li>Sed imperdiet enim.</li>
                <li>Vivamus sit amet.</li>
                <li>Cras convallis lacus</li>
                <li>Integer orci justo.</li>
                <li>Nam posuere accumsan.</li>
                <li>Integer id orci sed</li>
              </ul>
            </div>
          </Col>
          <Col xxl={{ offset: 6, span: 7 }} xl={{ span: 24 }}>
            <div className="social-links">
              <a href="#">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="#">
                <img src={linkedin} alt="linkedin" />
              </a>
              <a href="#">
                <img src={twitter} alt="twitter" />
              </a>
              <a href="#">
                <img src={instagram} alt="instagram" />
              </a>
            </div>

            <Select
              suffixIcon={<img src={arrowUpOutline.default} alt="arrow" />}
              defaultValue="en"
              className="language-change"
            >
              <Option value="en">
                <img src={globe} alt="globe" /> English - En
              </Option>
              <Option value="sq">
                <img src={globe} alt="globe" /> Shqip - Sq
              </Option>
            </Select>

            <p className="md">© Luxi Theme 2019</p>
          </Col>
        </Row>
      </div>
    </div>
  );
};
