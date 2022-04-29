import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';
import { Button } from '@mui/material';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

interface CartProps {
  title: string;
  image: string;
  price: number;
  productId: string;
  quantity: number;
}

export const CartItem = (props: CartProps) => {
  const { title, image, price, productId, quantity } = props;

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
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 300, height: 128 }}>
            <Img alt="complex" src={image} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {productId}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" component="div">
                Price: ${price}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" component="div">
                Quantity: {quantity}
              </Typography>
            </Grid>
            <Grid item>
              <Button 
                //onClick={'addcart'}
                sx={{ cursor: 'pointer' }}
              >
                <RemoveShoppingCartOutlinedIcon /> Remove Cart
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
