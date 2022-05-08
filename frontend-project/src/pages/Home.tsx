import { useEffect, useState } from 'react';
import { BannerCategory, Carrousel, CarrouselItem } from '../shared/components';
import { api } from '../shared/services/api';

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
	const [clothesCarrousel, setClothesCarrousel] = useState<IProductAll[]>([]);
	const [sportsCarrousel, setSportsCarrousel] = useState<IProductAll[]>([]);
	const [eletronicsCarrousel, setEletronicsCarrousel] = useState<IProductAll[]>([]);

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
			<CarrouselItem products={eletronicsCarrousel} category='Eletronicos'/>
			<CarrouselItem products={sportsCarrousel} category='Esportes'/>
		</>
	);
};