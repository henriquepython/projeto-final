import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { Button } from '@mui/material';
export const ButtonAddCart = () => {
    return (
        <Button 
            //onClick={'addcart'}
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
            <AddShoppingCartOutlinedIcon /> Add Cart
        </Button>
    );
}