//find by id =state code
//const {code} = useAppStoreContext()
const product = {
     title: 'Technology',
     image: 'https://source.unsplash.com/ojZ4wJNUM5w',
     price: 1,
     productId: 'djfs',
     quantity: 1,
     descriptions: 'ksfkjdjljfgçl'
}

import { ProductView } from "../shared/components";
import { useAppStoreContext } from "../shared/contexts";

export const Product = () => {
    return(
        <ProductView title={product.title} image={product.image} price={product.price} productId={product.productId} quantity={product.quantity} descriptions={product.descriptions}/>
    );
}