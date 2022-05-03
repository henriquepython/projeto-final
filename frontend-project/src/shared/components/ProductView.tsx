import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Box, Button, InputBase } from '@mui/material';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';




const Img = styled('img')({
	margin: 'auto',
	display: 'flex',
	justifyContent: 'center',
	flexDirection: 'row',
	maxWidth: '100%',
	maxHeight: '100%',
	transition: 'all linear 0.4s',
});

interface ProductViewProps {
  title: string;
  image: string;
  price: number;
  _id: string;
  quantity?: number;
  description: string;
}

export const ProductView = (props: ProductViewProps) => {
	const { title, image, price, _id, quantity, description } = props;
 
	return (
		<>
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
      
				<Grid item>
					<Img alt="complex" src={image} sx={{mb:4,borderRadius: 2}} />
				</Grid>
				<Grid item>
          
					<Grid item>
						<Typography gutterBottom variant="h6" component="div">
							{title}
						</Typography>
					</Grid>

					<Grid item>
						<Typography variant="subtitle2" color="text.secondary">
							{_id}
						</Typography>
					</Grid>

					<Typography variant='subtitle2' component="div" sx={{mb: 2}}> 
            Stock: {quantity}
					</Typography>
					<Grid item>
						<Typography variant="subtitle1" component="div">
              Price: ${price}
						</Typography>
					</Grid>
				</Grid>
				<InputBase 
					type='number'
					placeholder=' Qtd'
					//onChange={}
					sx={{
						width: '12%',
						border: 3,
						mr: 16
					}}
				/>

				<Button 
					//onClick={addCart}
					sx={{ 
						cursor: 'pointer',
						color: 'black',
						mt: 1,
						border: 1,
						transition: 'all linear 0.4s',
						'&:hover': {
							backgroundColor: 'blue',
							color: 'white'
						}
					}}
				>
					<AddShoppingCartOutlinedIcon /> Add Carrinho
				</Button>
        

			</Paper>
			<Box>
				<Typography variant='h5' sx={{mt: 8, mb: 2}}>
        Descriptions:
				</Typography>
				<Typography variant='subtitle1'>
					{description}
				</Typography>
      
			</Box>

		</>
	);
};
