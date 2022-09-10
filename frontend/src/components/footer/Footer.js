import React from 'react';
import { FooterMenu } from './FooterMenu';
import { Subscription } from './Subscription';

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <Subscription />
        <FooterMenu />
      </div>
    </div>
  );
};
