import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../components/header/Header';
import { setTheme } from '../redux/actions';
import { Button } from 'antd';

export const HomePage = () => {
  const colorScheme = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      Color Theme: {colorScheme}
      <Button onClick={() => dispatch(setTheme(colorScheme))}>Switch theme</Button>
    </>
  );
};