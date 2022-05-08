import { Autocomplete, Box, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import { apiAdmin } from '../shared/services/api';

const categories = [
	{ label: 'Eletronicos' },
	{ label: 'Esportes' },
	{ label: 'Roupas' }
];

export const CreateProduct = () => {
	const handleCreateProduct = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const input = new FormData(event.currentTarget);
		const title = `${input.get('title')}`;
		const image = `${input.get('image')}`;
		const description = `${input.get('description')}`;
		const category = `${input.get('category')}`;
		const quantity = Number(input.get('quantity'));
		const price = Number(input.get('price'));
		const createProduct = {
			title: title,
			image: image,
			description: description,
			category: category,
			price: price,
			quantity: quantity
		};
			
		await apiAdmin.post('/product', createProduct)
			.then((response) => {
				console.log(response.data);
				alert('Produto criado com sucesso');
				document.location.reload();
			})
			.catch ((err) => {
				console.log(err);
				alert('Não foi possivel criar produto!');
			});	
	};
	return(
		<Container 
			component="form"
			
			onSubmit={handleCreateProduct}
			maxWidth="sm"
			sx={{ mb: 4 }}
		>
			<Button 
				href='/admin'
				variant="contained"
				sx={{ mt: 3, ml: 1, width: 200,'&:hover': { backgroundColor: 'white', color: 'black'}  }}>
                      Voltar
			</Button>
			<Paper 
				variant="outlined"
				sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 }, background: 'white' }}
			>
				<Typography variant="h6" gutterBottom>
                    Criar Produto
				</Typography>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<TextField
							required={true}
							id="title"
							name="title"
							label="Nome"
							fullWidth
							autoComplete="title"
							variant="standard"
						/>
					</Grid>
                    
					<Grid item xs={12}>
						Imagem
						<TextField
							id="image"
							name="image"
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
							fullWidth
							autoComplete="description"
							variant="standard"
						/>
					</Grid>

					<Grid item xs={12}>
						<Autocomplete
							id="category"
							fullWidth
							options={categories}
							sx={{ width: 300 }}
							renderInput={(params) => 
								<TextField 
									name="category"
									required={true}
									variant="standard"
									{...params} label="Categoria" 
								/>}
						/>
					</Grid>

					<Grid item xs={12}>
						<Box
							component="input"
							min='1'
							required={true}
							type='number'
							id="quantity"
							name="quantity"
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
                    Criar Produto
				</Button>
			</Paper>
		</Container>
	);
};