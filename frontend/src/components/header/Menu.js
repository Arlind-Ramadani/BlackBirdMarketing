import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logo, moon, sun } from '../../public/images';
import { setTheme } from '../../redux/actions';
import { Authentication } from './Authentication';
import { Navigation } from './Navigation';

export const Menu = () => {
  const colorScheme = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="header-wrapper">
      <img src={logo.default} alt="logo" className="logo" />
      <Navigation />
      <Authentication />
      <button className="btn colorScheme-btn" onClick={() => dispatch(setTheme(colorScheme))}>
        {colorScheme === 'light' ? <img src={moon} alt="moon" /> : <img src={sun} alt="sun" />}
      </button>
    </div>
  );
};
