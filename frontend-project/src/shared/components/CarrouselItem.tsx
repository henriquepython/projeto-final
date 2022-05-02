import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ProductItem } from './Cart/ProductItem';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { useAppThemeContext } from '../contexts';
import { ButtonAddCart } from '.';

const products = [
    { title: 'Sports', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, productId: 'djfs'},
    { title: 'Sports', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, productId: 'djfs'},
    { title: 'Sports', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, productId: 'djfs'},
    { title: 'Sports', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, productId: 'djfs'},
    { title: 'Sports', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, productId: 'djfs'},
    { title: 'Sports', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, productId: 'djfs'},
    { title: 'Sports', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, productId: 'djfs'},
    { title: 'Sports', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, productId: 'djfs'},
    { title: 'Sports', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, productId: 'djfs'},
    { title: 'Sports', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, productId: 'djfs'},
    { title: 'Sports', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, productId: 'djfs'},
    { title: 'Sports', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, productId: 'djfs'},
     ]

     interface CarrouselProps {
         category: string;
     }
export const CarrouselItem = (props: CarrouselProps) => {
    const {category} = props;
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      const { themeName } = useAppThemeContext();
      return(
        <Container sx={{ my: 5}}>
            <Typography 
                sx={{mb: 4, fontSize: 30,display: 'flex', justifyContent: 'center', width: '100%', color: themeName === 'light' ? 'black' : 'white'}}
            >
                {category}
            </Typography>
            <Carousel 
                autoPlay= {false}
                arrows= {true}
                centerMode= {true}
                responsive={responsive}
            >
                {products.map((item) => (
                    <Box sx={{width: '90%'}}>
                        <ProductItem title={item.title} image={item.image} price={item.price} productId={item.productId}>
                        <Grid item>
                          <ButtonAddCart />
                        </Grid>
                        </ProductItem>
                    </Box>
                ))}
            </Carousel>
        </Container>
    );
  }