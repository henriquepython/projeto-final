import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';
import { Button } from '@mui/material';
import { api } from '../services/api';



const Img = styled('img')({
	margin: 'auto',
	display: 'flex',
	justifyContent: 'center',
	flexDirection: 'row',
	maxWidth: '100%',
	maxHeight: '100%',
	transition: 'all linear 0.4s',
	'&:hover': {
		filter: 'grayscale(100%)',
		transform: 'scale(1.1)'
	}
});

interface IProductCartProps {
  title: string;
  image: string;
  price: number;
  _id: any;
  quantity: number;
}

export const ProductItemCart = (props: IProductCartProps) => {
	const { title, image, price, _id, quantity} = props;
  
	const handleRemoveCart = async () => {
		const idProduct = localStorage.getItem('id_product');
		await api.delete(`cart/${idProduct}`);
		alert('produto removido do carrinho');
		document.location.reload();
	};
	

	const getId = async(id: string) => {
		localStorage.setItem('id_product', `${id}`);
		document.location.href= '/product';
	};

	return (
		<Paper
			sx={{
				p: 2,
				margin: 'auto',
				maxWidth: 500,
				flexGrow: 1,
				backgroundColor: (theme) =>
					theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
			}}
		>
			<Grid container spacing={1}>
				<Grid item>
					<ButtonBase href='/product' onClick={()=>getId(_id)} sx={{ mb: 1 }}>
						<Img key={_id} alt="complex" src={image} sx={{borderRadius: 2, width: '100vw', height: 150}} />
					</ButtonBase>
				</Grid>
				<Grid item>
          
					<Grid item>
						<Typography gutterBottom variant="subtitle1" component="div">
							{title}
						</Typography>
					</Grid>

					<Grid item>
						<Typography variant="subtitle2" color="text.secondary">
							{_id}
						</Typography>
					</Grid>
          
					<Grid item>
						<Typography variant="subtitle1" component="div">
              Preço: ${price}
						</Typography>
						<Typography variant='subtitle2' component="div" sx={{mb: 2}}> 
                  Quantity: {quantity}
						</Typography>
						<Button 
							onClick={handleRemoveCart}
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
					</Grid>
				</Grid>
			</Grid>
		</Paper>
	);
};
