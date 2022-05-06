import { Box, Container, Typography } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ProductItem } from './ProductItem';
import { useAppThemeContext } from '../contexts';

interface CarrouselProps {
	category: string;
	products: ReadonlyArray<{
		title: string;
		image: string;
		price: number;
		_id: string;
	}>;
}

export const CarrouselItem = (props: CarrouselProps) => {
	const {category, products} = props;
	const { themeName } = useAppThemeContext();
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1
		}
	};
	
	return(
		<Container sx={{ my: 5}}>
			<Typography 
				sx={{
					mb: 4,
					fontSize: 30,
					display: 'flex',
					justifyContent: 'center',
					width: '100%',
					color: themeName === 'light' ? 'black' : 'white'
				}}
			>
				{category}
			</Typography>
			<Carousel 
				autoPlay= {false}
				arrows= {true}
				centerMode= {true}
				responsive={responsive}
			>
				{products.map((item, index) => (
					<Box key={index} sx={{width: '90%'}}>
						<ProductItem 
							title={item.title}
							image={item.image}
							price={item.price}
							_id={item._id}/>
					</Box>
				))}
			</Carousel>
		</Container>
	);
};