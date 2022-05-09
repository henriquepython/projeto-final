import { Autocomplete, Box, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import { apiAdmin } from '../shared/services/api';

const categories = [
	{ label: 'Eletronicos' },
	{ label: 'Esportes' },
	{ label: 'Roupas' }
];

export const EditProduct = () => {

	const handleEditProduct = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const input = new FormData(event.currentTarget);
		const title = `${input.get('title')}`;
		const image = `${input.get('image')}`;
		const description = `${input.get('description')}`;
		const category = `${input.get('category')}`;
		const quantity = Number(input.get('quantity'));
		const price = Number(input.get('price'));
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