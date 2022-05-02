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
	const { products } = props;
	return (
		<React.Fragment>
			<Typography color='primary' variant="h6" gutterBottom>
        Revisão de Pedido
			</Typography>
			<List disablePadding>
				{products.map((product) => (
					<>
						<ListItem key={product.title} sx={{ py: 1, px: 0 }}>
							<ListItemText primary={product.title} />
							<Typography variant="body2">{product.price}</Typography>
						</ListItem>
					</>
  
				))}
			</List>
		</React.Fragment>
	);
};