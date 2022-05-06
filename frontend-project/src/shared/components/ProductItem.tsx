import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { Box, Button, Input } from '@mui/material';
import { api } from '../services/api';



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
  _id: string;
  quantity?: number;
}

export const ProductItem = (props: IProductProps) => {
	const { title, image, price, _id } = props;

	const handleAddCart = async(event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const input = new FormData(event.currentTarget);
		const quantity = Number(input.get('quantity'));
		const userId = localStorage.getItem('id_user');
		await api.post('/cart', {
			title: title,
			image: image,
			price: price,
			quantity: quantity,
			userId: {_id: userId},
			productId: {_id: _id}
		})
			.then(()=>{
				alert('produto adicionado ao carrinho!');
			});

	};

	const getId = async(id: string) => {
		localStorage.setItem('id_product', `${id}`);
		document.location.href= '/product';
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
					<ButtonBase onClick={()=>getId(_id)} sx={{ mb: 1 }}>
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
						<Box component="form" noValidate={false} onSubmit={handleAddCart}>
							<Input required={true} placeholder='Qtd' id='quantity' name='quantity' type='number'/>
							<Button 
								type='submit'
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
						</Box>
					</Grid>
				</Grid>
			</Grid>
		</Paper>
	);
};
