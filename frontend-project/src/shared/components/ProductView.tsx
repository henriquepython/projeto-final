import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { Box, Button, CssBaseline, Input, InputAdornment, InputBase, InputLabel } from '@mui/material';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { ButtonAddCart } from './ButtonAddCart';




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
  productId: string;
  quantity?: number;
}

export const ProductView = (props: ProductViewProps) => {
  const { title, image, price, productId, quantity } = props;
 
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
                {productId}
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
        <InputBase type='number' placeholder='Qtd'  sx={{width: '10%', border: 3, mr: 16}}/>

        <ButtonAddCart />
        

    </Paper>
    <Box>
      <Typography variant='h5' sx={{mt: 8, mb: 2}}>
        Descriptions:
      </Typography>
      <Typography variant='subtitle1'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum obcaecati dolorem itaque
        facere dolor, rem vero praesentium, aliquid harum necessitatibus ad id omnis molestias neque,
         reprehenderit excepturi nisi aut sequi!
      </Typography>
      
    </Box>

      </>
  );
}
