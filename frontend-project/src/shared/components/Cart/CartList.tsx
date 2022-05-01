import { Box, Button, Grid, Typography } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import { ProductItem } from './ProductItem';
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';

  interface CartListProps {
    productsByUser: ReadonlyArray<{
      title: string;
      image: string;
      price: number;
      quantity: number;
      productId: string;
    }>;
  }

export const CartList = (props: CartListProps) => {
  const { productsByUser } = props
    return (
      <>
        <Box sx={{ width: '100vw', display: 'flex', flexShrink: 1, flexWrap: 'wrap', justifyContent: 'center', flexDirection: 'row' }}>
        {productsByUser.map((item) => (
            <Box sx={{width: 220, m: 2}}>
                <ProductItem title={item.title} image={item.image} price={item.price} quantity={item.quantity} productId={item.productId}>
                  <Grid item>
                    <Typography variant="body2" component="div">
                      Quantity: {item.quantity}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Button 
                      //onClick={'addcart'}
                      sx={{ cursor: 'pointer', color: 'black' }}
                    >
                      <RemoveShoppingCartOutlinedIcon /> Remove Cart
                    </Button>
                  </Grid>
                </ProductItem>
            </Box>
        ))}
        </Box>
    </>
  );
}