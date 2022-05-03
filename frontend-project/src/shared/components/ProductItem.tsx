import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { useAppStoreContext } from '../contexts';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { Button } from '@mui/material';



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

interface IProductProps {
  title: string;
  image: string;
  price: number;
  _id: any;
  quantity?: number;
}

export const ProductItem = (props: IProductProps) => {
	const { title, image, price, _id } = props;
  
	const { setCode } = useAppStoreContext();

	const getId = () => {
		setCode(_id);
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
						<Img key={_id} alt="complex" src={image} sx={{borderRadius: 2, width: '100vw', height: 150}} />
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
							{_id}
						</Typography>
					</Grid>
          
					<Grid item>
						<Typography variant="subtitle1" component="div">
              Preço: ${price}
						</Typography>
						<Button 
							//onClick={addCart}
							sx={{ 
								cursor: 'pointer',
								color: 'black',
								mt: 1,
								border: 1,
								transition: 'all linear 0.4s',
								'&:hover': {
									backgroundColor: 'blue',
									color: 'white'
								}
							}}
						>
							<AddShoppingCartOutlinedIcon /> Add Carrinho
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</Paper>
	);
};
