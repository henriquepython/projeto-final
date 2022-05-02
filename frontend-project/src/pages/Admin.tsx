//find by all order

import { TableOrdersAdmin, TableProductAdmin } from "../shared/components";

const order = [
    {
    totalPrice: 1, status: 'OK', userId:'fiaif' 
    }]

    const products = [
        { title: 'Technology', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, productId: 'djfs', quantity: 1 },
        { title: 'Technology', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, productId: 'djfs', quantity: 1 },
        { title: 'Technology', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, productId: 'djfs', quantity: 1 },
        { title: 'Technology', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, productId: 'djfs', quantity: 1 },
        { title: 'Technology', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, productId: 'djfs', quantity: 1 },
        { title: 'Technology', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, productId: 'djfs', quantity: 1 },
        
      ]
    

export const Admin = () => {
    return (
        <>
            <TableOrdersAdmin orders={order} />
            <TableProductAdmin products={products} />
        </>
    );
}