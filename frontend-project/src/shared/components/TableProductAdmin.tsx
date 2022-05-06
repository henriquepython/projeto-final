import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box, Button, Typography } from '@mui/material';
import { api } from '../services/api';
import EditIcon from '@mui/icons-material/Edit';
import RemoveIcon from '@mui/icons-material/Cancel';
import Fab from '@mui/material/Fab';


interface ProductListProps {
    products: ReadonlyArray<{
      title: string;
      image: string;
      price: number;
      quantity: number;
      category: string;
      _id: string;
    }>;
  }

export const TableProductAdmin = (props: ProductListProps) => {
	const { products } = props;
	
	const getDelete = async (index: string) => {
		const result = confirm('Tem certeza que quer remover o produto?');
		if(result) {
			await api.delete(`product/${index}`);
			document.location.reload();
		}
		//axios order update status for cancelled 
	};

	const getEdit = async (id: string, title:string) => {
		sessionStorage.setItem('id_product',`${id}`);
		sessionStorage.setItem('title',`${title}`);
		document.location.href='/editproduct';
		//axios order update status for cancelled 
	};
    
	return (
		<React.Fragment>
			<Typography variant='h5' sx={{ mb: 2 ,width: '100%', display: 'flex', justifyContent: 'center'}}>
				Produtos
			</Typography>
			<Box sx={{background: 'white'}}>
				<Button
					href='/createproduct'
					sx={{ border: 1, position: 'static', ml:4, mb: 4, transition: 'all linear 0.4s',backgroundColor: 'black', color: 'white',
						'&:hover': {
							backgroundColor: 'white',
							color: 'black'
						}
					}}
				>
                Criar Produtos
				</Button>
			</Box>
			<Table size="small" sx={{ background: 'white'}}>
				<TableHead>
					<TableRow>
						<TableCell>Nº</TableCell>
						<TableCell>Id</TableCell>
						<TableCell>Nome</TableCell>
						<TableCell>preço</TableCell>
						<TableCell>categoria</TableCell>
						<TableCell>stock</TableCell>
						<TableCell>Ações</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{products.map((row, index) => (
						<TableRow key={index}>
							<TableCell>{index+1}</TableCell>
							<TableCell>{row._id}</TableCell>
							<TableCell>{row.title}</TableCell>
							<TableCell>R$ {row.price}</TableCell>
							<TableCell>{row.category}</TableCell>
							<TableCell>{row.quantity}</TableCell>
							<TableCell>  
								<Fab 
									color='info'
									size='small'
									title='Editar Produto'
									onClick={()=>getEdit(row._id, row.title)}
									aria-label="edit"
									sx={{mr: 2}}
								>
									<EditIcon />
								</Fab>
								<Fab
									onClick={()=> getDelete(row._id)}
									size='small'
									color='warning'
									title='Remover Produto'
								>
									<RemoveIcon />
								</Fab>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</React.Fragment>
	);
};