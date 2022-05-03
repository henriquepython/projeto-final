import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { IconButton } from '@mui/material';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { api } from '../services/api';
import { useState } from 'react';


interface OrderListProps {
    orders: Array<{
        totalPrice: number;
        status: string;
        _id: string;
		userId: any; 
    }>
}

export const TableOrders = (props: OrderListProps) => {
	const { orders } = props;

	const getRequestCancel = async (index: string) => {
		const { data } = await api.patch(`order/requestCancelled/${index}`);
		console.log(`${data}`);
		document.location.reload();
		//axios order update status for Request cancelled
	};
	return (
		<React.Fragment>
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
					{orders.map((row, index) => (
						<TableRow key={index}>
							<TableCell>{row._id}</TableCell>
							<TableCell>{row.userId._id}</TableCell>
							<TableCell>{row.status}</TableCell>
							<TableCell>{row.totalPrice}</TableCell>
							<TableCell>
								<IconButton
									key={index}
									color='warning'
									title='Pedido de Cancelamento'
									onClick={()=>getRequestCancel(row._id)}
									sx={{ fontSize: 15 }}
								>
									<CancelOutlinedIcon />
								</IconButton>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</React.Fragment>
	);
};