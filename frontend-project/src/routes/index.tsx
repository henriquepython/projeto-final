
import { Navigate, Route, Routes } from 'react-router-dom';
import { Cart, Home, SignIn, SignInAdmin, SignUp, StoreClothes, StoreEletronic, StoreSports } from '../pages';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signinadmin" element={<SignInAdmin />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/storeclothes" element={<StoreClothes />} />
            <Route path="/storesports" element={<StoreSports />} />
            <Route path="/storeeletronics" element={<StoreEletronic />} />

            <Route path="*" element={<Navigate to='/home' />} />
        </Routes>
        
    );
};