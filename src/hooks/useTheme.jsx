/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export const useTheme = () => useContext(ThemeContext);
