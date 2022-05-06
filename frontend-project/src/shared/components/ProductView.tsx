import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { api } from '../services/api';




const Img = styled('img')({
	margin: 'auto',
	display: 'flex',
	justifyContent: 'center',
	flexDirection: 'row',
	maxWidth: '100%',
	maxHeight: '100%',
});

interface ProductViewProps {
  title: string;
  image: string;
  price: number;
  _id: string;
  quantity?: number;
  description: string;
}

export const ProductView = (props: ProductViewProps) => {
	const { title, image, price, _id, quantity, description } = props;
 
	const handleAddCart = async(event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const input = new FormData(event.currentTarget);
		const quantity = Number(input.get('quantity'));
		const userId = sessionStorage.getItem('id_user');
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
					margin: 'auto',
					maxWidth: 500,
					flexGrow: 1,
					backgroundColor: (theme) =>
						theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
				}}
			>
      
				<Grid item>
					<Img alt="complex" src={image} sx={{mb:4,borderRadius: 2}} />
				</Grid>
				<Grid item>
          
					<Grid item>
						<Typography gutterBottom variant="h6" component="div">
							{title}
						</Typography>
					</Grid>

					<Grid item>
						<Typography variant="subtitle2" color="text.secondary">
							{_id}
						</Typography>
					</Grid>

					<Typography variant='subtitle2' component="div" sx={{mb: 2}}> 
            Stock: {quantity}
					</Typography>
					<Grid item>
						<Typography variant="subtitle1" component="div">
              Price: ${price}
						</Typography>
					</Grid>
				</Grid>
				<Box component="form" noValidate={false} onSubmit={handleAddCart}>

					<Box component="input" min='1' required={true} placeholder='Qtd' id='quantity' name='quantity' type='number' sx={{width: '20%', height: '6vh', mr: 4}}/>

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
        

			</Paper>
			<Box>
				<Typography variant='h5' sx={{mt: 8, mb: 2}}>
        Descriptions:
				</Typography>
				<Typography variant='subtitle1'>
					{description}
				</Typography>
      
			</Box>

		</>
	);
};
