import { Autocomplete, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import { api } from '../shared/services/api';

const categories = [
	{ label: 'Eletronicos' },
	{ label: 'Esportes' },
	{ label: 'Roupas' }
];

export const EditProduct = () => {
	const handleCreateProduct = async (event: React.FormEvent<HTMLFormElement>) => {
		try {

			event.preventDefault();
			const input = new FormData(event.currentTarget);
			const title = `${input.get('title')}`;
			const image = `${input.get('image')}`;
			const description = `${input.get('description')}`;
			const category = `${input.get('category')}`;
			const quantity = Number(input.get('quantity'));
			const price = Number(input.get('price'));
			
			const edit = localStorage.getItem('index');
			const { data } = await api.patch(`product/${edit}`,{
				title: title,
				image: image,
				description: description,
				category: category,
				price: price,
				quantity: quantity
			});
			
			console.log(data);
			alert('Produto Editado');
			document.location.href = '/admin';
			
			
		} catch (err) {
			console.log(err);
			alert('Não foi possivel editar produto');
		}
		
	};
	return(
		<Container component="form"  onSubmit={handleCreateProduct} maxWidth="sm" sx={{ mb: 4 }}>
			<Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 }, background: 'white' }}>
				<>
					<Typography variant="h6" gutterBottom sx={{color: 'black'}}>
						{localStorage.getItem('title')}
					</Typography>
					<Grid container spacing={3}>
						<Grid item xs={12}>
							<TextField
								id="title"
								name="title"
								label="Nome"
								fullWidth
								autoComplete="title"
								variant="standard"
							/>
						</Grid>
                    
						<Grid item xs={12}>
							<TextField
								id="image"
								name="image"
								type='url'
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
								defaultValue={categories[0]}
								disablePortal
								id="category"
								fullWidth
								options={categories}
								sx={{ width: 300 }}
								renderInput={(params) => 
									<TextField 
										name="category"
										variant="standard"
										{...params} label="Categoria" 
									/>}
							/>
						</Grid>
						<Grid item xs={12} sm={2}>
							<TextField
								id="quantity"
								name="quantity"
								type='number'
								label="Qtd"
								fullWidth
								autoComplete="quantity"
								variant="standard"
							/>
						</Grid>
						<Grid item xs={12} sm={4}>
							<TextField
								type='number'
								id="price"
								name="price"
								label="preço"
								fullWidth
								autoComplete="price"
								variant="standard"
							/>
						</Grid>
					</Grid>
					<Button
						variant="contained"
						type='submit'
						
						sx={{ width: '100%', mt: 6, color: 'white', background: 'black','&:hover': {
							backgroundColor: 'white',
							color: 'black'
						} }}
					>
                    Editar Produto
					</Button>
				</>
			</Paper>
		</Container>
	);
};


// title: string;
// image: string;
// description: string;
// category: Category;
// price: number;
// quantity: number;