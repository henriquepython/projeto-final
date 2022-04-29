import { Box } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import { CartItem } from './CartItem';

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
        <ImageList sx={{ width: '100vw', height: 350, display: 'flex', flexShrink: 1, flexWrap: 'wrap', justifyContent: 'center', flexDirection: 'row' }}>
        {productsByUser.map((item) => (
            <Box sx={{width: 320, m: 2}}>
                <CartItem title={item.title} image={item.image} price={item.price} quantity={item.quantity} productId={item.productId} />
            </Box>
        ))}
        </ImageList>
    </>
  );
}