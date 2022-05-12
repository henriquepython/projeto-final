import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { api } from '../services/api';
import { useAppContext } from '../contexts';

const Img = styled('img')({
	margin: 'auto',
	display: 'flex',
	justifyContent: 'center',
	flexDirection: 'row',
	width: 300,
	height: 300,
});

export const ProductView = () => {
	const { productById } = useAppContext();
 
	const handleAddCart = async(event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const input = new FormData(event.currentTarget);
		const quantities = Number(input.get('quantity'));
		const userId = sessionStorage.getItem('id_user');
		const productView = {
			title: productById.title,
			image: productById.image,
			price: productById.price,
			quantity: quantities,
			userId: {_id: userId},
			productId: {_id: productById._id}
		};

		if (userId === null ){
			document.location.href='/signin';
		}
		
		await api.post('/cart', productView)
			.then(()=>{
				alert('produto adicionado ao carrinho!');
				sessionStorage.setItem('item_cart','true');
				document.location.reload();
			})
			.catch((err)=> {
				console.log(err);
			});
	};

	return (
		<>
			<Paper
				sx={{
					p: 2,
					my: 2,
					mx: 'auto',
					maxWidth: 500,
					flexGrow: 1,
					backgroundColor: (theme) =>	theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
				}}
			>
				<Grid item>
					<Img src={productById.image} sx={{mb:4,borderRadius: 2}} />
				</Grid>
				<Grid item>
					<Grid item>
						<Typography gutterBottom variant="h6" component="div">
							{productById.title}
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant="subtitle2" color="text.secondary">
							{productById._id}
						</Typography>
					</Grid>
					<Typography variant='subtitle2' component="div" sx={{mb: 2}}> 
                        Stock: {productById.quantity}
					</Typography>
					<Grid item>
						<Typography variant="subtitle1" component="div">
                            R$ {productById.price}
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant="caption" align='left' component="div">
                            ou 6x de {`R$ ${(productById.price/6).toFixed(2)}`}
						</Typography>
					</Grid>
				</Grid>
				<Box component="form" noValidate={false} onSubmit={handleAddCart}>
					<Box 
						component="input"
						min='1'
						required={true}
						placeholder='Qtd'
						id='quantity'
						name='quantity'
						type='number'
						sx={{width: '20%', height: '6vh', mr: 3}}
					/>
					<Button 
						type='submit'
						sx={{ 
							cursor: 'pointer',
							color: 'black',
							mt: 1,
							border: 1,
							transition: 'all linear 0.4s',
							'&:hover': {
								backgroundColor: 'black',
								color: 'white'
							}
						}}
					>
						<AddShoppingCartOutlinedIcon /> Add Carrinho
					</Button>
				</Box>
			</Paper>
			<Box>
				<Typography variant='h5' sx={{mt: 8, mb: 2, ml:2}}>
                    Descrição:
				</Typography>
				<Typography variant='subtitle1' sx={{ml:8}}>
					{productById.description}
				</Typography>
			</Box>
		</>
	);
};