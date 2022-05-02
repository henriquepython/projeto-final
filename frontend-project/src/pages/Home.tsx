import { BannerCategory, Carrousel, CarrouselItem } from '../shared/components';

export const Home = () => {
	return (
		<>
			<Carrousel />
			<BannerCategory />
			<CarrouselItem products={} category='Roupas'/>
			<CarrouselItem products={} category='Eletronicos'/>
			<CarrouselItem products={} category='Esportes'/>
		</>
	);
};