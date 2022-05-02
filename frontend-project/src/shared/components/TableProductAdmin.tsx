import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box, Button, IconButton, Typography } from '@mui/material';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';


interface ProductListProps {
    products: ReadonlyArray<{
      title: string;
      image: string;
      price: number;
      quantity: number;
      productId: string;
    }>;
  }

export const TableProductAdmin = (props: ProductListProps) => {
    const { products } = props

    const deleteProduct = () => {
        //axios product delete 
    }
    
  return (
    <React.Fragment>
        <Box sx={{background: 'white'}}>
            <Typography variant='h5' align='center' sx={{my: 4, width: '100vw'}}>
                Products
            </Typography>
            <Button
                href='/createproduct'
                sx={{ border: 1, position: 'static', ml:4, mb: 4, transition: 'all linear 0.4s', color: 'black',
                '&:hover': {
                    backgroundColor: 'blue',
                    color: 'white'
                    }}}
                >
                Create Product
            </Button>
        </Box>
      <Table size="small" sx={{ background: 'white'}}>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>image</TableCell>
            <TableCell>title</TableCell>
            <TableCell>price</TableCell>
            <TableCell>stock</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row) => (
            <TableRow key={row.productId}>
              <TableCell>{row.productId}</TableCell>
              <TableCell>{row.image}</TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell>{row.quantity}</TableCell>
              <TableCell>  
                    <IconButton
                        onClick={deleteProduct}
                        color='warning'
                        title='Delete Product'
                        sx={{ fontSize: 15 }}
                    >
                         <CancelOutlinedIcon />
                    </IconButton>
                    <IconButton
                        color='info'
                        title='Edit Product'
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
}