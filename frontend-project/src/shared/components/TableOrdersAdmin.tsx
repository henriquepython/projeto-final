import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { IconButton, Typography } from '@mui/material';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';


interface OrderProps {
    orders: ReadonlyArray<{
        totalPrice: number;
        status: string;
        userId: string; 
    }>
}

export const TableOrdersAdmin = (props: OrderProps) => {
    const { orders } = props

    const getRequestCancel = () => {
        //axios order update status for cancelled 
    }
  return (
    <React.Fragment>
        <Typography variant='h5' align='center' sx={{my: 4, width: '100vw'}}>
            Orders
        </Typography>
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
                        title='Cancel Order'
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