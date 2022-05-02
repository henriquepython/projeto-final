import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box, IconButton, Typography } from '@mui/material';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';


interface OrderProps {
    orders: ReadonlyArray<{
        totalPrice: number;
        status: string;
        userId: string; 
    }>
}

export const TableOrdersAdmin = (props: OrderProps) => {
	const { orders } = props;

	const getRequestCancel = () => {
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
						<TableCell>Id usuario</TableCell>
						<TableCell>Status</TableCell>
						<TableCell>Total</TableCell>
						<TableCell>Actions</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{orders.map((row) => (
						<TableRow key={row.userId}>
							<TableCell>{row.userId}</TableCell>
							<TableCell>{row.status}</TableCell>
							<TableCell>{row.totalPrice}</TableCell>
							<TableCell>  
								<IconButton
									onClick={getRequestCancel}
									color='warning'
									title='Cancelar Pedido'
									sx={{ fontSize: 15 }}
								>
									<CancelOutlinedIcon />
								</IconButton>
								<IconButton
									onClick={getRequestCancel}
									color='success'
									title='Finalizar Pedido'
									sx={{ fontSize: 15 }}
								>
									<CheckCircleOutlineOutlinedIcon />
								</IconButton>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</React.Fragment>
	);
};