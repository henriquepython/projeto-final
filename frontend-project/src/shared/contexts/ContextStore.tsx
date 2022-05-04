import React, { createContext, useContext, useState } from 'react';

interface IStoreContextData {
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  codeUser: string;
  setCodeUser: React.Dispatch<React.SetStateAction<string>>;
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
}

const ContextStore = createContext({} as IStoreContextData);

export const useAppStoreContext = () => {
	return useContext(ContextStore);
};


export const AppStoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [code, setCode] = useState('');
	const [codeUser, setCodeUser] = useState('');
	const [ user, setUser] = useState('');
	
  
	return (
	//values = states
		<ContextStore.Provider value={{ code, setCode,codeUser, setCodeUser,user, setUser}}>
			{children}
		</ContextStore.Provider>
	);
};