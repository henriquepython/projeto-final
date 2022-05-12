import { Autocomplete, Box, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { api, apiAdmin } from '../shared/services/api';

const categories = [
	{ label: 'Eletronicos' },
	{ label: 'Esportes' },
	{ label: 'Roupas' }
];

export const EditProduct = () => {
	const [title, setTitle] = useState('');
	const [image, setImage] = useState('');
	const [description, setDescription] = useState('');
	const [category, setCategory] = useState('');
	const [quantity, setQuantity] = useState<number>(0);
	const [price, setPrice] = useState<number>(0);
	useEffect(()=> {
		const code = sessionStorage.getItem('id_product');
		api.get(`product/${code}`)
			.then((response)=>{
				setTitle(response.data.title);
				setImage(response.data.image);
				setDescription(response.data.description);
				setCategory(response.data.category);
				setQuantity(response.data.quantity);
				setPrice(response.data.price);
			});
	});

	const handleEditProduct = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const edit = sessionStorage.getItem('id_product');
		const editProduct = {
			title: title,
			image: image,
			description: description,
			category: category,
			price: price,
			quantity: quantity
		};
			
		await apiAdmin.patch(`product/${edit}`, editProduct)
			.then((response) => {
				console.log(response.data);
				alert('Produto Editado');
				document.location.href = '/admin';
			})
			.catch((err) => {
				console.log(err);
				alert('Usuario não autorizado!');
			});
	};
	
	return(
		<Container component="form"  onSubmit={handleEditProduct} maxWidth="sm" sx={{ mb: 4 }}>
			<Button 
				href='/admin'
				variant="contained"
				sx={{ mt: 3, ml: 1, width: 200,'&:hover': { backgroundColor: 'white', color: 'black'}  }}
			>
                Voltar
			</Button>
			<Paper 
				variant="outlined"
				sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 }, background: 'white' }}
			>
				<Typography variant="h6" gutterBottom sx={{color: 'black'}}>
					{sessionStorage.getItem('title')}
				</Typography>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<TextField
							id="title"
							name="title"
							label="Nome"
							required={true}
							fullWidth
							autoComplete="title"
							variant="standard"
						/>
					</Grid>
                    
					<Grid item xs={12}>
						<TextField
							id="image"
							name="image"
							required={true}
							label="Imagem"
							fullWidth
							autoComplete="image"
							variant="standard"
						/>
					</Grid>
                
					<Grid item xs={12}>
						<TextField
							id="description"
							name="description"
							label="Descrição"
							required={true}
							fullWidth
							autoComplete="description"
							variant="standard"
						/>
					</Grid>
			
					<Grid item xs={12}>
						<Autocomplete
							disablePortal
							id="category"
							fullWidth
							options={categories}
							sx={{ width: 300 }}
							renderInput={(params) => 
								<TextField 
									name="category"
									variant="standard"
									required={true}
									{...params} label="Categoria" 
								/>}
						/>
					</Grid>
			
					<Grid item xs={12}>
						<Box
							component="input"
							min='1'
							type='number'
							id='quantity'
							name='quantity'
							required={true}
							placeholder="Quantidade"
							sx={{height: '8vh'}}
						/>
					</Grid>
			
					<Grid item xs={12}>
						<Box
							component="input"
							min='1'
							required={true}
							type='number'
							id="price"
							name="price"	
							placeholder="Preço"
							sx={{height: '8vh'}}
						/>
					</Grid>
				</Grid>
				<Button
					variant="contained"
					type='submit'			
					sx={{ 
						width: '100%',
						mt: 6,
						color: 'white',
						background: 'black',
						'&:hover': {
							backgroundColor: 'white',
							color: 'black'
						} 
					}}
				>
                    Editar Produto
				</Button>
			</Paper>
		</Container>
	);
};