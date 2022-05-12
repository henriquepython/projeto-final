import { createContext, useContext, useState } from 'react';
import { ICart, IContextData, IOrderAll, IOrderByUser, IProductAll, ISearch, IUserAll } from '.';

const Context = createContext({} as IContextData);

export const useAppContext = () => {
	return useContext(Context);
};

export const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [orderUser, setOrderUser] = useState<IOrderByUser[]>([]);
	const [open, setOpen] = useState(true);
	const [orderAll, setOrderAll] = useState<IOrderAll[]>([]);
	const [productAll, setProductAll] = useState<IProductAll[]>([]);
	const [userAll, setUserAll] = useState<IUserAll[]>([]);
	const [activeStep, setActiveStep] = useState(0);
	const [cart, setCart] = useState<ICart[]>([]);
	const [checkout, setCheckout] = useState<ICart[]>([]);
	const [clothes, setClothes] = useState<IProductAll[]>([]);
	const [sports, setSports] = useState<IProductAll[]>([]);
	const [eletronics, setEletronics] = useState<IProductAll[]>([]);
	const [ productById, setProductById] = useState<IProductAll>({} as IProductAll);
	const [anchorNav, setAnchorNav] = useState<null | HTMLElement>(null);
	const [anchorNavAccount, setAnchorNavAccount] = useState<null | HTMLElement>(null);
	const [ search, setSearch] = useState<ISearch>({} as ISearch);

	return (
		<Context.Provider
			value={{ 
				search, setSearch, anchorNav, setAnchorNav,
				anchorNavAccount, setAnchorNavAccount, productById,
				setProductById, eletronics, setEletronics, sports,
				setSports, clothes, setClothes, orderUser, setOrderUser,
				open, setOpen, checkout, setCheckout, orderAll, setOrderAll,
				productAll, setProductAll, userAll, setUserAll, activeStep,
				setActiveStep, cart, setCart
			}}
		>
			{children}
		</Context.Provider>
	);
};