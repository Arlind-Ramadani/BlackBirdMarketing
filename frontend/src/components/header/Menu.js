import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logo, moon, sun } from '../../public/images';
import { setTheme } from '../../redux/actions';
import { Authentication } from './Authentication';
import { Navigation } from './Navigation';

export const Menu = () => {
  const colorScheme = useSelector((state) => state);
  const dispatch = useDispatch();
  const { innerWidth: width } = window;
  const [mobileMenu, setMobileMenu] = useState(width > 1300 ? false : true);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <div className={'header-wrapper' + (mobileMenu ? '' : ' active')}>
      <img src={logo.default} alt="logo" className="logo" />
      <div className={'menubar' + (mobileMenu ? '' : ' active')} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Navigation mobileMenu={mobileMenu} />
      <div className={'auth-wrapper' + (mobileMenu ? '' : ' active')}>
        <Authentication mobileMenu={mobileMenu} />
        <button
          className={'btn colorScheme-btn' + (mobileMenu ? '' : ' active')}
          onClick={() => dispatch(setTheme(colorScheme))}
        >
          {colorScheme === 'light' ? <img src={moon} alt="moon" /> : <img src={sun} alt="sun" />}
        </button>
      </div>
    </div>
  );
};
