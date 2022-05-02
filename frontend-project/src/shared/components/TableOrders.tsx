import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { IconButton } from '@mui/material';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';


interface OrderListProps {
    orders: ReadonlyArray<{
        totalPrice: number;
        status: string;
        userId: string; 
    }>
}

export const TableOrders = (props: OrderListProps) => {
    const { orders } = props

    const getRequestCancel = () => {
        //axios order update status for Request cancelled 
    }
  return (
    <React.Fragment>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>User</TableCell>
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
                        title='Request Cancel'
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
}