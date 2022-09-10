import React from 'react';
import { Header } from '../components/header/Header';
import { Hero } from '../components/hero/Hero';
import { FAQ } from '../components/faq/FAQ';
import { Footer } from '../components/footer/Footer';
import { Testimonials } from '../components/testimonials/Testimonials';
import { Statistics } from '../components/statistics/Statistics';
import { Features } from '../components/features/Features';
import { Promotions } from '../components/promotions/Promotions';

export const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Promotions />
      <Features />
      <Statistics />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  );
};
