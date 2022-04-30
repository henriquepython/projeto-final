import { Grid } from "@mui/material";
import Link from "@mui/material/Link";
import { Login } from "../../shared/components";

export const SignIn = () => {

  return (
      <Login title='Sign In' urlImage='https://source.unsplash.com/ejhjSZKTeeg'>
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