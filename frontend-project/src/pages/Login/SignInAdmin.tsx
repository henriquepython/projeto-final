import { Button } from "@mui/material";
import { Login } from "../../shared/components";


export const SignInAdmin = () => {
  return (
    <Login title='Admin Sign In' urlImage='https://source.unsplash.com/JMUIJaZllUs'>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          href='/admin'
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
    </Login>
  );
}