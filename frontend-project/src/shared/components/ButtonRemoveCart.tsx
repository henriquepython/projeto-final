import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';
import { Button } from '@mui/material';
export const ButtonRemoveCart = () => {
	return (
		<Button 
			//onClick={'removecart'}
			sx={{ 
				cursor: 'pointer',
				color: 'black',
				border: 1,
				transition: 'all linear 0.4s',
				'&:hover': {
					backgroundColor: 'red',
					color: 'white'
				}
			}}
		>
			<RemoveShoppingCartOutlinedIcon /> Remover Carrinho
		</Button>
	);
};