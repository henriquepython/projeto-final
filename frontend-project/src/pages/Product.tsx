import { useEffect, useState } from 'react';
import { ProductView } from '../shared/components';
import { useAppStoreContext } from '../shared/contexts';
import { api } from '../shared/services/api';
//import { useAppStoreContext } from '../shared/contexts';
//find by id =state code
//const {code} = useAppStoreContext()
interface IProduct {
	title: string;
	image: string;
	price: number;
	_id: any;
	quantity: number;
	description: string;
}


export const Product = () => {
	const [productView, setproductView] = useState<IProduct>({
		title: '',
		image: '',
		price: 0,
		_id: '',
		quantity: 0,
		description: '',
	});
	
	const {code} = useAppStoreContext();
	

	useEffect(()=> {
		api.get<IProduct>(`product/${code}`)
			.then((response) => {
				console.log(JSON.stringify(response.data));
				setproductView(response.data);
			});
	}, []);
	return(
		<ProductView title={productView.title} image={productView.image} price={productView.price} _id={productView._id} description={productView.description}/>
	);
};