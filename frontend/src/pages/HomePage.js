import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../components/header/Header';
import { setTheme } from '../redux/actions';
import { Button } from 'antd';
import { Hero } from '../components/hero/Hero';
import { FAQ } from '../components/faq/FAQ';
import { Footer } from '../components/footer/Footer';
import { Testimonials } from '../components/testimonials/Testimonials';

export const HomePage = () => {
  const colorScheme = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <Hero />
      Color Theme: {colorScheme}
      <Button onClick={() => dispatch(setTheme(colorScheme))}>Switch theme</Button>
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  );
};
