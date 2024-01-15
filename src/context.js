import React from 'react';

export const initial = {
  darkMode: true,
  bgColor: '#1f1e1e',
  fontColor: '#e8e6e3',
};

export const Context = React.createContext(initial);
export const useContext = React.useContext;