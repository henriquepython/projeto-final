import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { Box, ThemeProvider } from '@mui/material';
import { DarkTheme, LightTheme } from '../themes';

interface IStoreContextData {
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
}
const ContextStore = createContext({} as IStoreContextData);

export const useAppStoreContext = () => {
  return useContext(ContextStore);
};


export const AppStoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [code, setCode] = React.useState('');
  const [ user, setUser] = React.useState('');
  
  return (
    //values = states
    <ContextStore.Provider value={{ code, setCode, user, setUser  }}>
          {children}
    </ContextStore.Provider>
  );
};