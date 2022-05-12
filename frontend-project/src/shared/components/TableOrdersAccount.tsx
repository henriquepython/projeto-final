import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CancelIcon from '@mui/icons-material/Cancel';
import { api } from '../services/api';
import { Fab } from '@mui/material';
import { useAppContext } from '../contexts';

export const TableOrdersAccount = () => {
	const { orderUser } = useAppContext();

	const getRequestCancel = async (index: string, status: string) => {
		if (status === 'Pendente') {
			await api.patch(`order/requestCancelled/${index}`)
				.then((response) => {
					console.log(`${response.data}`);
					alert('Pedido de cancelamento realizado');
					document.location.reload();
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};

	return (
		<>
			<Table size="small">
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
					{orderUser.map((row, index) => (
						<TableRow key={index}>
							<TableCell>{row._id}</TableCell>
							<TableCell>{row.userId._id}</TableCell>
							<TableCell>{row.status}</TableCell>
							<TableCell>R$ {row.totalPrice}</TableCell>
							<TableCell>
								<Fab
									size='small'
									color='warning'
									title='Pedido de Cancelamento'
									onClick={()=>getRequestCancel(row._id, row.status)}
									sx={{ fontSize: 15 }}
								>
									<CancelIcon />
								</Fab>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</>
	);
};