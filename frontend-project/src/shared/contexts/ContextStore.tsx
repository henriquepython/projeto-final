import React, { createContext, useContext, useState } from 'react';

interface IProductListProps {
    products: ReadonlyArray<{
      title: string;
      image: string;
      price: number;
      productId: string;
    }>;
  }


interface IStoreContextData {
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  clothes: [];
  setClothes: React.Dispatch<React.SetStateAction<[]>>;
}

const ContextStore = createContext({} as IStoreContextData);

export const useAppStoreContext = () => {
	return useContext(ContextStore);
};


export const AppStoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [code, setCode] = useState('');
	const [ user, setUser] = useState('');
	const [search, setSearch] = useState('');
	const [clothes, setClothes] = useState([]);
  
	return (
	//values = states
		<ContextStore.Provider value={{ code, setCode, user, setUser, search, setSearch, clothes, setClothes }}>
			{children}
		</ContextStore.Provider>
	);
};