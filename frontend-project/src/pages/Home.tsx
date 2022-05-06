import { useEffect, useState } from 'react';
import { BannerCategory, Carrousel, CarrouselItem } from '../shared/components';
import { api } from '../shared/services/api';

const productsClothes = [
	{ title: 'Clothes', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, _id: 'djfs',category: 'Roupas', quantity: 10,description: 'descrição dos produtos'},
	{ title: 'Clothes', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, _id: 'djfs',category: 'Roupas', quantity: 10,description: 'descrição dos produtos'},
	{ title: 'Clothes', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, _id: 'djfs',category: 'Roupas', quantity: 10,description: 'descrição dos produtos'},
	{ title: 'Clothes', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, _id: 'djfs',category: 'Roupas', quantity: 10,description: 'descrição dos produtos'}
];

const productsSports = [
	{ title: 'Sports', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, _id: 'djfs',category: 'Roupas', quantity: 10,description: 'descrição dos produtos'},
	{ title: 'Sports', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, _id: 'djfs',category: 'Roupas', quantity: 10,description: 'descrição dos produtos'},
	{ title: 'Sports', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, _id: 'djfs',category: 'Roupas', quantity: 10,description: 'descrição dos produtos'},
	{ title: 'Sports', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, _id: 'djfs',category: 'Roupas', quantity: 10,description: 'descrição dos produtos'}
	
];

const productsEletronics = [
	{ title: 'Eletronics', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, _id: 'djfs',category: 'Roupas', quantity: 10,description: 'descrição dos produtos'},
	{ title: 'Eletronics', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, _id: 'djfs',category: 'Roupas', quantity: 10,description: 'descrição dos produtos'},
	{ title: 'Eletronics', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, _id: 'djfs',category: 'Roupas', quantity: 10,description: 'descrição dos produtos'},
	{ title: 'Eletronics', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, _id: 'djfs',category: 'Roupas', quantity: 10,description: 'descrição dos produtos'}
];

interface IProductAll {
	title: string;
	image: string;
	description: string;
	category: string;
	price: number;
	quantity: number;
	_id: string;
}

export const Home = () => {
	const [clothesCarrousel, setClothesCarrousel] = useState<IProductAll[]>([...productsClothes]);
	const [sportsCarrousel, setSportsCarrousel] = useState<IProductAll[]>([...productsSports]);
	const [eletronicsCarrousel, setEletronicsCarrousel] = useState<IProductAll[]>([...productsEletronics]);

	useEffect(()=> {
		const clothes = api.get('product/category/Roupas');
		const sports = api.get('product/category/Esportes');
		const eletronics = api.get('product/category/Eletronicos');
			
		Promise.all([clothes, sports, eletronics])
			.then((response) => {
				setClothesCarrousel(response[0].data);
				setSportsCarrousel(response[1].data);
				setEletronicsCarrousel(response[2].data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	
	return (
		<>
			<Carrousel />
			<BannerCategory />
			<CarrouselItem products={clothesCarrousel} category='Roupas'/>
			<CarrouselItem products={sportsCarrousel} category='Eletronicos'/>
			<CarrouselItem products={eletronicsCarrousel} category='Esportes'/>
		</>
	);
};