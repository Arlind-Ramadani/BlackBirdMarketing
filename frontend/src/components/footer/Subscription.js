import React from 'react';
import { FilledButton } from '../button/FilledButton';

export const Subscription = () => {
  return (
    <div className="subscription-wrapper">
      <p className="users-number">1 234 567</p>
      <p className="lg">Users and Counting</p>

      <div className="action">
        <p>What are you waiting for?</p>
        <FilledButton text="GET STARTED" />
      </div>
    </div>
  );
};
