import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box, Fab, Typography } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { api } from '../services/api';


interface OrderProps {
    orders: ReadonlyArray<{
        totalPrice: number;
        status: string;
        userId: string;
		_id: string; 
    }>
}

export const TableOrdersAdmin = (props: OrderProps) => {
	const { orders } = props;

	const getCancelled = async (index: string, status: string) => {
		if (status === 'Cancelamento Pendente' || status === 'Pendente') {
			const result = confirm('Tem certeza que quer cancelar o pedido?');
			if(result) {

				const { data } = await api.patch(`order/cancelled/${index}`);
				console.log(`${data}`);
				alert('Pedido Cancelado com sucesso!');
				document.location.reload();
			}
		}
		//axios order update status for cancelled 
	};

	const getCompleted = async (index: string, status: string) => {
		if (status === 'Pendente') {
			const { data } = await api.patch(`order/completed/${index}`);
			console.log(`${data}`);
			alert('Pedido Finalizado');
			document.location.reload();
		}
		//axios order update status for cancelled 
	};
	return (
		<React.Fragment>
			<Box sx={{background: 'white'}}>
				<Typography variant='h5' align='center' sx={{position: 'static',mt: 4, width: '100vw', color: 'black'}}>
                Pedidos
				</Typography>
			</Box>
			<Table size="small" sx={{ background: 'white'}}>
				<TableHead>
					<TableRow>
						<TableCell>Id Order</TableCell>
						<TableCell>Id User</TableCell>
						<TableCell>Status</TableCell>
						<TableCell>Total</TableCell>
						<TableCell>Ações</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{orders.map((row, index) => (
						<TableRow key={index}>
							<TableCell>{row._id}</TableCell>
							<TableCell>{row.userId}</TableCell>
							<TableCell>{row.status}</TableCell>
							<TableCell>R$ {row.totalPrice}</TableCell>
							<TableCell> 
								<Fab
									onClick={()=> getCompleted(row._id, row.status)}
									size='small'
									color='success'
									title='Finalizar Pedido'
									sx={{ mr: 2 }}
								>
									<CheckCircleIcon />
								</Fab>
								<Fab
									onClick={()=> getCancelled(row._id, row.status)}
									size='small'
									color='warning'
									title='Cancelar Pedido'
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