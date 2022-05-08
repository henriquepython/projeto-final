import { Box, ButtonBase, Container, Grid, Paper, styled, Typography } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
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

const Img = styled('img')({
	margin: 'auto',
	display: 'flex',
	justifyContent: 'center',
	flexDirection: 'row',
	maxWidth: '100%',
	maxHeight: '100%',
});


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
	
	const getId = async(_id: string) => {
		sessionStorage.setItem('id_product', `${_id}`);
		document.location.href= '/product';
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
						<ButtonBase 
							onClick={()=>getId(item._id)}
							sx={{ 
								mb: 1,
								transition: 'all linear 0.4s',
								'&:hover': {
									transform: 'scale(1.1)',						
								}
							}}
						>
							<Paper
								sx={{
									borderRadius: 2,
									py:2,
									px:2,
									m: 2,
									maxWidth: 250,
									height: 220,

									backgroundColor: (theme) =>	theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
				
								}}
							>
								<Grid>
									<Grid>
										<Img 
											src={item.image}
											sx={{
												borderRadius: 4,
												width: '16vw',
												height: 100,	
												mb: 1,
											}} 
										/>
									</Grid>
									<Grid item>
										<Grid item>
											<Typography gutterBottom variant="subtitle1" component="div">
												{item.title}
											</Typography>
										</Grid>
										<Grid item>
											<Typography variant="subtitle1" align='left' component="div">
            R$ {item.price}
											</Typography>
										</Grid>
										<Grid item>
											<Typography variant="caption" align='left' component="div">
											ou 6x de {`R$ ${(item.price/6).toFixed(2)}`}
											</Typography>
										</Grid>
									</Grid>
								</Grid>
							</Paper>
						</ButtonBase>
					</Box>
				))}
			</Carousel>
		</Container>
	);
};