import React from 'react';

export const FilledButton = (text) => {
  return (
    <>
      <button className="btn btn-filled">{text.text}</button>
    </>
  );
};
