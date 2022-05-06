import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { Box, Button } from '@mui/material';
import { api } from '../services/api';

const Img = styled('img')({
	margin: 'auto',
	display: 'flex',
	justifyContent: 'center',
	flexDirection: 'row',
	maxWidth: '100%',
	maxHeight: '100%',
});

interface IProductProps {
  title: string;
  image: string;
  price: number;
  _id: string;
}

export const ProductItem = (props: IProductProps) => {
	const { title, image, price, _id } = props;

	const handleBuyCart = async() => {
		const quantity = 1;
		const userId = sessionStorage.getItem('id_user');
		const buyProduct = {
			title: title,
			image: image,
			price: price,
			quantity: quantity,
			userId: {_id: userId},
			productId: {_id: _id}
		};

		if (userId === null ){
			document.location.href='/signup';
		}

		await api.post('/cart', buyProduct)
			.then(()=>{
				document.location.href = '/cart';
			})
			.catch((err)=>{
				console.log(err);
			});

	};

	const handleAddCart = async(event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const input = new FormData(event.currentTarget);
		const quantity = Number(input.get('quantity'));
		const userId = sessionStorage.getItem('id_user');
		const addCart = {
			title: title,
			image: image,
			price: price,
			quantity: quantity,
			userId: {_id: userId},
			productId: {_id: _id}
		};

		await api.post('/cart', addCart)
			.then(()=>{
				alert('produto adicionado ao carrinho!');
			})
			.catch((err)=>{
				console.log(err);
			});
	};

	const getId = async() => {
		sessionStorage.setItem('id_product', `${_id}`);
		document.location.href= '/product';
	};

	return (
		<Paper
			sx={{
				p: 2,
				margin: 'auto',
				maxWidth: 500,
				flexGrow: 1,
				transition: 'all linear 0.4s',
				backgroundColor: (theme) =>	theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
				'&:hover': {
					transform: 'scale(1.1)'
				}
			}}
		>
			<Grid container spacing={1}>
				<Grid item>
					<ButtonBase onClick={getId} sx={{ mb: 1 }}>
						<Img 
							key={_id}
							alt="complex"
							src={image ? image : 'https://source.unsplash.com/R53t-Tg6J4c'}
							sx={{borderRadius: 2, width: '100vw', height: 150}} 
						/>
					</ButtonBase>
				</Grid>
				<Grid item>
					<Grid item>
						<Typography gutterBottom variant="subtitle1" component="div">
							{title}
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant='caption' color="text.secondary">
							{_id}
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant="subtitle1" component="div">
              Preço: ${price}
						</Typography>
						<Box component="form" noValidate={false} onSubmit={handleAddCart}>
							<Box 
								component="input"
								min='1'
								required={true}
								placeholder='Qtd'
								id='quantity'
								name='quantity'
								type='number'
								sx={{width: '30%', height: '6vh', mr: 4}}
							/>
							<Button 
								type='submit'
								sx={{ 
									cursor: 'pointer',
									color: 'black',
									mt: 1,
									border: 1,
									ml:4,
									transition: 'all linear 0.4s',
									'&:hover': {
										backgroundColor: 'blue',
										color: 'white'
									}
								}}
							>
								<AddShoppingCartOutlinedIcon />
							</Button>
							<Button 
								onClick={handleBuyCart}
								fullWidth
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
								Comprar
							</Button>
						</Box>
					</Grid>
				</Grid>
			</Grid>
		</Paper>
	);
};
