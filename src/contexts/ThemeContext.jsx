/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // KODE INI UNTUK SETTING TEMA PERANGKAT
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme-dicoding-open-discussion') || 'light',
  );

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      // mendapatkan nilai tema baru berdasarkan state sebelumnya
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      // menyimpan nilai tema baru ke local storage
      localStorage.setItem('theme-dicoding-open-discussion', newTheme);
      // mengembalikan state dengan nilai theme terbaru.
      return newTheme;
    });
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
