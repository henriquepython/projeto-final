import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

interface ProductListProps {
  products: ReadonlyArray<{
    title: string;
    image: string;
    price: number;
    productId: string;
  }>;
}

export const ReviewOrder = (props: ProductListProps) => {
  const { products } = props
  let total = 0

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <>
            {total += product.price }
            <ListItem key={product.title} sx={{ py: 1, px: 0 }}>
              <ListItemText primary={product.title} />
              <Typography variant="body2">{product.price}</Typography>
            </ListItem>
          </>
  
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            ${total}
          </Typography>
        </ListItem>
      </List>
    </React.Fragment>
  );
}