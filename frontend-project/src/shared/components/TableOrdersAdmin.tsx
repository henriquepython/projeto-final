import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Fab, Typography } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { apiAdmin } from '../services/api';
import { useAppContext } from '../contexts';

export const TableOrdersAdmin = () => {
	const { orderAll } = useAppContext();
	

	const getCancelled = async (index: string, status: string) => {
		if (status === 'Cancelamento Pendente' || status === 'Pendente') {
			const result = confirm('Tem certeza que quer cancelar o pedido?');
			if(result) {
				await apiAdmin.patch(`order/cancelled/${index}`)
					.then((response) => {
						console.log(`${response.data}`);
						alert('Pedido Cancelado com sucesso!');
						document.location.reload();
					})
					.catch((err) => {
						alert('Usuario não autorizado!');
						console.log(err);
					});
			}
		}
	};

	const getCompleted = async (index: string, status: string) => {
		if (status === 'Pendente') {
			await apiAdmin.patch(`order/completed/${index}`)
				.then((response) => {
					console.log(`${response.data}`);
					alert('Pedido Finalizado');
					document.location.reload();
				})
				.catch((err) => {
					alert('Usuario não autorizado!');
					console.log(err);
				});
		}
	};
	return (
		<>
			<Typography 
				variant='h5'
				sx={{ mb: 2 ,width: '100%', display: 'flex', justifyContent: 'center'}}
			>
				Pedidos
			</Typography>
			<Table size="small" sx={{ background: 'white'}}>
				<TableHead>
					<TableRow>
						<TableCell>Nº</TableCell>
						<TableCell>Id Order</TableCell>
						<TableCell>Id User</TableCell>
						<TableCell>Status</TableCell>
						<TableCell>Total</TableCell>
						<TableCell>Ações</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{orderAll.map((row, index) => (
						<TableRow key={index}>
							<TableCell>{index+1}</TableCell>
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
		</>
	);
};