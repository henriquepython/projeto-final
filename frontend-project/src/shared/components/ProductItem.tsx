import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { useAppStoreContext } from '../contexts';



const Img = styled('img')({
	margin: 'auto',
	display: 'flex',
	justifyContent: 'center',
	flexDirection: 'row',
	maxWidth: '100%',
	maxHeight: '100%',
	transition: 'all linear 0.4s',
	'&:hover': {
		filter: 'grayscale(100%)',
		transform: 'scale(1.1)'
	}
});

interface ProductProps {
  title: string;
  image: string;
  price: number;
  productId: string;
  quantity?: number;
  children: React.ReactNode
}

export const ProductItem = (props: ProductProps) => {
	const { title, image, price, productId, quantity, children } = props;
  
	const { setCode } = useAppStoreContext();

	const getId = () => {
		setCode(productId);
	};
	return (
		<Paper
			sx={{
				p: 2,
				margin: 'auto',
				maxWidth: 500,
				flexGrow: 1,
				backgroundColor: (theme) =>
					theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
			}}
		>
			<Grid container spacing={1}>
				<Grid item>
					<ButtonBase href='/product' onClick={getId} sx={{ mb: 1 }}>
						<Img key={productId} alt="complex" src={image} sx={{borderRadius: 2}} />
					</ButtonBase>
				</Grid>
				<Grid item>
          
					<Grid item>
						<Typography gutterBottom variant="subtitle1" component="div">
							{title}
						</Typography>
					</Grid>

					<Grid item>
						<Typography variant="subtitle2" color="text.secondary">
							{productId}
						</Typography>
					</Grid>
          
					<Grid item>
						<Typography variant="subtitle1" component="div">
              Preço: ${price}
						</Typography>
						{children}
					</Grid>
				</Grid>
			</Grid>
		</Paper>
	);
};
