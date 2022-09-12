import React from 'react';

export const Authentication = (mobileMenu) => {
  return (
    <>
      <button className={'sign-in-button' + (mobileMenu.mobileMenu ? '' : ' active')}>Sign In</button>
      <button className={'btn register-button' + (mobileMenu.mobileMenu ? '' : ' active')}>Register</button>
    </>
  );
};
