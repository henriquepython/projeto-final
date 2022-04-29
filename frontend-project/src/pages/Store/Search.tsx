import { Box } from "@mui/material";
import { ProductList } from "../../shared/components/Cart/ProductList";

const products = [
    { title: 'Clothes', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, productId: 'djfs'},
    { title: 'Clothes', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, productId: 'djfs'},
    { title: 'Clothes', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, productId: 'djfs'},
    { title: 'Clothes', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, productId: 'djfs'},
    { title: 'Clothes', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, productId: 'djfs'},
    { title: 'Clothes', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, productId: 'djfs'},
    { title: 'Clothes', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, productId: 'djfs'},
    { title: 'Clothes', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, productId: 'djfs'},
    { title: 'Clothes', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, productId: 'djfs'},
     ]
  //fazer chamada api cart findByname products com o state search

export const Search = () => {
    return (
        <Box sx={{ width: '100vw'}}>
                <ProductList products={products}  />
        </Box>
    );
};