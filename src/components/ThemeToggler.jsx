import React from 'react';

const ThemeToggler = ({ toggleTheme, currentTheme }) => {
  return (
    <div className="theme-toggler">
      <button onClick={toggleTheme} className="theme-btn">
        Перемкнути на {currentTheme === 'light' ? 'Темну' : 'Світлу'} тему
      </button>
    </div>
  );
};

export default ThemeToggler;