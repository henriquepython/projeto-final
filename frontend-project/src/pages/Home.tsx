import { useEffect, useState } from 'react';
import { BannerCategory, Carrousel, CarrouselItem } from '../shared/components';
import { api } from '../shared/services/api';

const productsClothes = [
	{ title: 'Clothes', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, _id: 'djfs'},
	{ title: 'Clothes', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, _id: 'djfs'},
	{ title: 'Clothes', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, _id: 'djfs'},
	{ title: 'Clothes', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, _id: 'djfs'},
];

const productsSports = [
	{ title: 'Sports', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, _id: 'djfs'},
	{ title: 'Sports', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, _id: 'djfs'},
	{ title: 'Sports', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, _id: 'djfs'},
	{ title: 'Sports', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, _id: 'djfs'},
];

const productsEletronics = [
	{ title: 'Eletronics', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, _id: 'djfs'},
	{ title: 'Eletronics', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, _id: 'djfs'},
	{ title: 'Eletronics', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, _id: 'djfs'},
	{ title: 'Eletronics', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, _id: 'djfs'},
];
export const Home = () => {
	const [clothesCarrousel, setClothesCarrousel] = useState([...productsClothes]);

	useEffect(()=> {
		api.get('product/category/Roupas')
			.then((response) => {
				console.log(JSON.stringify(response.data));
				setClothesCarrousel(response.data);
			});
	}, []);

	const [sportsCarrousel, setSportsCarrousel] = useState([...productsSports]);

	useEffect(()=> {
		api.get('product/category/Esportes')
			.then((response) => {
				console.log(JSON.stringify(response.data));
				setSportsCarrousel(response.data);
			});
	}, []);
	const [eletronicsCarrousel, setEletronicsCarrousel] = useState([...productsEletronics]);

	useEffect(()=> {
		api.get('product/category/Eletronicos')
			.then((response) => {
				console.log(JSON.stringify(response.data));
				setEletronicsCarrousel(response.data);
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