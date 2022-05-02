//find by id =state 
const product = {
     title: 'Technology',
     image: 'https://source.unsplash.com/ojZ4wJNUM5w',
     price: 1,
     productId: 'djfs',
     quantity: 1
}

import { ProductView } from "../shared/components";

export const Product = () => {
    return(
        <ProductView title={product.title} image={product.image} price={product.price} productId={product.productId} quantity={product.quantity} />
    );
}