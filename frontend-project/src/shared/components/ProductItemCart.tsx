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
});

interface IProductCartProps {
  title: string;
  image: string;
  price: number;
  _id: string;
  quantity: number;
}

export const ProductItemCart = (props: IProductCartProps) => {
	const { title, image, price, _id, quantity} = props;
  
	const handleRemoveCart = async () => {
		await api.delete(`cart/${_id}`)
			.then(()=>{
				alert('produto removido do carrinho');
				document.location.reload();
			})
			.catch((err) => {
				console.log(err);
			});
	};
	
	const getId = async(id: string) => {
		sessionStorage.setItem('id_product', `${id}`);
		document.location.href= '/product';
	};

	return (
		<Paper
			sx={{
				borderRadius: 2,
				m: 6,
				py:.8,
				px:4,
				margin: 'auto',
				maxWidth: 250,
				maxHeight: 300,
				flexGrow: 1,
			
				backgroundColor: (theme) =>	theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
			
			}}
		>
			<Grid container spacing={1}>
				<Grid item>
					<ButtonBase href='/product' onClick={()=>getId(_id)} sx={{ mb: 1 }}>
						<Img
							key={_id}
							src={image}
							sx={{
								borderRadius: 4,
								width: '12vw',
								height: 100,
								transition: 'all linear 0.4s',
								'&:hover': {
									transform: 'scale(1.1)'
								}
							}} 
						/>
					</ButtonBase>
				</Grid>
				<Grid item>
					<Grid item>
						<Typography gutterBottom variant="subtitle1" component="div">
							{title}
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant="caption" color="text.secondary">
							{_id}
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant="subtitle1" component="div">
              R$ {price}
						</Typography>
						<Typography variant='subtitle2' component="div" sx={{mb: 2}}> 
                  Quantity: {quantity}
						</Typography>
						<Button 
							onClick={handleRemoveCart}
							fullWidth
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
							<RemoveShoppingCartOutlinedIcon />Remover
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</Paper>
	);
};