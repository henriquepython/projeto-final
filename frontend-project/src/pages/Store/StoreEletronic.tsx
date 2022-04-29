import { Box } from "@mui/material";
import { ProductList } from "../../shared/components/Cart/ProductList";

const products = [
    { title: 'Technology', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, productId: 'djfs'},
    { title: 'Technology', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, productId: 'djfs'},
    { title: 'Technology', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, productId: 'djfs'},
    { title: 'Technology', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, productId: 'djfs'},
    { title: 'Technology', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, productId: 'djfs'},
    { title: 'Technology', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, productId: 'djfs'},
  ]
  //fazer chamada api cart findByCategory eletronics

export const StoreEletronic = () => {
    return (
        <Box sx={{ width: '100vw'}}>
                <ProductList products={products}  />
        </Box>
    );
};