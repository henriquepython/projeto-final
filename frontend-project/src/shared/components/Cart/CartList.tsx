import { Box } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import { ProductCart } from './ProductCart';


  const Products = [
    { title: 'Technology', image: '#', price: 1, productId: 'djfs' },
    { title: 'Technology', image: '#', price: 1, productId: 'djfs' },
    { title: 'Technology', image: '#', price: 1, productId: 'djfs' },
    { title: 'Technology', image: '#', price: 1, productId: 'djfs' },
    { title: 'Technology', image: '#', price: 1, productId: 'djfs' },
    { title: 'Technology', image: '#', price: 1, productId: 'djfs' },
    { title: 'Technology', image: '#', price: 1, productId: 'djfs' },
  ]

export const CartList = () => {
  return (
      <>
        <ImageList sx={{ width: '100vw', height: 350, display: { xs: 'flex', md: 'flex' }, flexShrink: 1, flexWrap: 'wrap', justifyContent: 'center', flexDirection: 'row' }}>
        {Products.map((item) => (
            <Box sx={{width: 220, m: 2}}>
                <ProductCart title={item.title} image={item.image} price={item.price} productId={item.productId} />
            </Box>
        ))}
        </ImageList>
    </>
  );
}