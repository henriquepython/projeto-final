import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

export const AddressForm = () => {
	return (
		<>
			<Typography variant="h6" gutterBottom>
                Shipping address
			</Typography>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<TextField
						required
						id="name"
						name="name"
						label="Name"
						fullWidth
						autoComplete="given-name"
						variant="standard"
					/>
				</Grid>
        
				<Grid item xs={12}>
					<TextField
						required
						id="address"
						name="address"
						label="Address"
						fullWidth
						autoComplete="shipping address"
						variant="standard"
					/>
				</Grid>
      
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id="city"
						name="city"
						label="City"
						fullWidth
						autoComplete="shipping address-level2"
						variant="standard"
					/>
				</Grid>

				<Grid item xs={12} sm={6}>
					<TextField
						id="state"
						name="state"
						label="State"
						fullWidth
						variant="standard"
					/>
				</Grid>
				
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id="zip"
						name="zip"
						label="Postal code"
						fullWidth
						autoComplete="shipping postal-code"
						variant="standard"
					/>
				</Grid>
				
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id="country"
						name="country"
						label="Country"
						fullWidth
						autoComplete="shipping country"
						variant="standard"
					/>
				</Grid>
			</Grid>
		</>
	);
};