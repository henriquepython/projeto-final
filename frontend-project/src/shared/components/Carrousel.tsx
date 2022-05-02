import { Box, styled } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const products = [
	{ title: 'Sports', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, productId: 'djfs'},
	{ title: 'Sports', image: 'https://source.unsplash.com/mwa_nzFpnJw', price: 1, productId: 'djfs'},
	{ title: 'Sports', image: 'https://source.unsplash.com/TS--uNw-JqE', price: 1, productId: 'djfs'},
	{ title: 'Sports', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, productId: 'djfs'},
	{ title: 'Sports', image: 'https://source.unsplash.com/mwa_nzFpnJw', price: 1, productId: 'djfs'},
	{ title: 'Sports', image: 'https://source.unsplash.com/TS--uNw-JqE', price: 1, productId: 'djfs'},
	{ title: 'Sports', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, productId: 'djfs'},
	{ title: 'Sports', image: 'https://source.unsplash.com/mwa_nzFpnJw', price: 1, productId: 'djfs'},
	{ title: 'Sports', image: 'https://source.unsplash.com/TS--uNw-JqE', price: 1, productId: 'djfs'},
];

//findll products
const Img = styled('img')({
	margin: 'auto',
	display: 'block',
	maxWidth: '100%',
	maxHeight: '100%',
});

export const Carrousel = () => {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 1,
			slidesToSlide: 1
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 1,
			slidesToSlide: 1
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 1 ,
			slidesToSlide: 1
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1
		}
	};
	return(
		<>
			<Box sx={{ width: '100%'}}>
				<Carousel 
					autoPlay= {true}
					autoPlaySpeed= {1600}
					showDots= {true}
					arrows= {false}
					infinite={true}
					slidesToSlide={1}
					responsive={responsive}
				>
					{products.map((item) => (
						<Img key={item.productId} src={item.image} sx={{width: '100%', height: 500}} />
					))}
				</Carousel>
			</Box>
		</>
	);
};