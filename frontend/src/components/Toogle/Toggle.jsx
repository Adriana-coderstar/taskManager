import React from 'react';
import PropTypes from 'prop-types';
import Sun from '../../img/sun.svg';
import Moon from '../../img/moon.svg';
import { ToggleDarkMode } from './Toggle.style';

export const Toggle = ({ theme, toggleTheme }) => {
  return (
    <ToggleDarkMode onClick={toggleTheme}>
      {theme === 'light' ? (
        <img src={Sun} alt="sun image that changes to light mode" />
      ) : (
        <img src={Moon} alt="moon image that changes to dark mode" />
      )}
    </ToggleDarkMode>
  );
};

Toggle.propTypes = {
  theme: PropTypes.string,
  toggleTheme: PropTypes.func,
};
