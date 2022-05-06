import { ThemeContext } from '@emotion/react';
import { useEffect, useState } from 'react';
import { ProductView } from '../shared/components';
import { api } from '../shared/services/api';
//import { useAppStoreContext } from '../shared/contexts';
//find by id =state code
//const {code} = useAppStoreContext()

interface TProduct {
	title: string;
	image: string;
	price: number;
	_id: any;
	quantity?: number;
	description: string;
  }

export const Product = () => {
	const [ productById, setProductById] = useState({
		_id:'',
		title:'',
		image:'',
		description:'',
		category:'',
		quantity:0,
		price:0,
	});
	const code = sessionStorage.getItem('id_product');	
	useEffect(()=> {
		api.get(`product/${code}`)
			.then((response)=>{
				setProductById(response.data);
			});
	}, [code]);



	return(
		<ProductView title={productById.title} image={productById.image} price={productById.price} _id={productById._id} description={productById.description}/>
	);
};