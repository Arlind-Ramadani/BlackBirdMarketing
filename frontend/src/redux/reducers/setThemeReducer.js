const setThemeReducer = (state = 'dark', action) => {
  switch (action.type) {
    case 'LIGHT':
      return (state = 'light');
    case 'DARK':
      return (state = 'dark');
    default:
      return state;
  }
};

export default setThemeReducer;
