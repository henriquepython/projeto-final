import { useEffect } from 'react';
import { BannerCategory, Carrousel, CarrouselItem } from '../shared/components';
import { useAppContext } from '../shared/contexts';
import { api } from '../shared/services/api';

export const Home = () => {
	const { clothes, setClothes, sports, setSports, eletronics, setEletronics } = useAppContext();

	useEffect(()=> {
		const clothes = api.get('product/category/Roupas');
		const sports = api.get('product/category/Esportes');
		const eletronics = api.get('product/category/Eletronicos');
			
		Promise.all([clothes, sports, eletronics])
			.then((response) => {
				setClothes(response[0].data);
				setSports(response[1].data);
				setEletronics(response[2].data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	
	return (
		<>
			<Carrousel />
			<BannerCategory />
			<CarrouselItem products={clothes} category='Roupas'/>
			<CarrouselItem products={eletronics} category='Eletronicos'/>
			<CarrouselItem products={sports} category='Esportes'/>
		</>
	);
};