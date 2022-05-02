import React, { createContext, useContext } from 'react';

interface IStoreContextData {
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}
const ContextStore = createContext({} as IStoreContextData);

export const useAppStoreContext = () => {
	return useContext(ContextStore);
};


export const AppStoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [code, setCode] = React.useState('');
	const [ user, setUser] = React.useState('');
	const [search, setSearch] = React.useState('');
  
	return (
	//values = states
		<ContextStore.Provider value={{ code, setCode, user, setUser, search, setSearch  }}>
			{children}
		</ContextStore.Provider>
	);
};