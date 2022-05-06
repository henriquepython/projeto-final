import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Box } from '@mui/material';

interface ICartListProps {
    productsByUser: ReadonlyArray<{
      title: string;
      image: string;
      price: number;
      quantity: number;
      productId: string;
    }>;
}

export const ReviewOrder = (props: ICartListProps) => {
	const { productsByUser } = props;
	const total = sessionStorage.getItem('total_order');
	return (
		<>
			<Typography color='primary' variant="h6" gutterBottom>
        Revisão de Pedido
			</Typography>
			<List disablePadding>
				{productsByUser.map((product, index) => (
					<ListItem key={index} sx={{ py: 1, px: 0 }}>
						<ListItemText primary={product.title} sx={{color: 'black'}} />
						<ListItemText>
							Qtd: {product.quantity}
						</ListItemText>
						<Typography variant="body2">
							R$ {product.price}
						</Typography>
					</ListItem>
				))}
			</List>
			<Box 
				sx={{
					fontSize: 30,
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center',
					mt: 4,
					flexWrap: 'wrap'
				}}
			>	
				Total: R$ {total}
			</Box>
		</>
	);
};