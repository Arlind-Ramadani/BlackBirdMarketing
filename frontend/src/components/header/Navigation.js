import React from 'react';

export const Navigation = (mobileMenu) => {
  return (
    <ul className={'navigation-wrapper' + (mobileMenu.mobileMenu ? '' : ' active')}>
      <li>
        <a href="#">Feature</a>
      </li>
      <li>
        <a href="#">How it Works</a>
      </li>
      <li>
        <a href="#">Benefit</a>
      </li>
      <li>
        <a href="#">Testimonials</a>
      </li>
      <li>
        <a href="#">FAQ</a>
      </li>
    </ul>
  );
};
