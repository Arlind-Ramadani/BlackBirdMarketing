import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../components/header/Header';
import { setTheme } from '../redux/actions';

export const HomePage = () => {
  const colorScheme = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      Color Theme: {colorScheme}
      <button onClick={() => dispatch(setTheme(colorScheme))}>Switch theme</button>
    </>
  );
};
