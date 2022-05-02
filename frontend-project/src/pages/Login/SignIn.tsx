import { Button, Grid } from "@mui/material";
import Link from "@mui/material/Link";
import { Login } from "../../shared/components";
import { useAppStoreContext } from "../../shared/contexts";

export const SignIn = () => {
  const {setUser} = useAppStoreContext()
  const getUser = () => {
    setUser('userid')
  }

  return (
      <Login title='Sign In' urlImage='https://source.unsplash.com/ejhjSZKTeeg'>
          <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={getUser}
          href='/home'
        >
          Sign In
        </Button>
        <Grid container>
            <Grid item>
              <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
        </Grid>
      </Login>
  );
}