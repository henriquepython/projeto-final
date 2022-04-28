
import { Navigate, Route, Routes } from 'react-router-dom';
import { Cart, Home, SignInAdmin, StoreClothes, StoreEletronic, StoreSports } from '../pages';
import { SignIn } from '../pages';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signinadmin" element={<SignInAdmin />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/storeclothes" element={<StoreClothes />} />
            <Route path="/storesports" element={<StoreSports />} />
            <Route path="/storeeletronics" element={<StoreEletronic />} />

            <Route path="*" element={<Navigate to='/home' />} />
        </Routes>
        
    );
};