export interface IOrderByUser {
	totalPrice: number;
	products: [];
	status: string;
	userId: {_id: string};
	_id: string;
}

export interface IOrderAll {
	totalPrice: number;
	products: [];
	status: string;
	userId: string;
	_id: string;
}

export interface IProductAll {
	title: string;
	image: string;
	description: string;
	category: string;
	price: number;
	quantity: number;
	_id: string;
}

export interface IUserAll {
	name: string;
	email: string;
	roles: string;
	phoneNumber: string;
	password: string;
	_id:string;
}

export interface ICart {
	userId: string;
	productId: string;
	quantity: number;
	price: number;
	title: string;
	image: string;
}

export interface ISearch {
	_id: string;
	title: string;
	image: string;
	description: string;
	category: true;
	quantity: number;
	price: number;
}

export interface IContextData {
	orderUser: IOrderByUser[]; 
	setOrderUser: (order: IOrderByUser[]) => void;
	open: boolean;
	setOpen: (open: boolean) => void;
	orderAll: IOrderAll[];
	setOrderAll: (orderAll: IOrderAll[]) => void;
	productAll: IProductAll[];
	setProductAll: (productAll: IProductAll[]) => void;
	userAll: IUserAll[];
	setUserAll: (userAll: IUserAll[]) => void;
	activeStep: number;
	setActiveStep: (active: number) => void;
	cart: ICart[];
	setCart: (cart: ICart[]) => void;
	checkout: ICart[];
	setCheckout: (checkout: ICart[]) => void;
	clothes: IProductAll[];
	setClothes: (clothes: IProductAll[]) => void;
	sports: IProductAll[];
	setSports: (sports: IProductAll[]) => void;
	eletronics: IProductAll[];
	setEletronics: (eletronics: IProductAll[]) => void;
	productById: IProductAll;
	setProductById: (productId: IProductAll) => void;
	search: ISearch;
	setSearch: (search: ISearch) => void;
	anchorNav: null | HTMLElement;
	setAnchorNav: (anchor: null | HTMLElement) => void;
	anchorNavAccount: null | HTMLElement;
	setAnchorNavAccount: (anchorAc: null | HTMLElement) => void;
}