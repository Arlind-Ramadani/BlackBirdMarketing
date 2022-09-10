import { Progress } from 'antd';
import { bitcoin, iota, mnr, nem, octagon, xrp } from '../../public/images';

export const Statistics = () => {
  return (
    <div className="statistics-wrapper">
      <div className="statistics-container">
        <img src={octagon} alt="octagon" />
        <h2>Fusce placerat enim et odio placerat enim </h2>
        <p>Non aliquip cillum qui laboris et quis reprehenderit laboris quis reprehenderit.</p>

        <div className="statistic-container">
          <div className="statistic-item">
            <div className="title">
              <img src={bitcoin.default} alt="bitcoin" />
              <p>BTC</p>
            </div>
            <div className="line">
              <div className="unit">
                <p>
                  <span>USD</span> 5.000
                </p>
                <p>
                  <span>USD</span> 15.000
                </p>
              </div>
              <Progress percent={80} strokeColor={'#FDA317'} />
            </div>
          </div>
          <div className="statistic-item">
            <div className="title">
              <img src={xrp.default} alt="xrp" />
              <p>XRP</p>
            </div>
            <div className="line">
              <div className="unit">
                <p>
                  <span>USD</span> 5.000
                </p>
                <p>
                  <span>USD</span> 15.000
                </p>
              </div>
              <Progress percent={50} strokeColor={'#21D3D7'} />
            </div>
          </div>
          <div className="statistic-item">
            <div className="title">
              <img src={nem.default} alt="nem" />
              <p>NAN</p>
            </div>
            <div className="line">
              <div className="unit">
                <p>
                  <span>USD</span> 5.000
                </p>
                <p>
                  <span>USD</span> 15.000
                </p>
              </div>
              <Progress percent={90} strokeColor={'#548CCC'} />
            </div>
          </div>
          <div className="statistic-item">
            <div className="title">
              <img src={mnr.default} alt="mnr" />
              <p>MNR</p>
            </div>
            <div className="line">
              <div className="unit">
                <p>
                  <span>USD</span> 5.000
                </p>
                <p>
                  <span>USD</span> 15.000
                </p>
              </div>
              <Progress percent={40} strokeColor={'#FF6602'} />
            </div>
          </div>
          <div className="statistic-item">
            <div className="title">
              <img src={iota.default} alt="iota" />
              <p>IOT</p>
            </div>
            <div className="line">
              <div className="unit">
                <p>
                  <span>USD</span> 5.000
                </p>
                <p>
                  <span>USD</span> 15.000
                </p>
              </div>
              <Progress percent={90} strokeColor={'#CE07D4'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
