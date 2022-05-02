import { Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';

export const CreateProduct = () => {
	return(
		<Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
			<Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 }, background: 'white' }}>
				<>
					<Typography variant="h6" gutterBottom>
                    Criar Produto
					</Typography>
					<Grid container spacing={3}>
						<Grid item xs={12}>
							<TextField
								required
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
								required
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
								required
								id="description"
								name="description"
								label="Descrição"
								fullWidth
								autoComplete="description"
								variant="standard"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								id="category"
								name="category"
								label="Categoria"
								fullWidth
								variant="standard"
							/>
						</Grid>
						<Grid item xs={12} sm={2}>
							<TextField
								required
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
								required
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
						//onclick functions 
						href='/admin'
						sx={{ width: '100%', mt: 6, color: 'white', background: 'black','&:hover': {
							backgroundColor: 'white',
							color: 'black'
						} }}
					>
                    Criar Produto
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