import { BannerCategory, Carrousel, CarrouselItem } from '../shared/components';

export const Home = () => {
	return (
		<>
			<Carrousel />
			<BannerCategory />
			<CarrouselItem category='Roupas'/>
			<CarrouselItem category='Eletronicos'/>
			<CarrouselItem category='Esportes'/>
		</>
	);
};