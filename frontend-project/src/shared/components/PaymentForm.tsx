import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

export const PaymentForm = () => {
	return (
		<>
			<Typography variant="h6" gutterBottom>
                Método de Pagamento
			</Typography>
			<Grid container spacing={3}>
				<Grid item xs={12} md={6}>
					<TextField
						required
						id="cardName"
						label="Nome do Cartão"
						fullWidth
						autoComplete="cc-name"
						variant="standard"
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						required
						id="cardNumber"
						label="Numero do Cartão"
						fullWidth
						autoComplete="cc-number"
						variant="standard"
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						required
						id="expDate"
						label="Vencimento"
						fullWidth
						autoComplete="cc-exp"
						variant="standard"
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						required
						id="cvv"
						label="CVV"
						helperText="Last three digits on signature strip"
						fullWidth
						autoComplete="cc-csc"
						variant="standard"
					/>
				</Grid>
			</Grid>
		</>
	);
};