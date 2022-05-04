import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box, Button, IconButton, Typography } from '@mui/material';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { api } from '../services/api';


interface ProductListProps {
    products: ReadonlyArray<{
      title: string;
      image: string;
      price: number;
      quantity: number;
      _id?: any;
    }>;
  }

export const TableProductAdmin = (props: ProductListProps) => {
	const { products } = props;

	const getDelete = async (index: string) => {
		const { data } = await api.delete(`product/${index}`);
		console.log(`${data}`);
		document.location.reload();
		//axios order update status for cancelled 
	};
    
	return (
		<React.Fragment>
			<Box sx={{background: 'white'}}>
				<Typography variant='h5' align='center' sx={{my: 4, width: '100vw'}}>
                Produtos
				</Typography>
				<Button
					href='/createproduct'
					sx={{ border: 1, position: 'static', ml:4, mb: 4, transition: 'all linear 0.4s', color: 'black',
						'&:hover': {
							backgroundColor: 'blue',
							color: 'white'
						}}}
				>
                Criar Produtos
				</Button>
			</Box>
			<Table size="small" sx={{ background: 'white'}}>
				<TableHead>
					<TableRow>
						<TableCell>Id</TableCell>
						<TableCell>imagem</TableCell>
						<TableCell>Nome</TableCell>
						<TableCell>preço</TableCell>
						<TableCell>stock</TableCell>
						<TableCell>Ações</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{products.map((row, index) => (
						<TableRow key={index}>
							<TableCell>{row._id}</TableCell>
							<TableCell>{row.image}</TableCell>
							<TableCell>{row.title}</TableCell>
							<TableCell>{row.price}</TableCell>
							<TableCell>{row.quantity}</TableCell>
							<TableCell>  
								<IconButton
									onClick={()=> getDelete(row._id)}
									color='warning'
									title='Remover Produto'
									sx={{ fontSize: 15 }}
								>
									<CancelOutlinedIcon />
								</IconButton>
								<IconButton
									color='info'
									title='Editar Produto'
									sx={{ fontSize: 15 }}
								>
									<EditOutlinedIcon />
								</IconButton>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</React.Fragment>
	);
};