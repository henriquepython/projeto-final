import { useEffect, useState } from 'react';
import { ProductView } from '../shared/components';
import { api } from '../shared/services/api';
//import { useAppStoreContext } from '../shared/contexts';
//find by id =state code
//const {code} = useAppStoreContext()

interface IProduct {
	_id: string;
	title: string;
	image: string;
	description: string;
	category:string;
	quantity: number;
	price: number;
  }

export const Product = () => {
	const [ productById, setProductById] = useState<IProduct>({} as IProduct);

	const code = sessionStorage.getItem('id_product');	
	useEffect(()=> {
		api.get(`product/${code}`)
			.then((response)=>{
				setProductById(response.data);
			});
	}, []);

	return(
		<ProductView 
			title={productById.title}
			image={productById.image}
			quantity={productById.quantity}
			price={productById.price}
			_id={productById._id}
			description={productById.description}
		/>
	);
};