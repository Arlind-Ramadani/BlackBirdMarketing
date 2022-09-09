export const light = () => {
  return {
    type: 'LIGHT',
  };
};

export const dark = () => {
  return {
    type: 'DARK',
  };
};

export const setTheme = (colorScheme) => {
  if (colorScheme === 'light') {
    return { type: 'DARK' };
  } else {
    return { type: 'LIGHT' };
  }
};
