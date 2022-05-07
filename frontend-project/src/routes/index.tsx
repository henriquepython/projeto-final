import { Navigate, Route, Routes } from 'react-router-dom';
import { isLogged } from '../shared/utils/IsLogged';
import { 
	Accounts,
	Admin,
	Cart,
	Checkout,
	CreateProduct,
	EditProduct,
	Home,
	Product,
	Search,
	SignIn,
	SignInAdmin,
	SignUp,
	StoreClothes,
	StoreEletronic,
	StoreSports
} from '../pages';

export const AppRoutes = () => {
	
	
	return (
		<Routes>
			<Route path="/home" element={<Home />} />
			<Route path="/signin" element={<SignIn />} />
			<Route path="/signinadmin" element={<SignInAdmin />} />
			<Route path="/signup" element={<SignUp />} />
			<Route path="/cart" element={<Cart />} />
			<Route path="/checkout" element={<Checkout />} />
			<Route path="/storeclothes" element={<StoreClothes />} />
			<Route path="/storesports" element={<StoreSports />} />
			<Route path="/storeeletronics" element={<StoreEletronic />} />
			<Route path="/search" element={<Search />} />
			<Route path="/product" element={<Product />} />
			<Route path="/accounts" element={<Accounts />} />
			{isLogged() ? <Route path="/admin" element={<Admin />} /> : <Route path="/admin" element={<SignInAdmin />} />}
			{isLogged() ? <Route path="/createproduct" element={<CreateProduct/>} /> : <Route path="/createproduct" element={<Home />} />}
			{isLogged() ? <Route path="/editproduct" element={<EditProduct/>} /> : <Route path="/editproduct" element={<Home />} />}

			<Route path="*" element={<Navigate to='/home' />} />
		</Routes>
        
	);
};