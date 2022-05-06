import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { AddressForm } from '../shared/components/AddressForm';
import { PaymentForm } from '../shared/components/PaymentForm';
import { ReviewOrder } from '../shared/components/ReviewOrder';
import { api } from '../shared/services/api';
import { useEffect, useState } from 'react';


const steps = ['Endereço de entrega', 'Detalhes do pagamento', 'Revisão do pedido'];


export const Checkout = () => {
	const [checkout, setCheckout] = useState([]);
	const idUser = localStorage.getItem('id_user');
	useEffect(()=> {
		console.log(idUser);
		api.get(`cart/user/${idUser}`)
			.then((response)=> {
				setCheckout(response.data);
				console.log(JSON.stringify(response.data));
			});
	}, [idUser]);

	function getStepContent(step: number) {
		switch (step) {
		case 0:
			return <AddressForm />;
		case 1:
			return <PaymentForm />;
		case 2:
			return <ReviewOrder productsByUser={checkout} />;
		default:
			throw new Error('Unknown step');
		}
	}

	const [activeStep, setActiveStep] = React.useState(0);

	const handleNext = () => {
		setActiveStep(activeStep + 1);
	};

	const handleBack = () => {
		setActiveStep(activeStep - 1);
	};

	const handleOrder = async () => {
		const userId = localStorage.getItem('id_user');
		console.log(userId);
		await api.post('order/', {
			userId: {_id: userId}
		}).then((response)=>{
			console.log(response.data);
			setActiveStep(activeStep + 1);
		});
	};

	return (
		<>
			<CssBaseline />
			<Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
				<Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 }, background: 'white' }}>
					<Typography component="h1" variant="h4" align="center">
            Checkout
					</Typography>
					<Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
						{steps.map((label) => (
							<Step key={label}>
								<StepLabel >{label}</StepLabel>
							</Step>
						))}
					</Stepper>
					<React.Fragment>
						{activeStep === steps.length ? (
							<React.Fragment>
								<Typography variant="h5" gutterBottom>
                  Thank you for your order.
								</Typography>
								<Typography variant="subtitle1">
                  Assim que seu pedido for confirmado, continuaremos lhe atualizando.
								</Typography>
							</React.Fragment>
						) : (
							<React.Fragment>
								{getStepContent(activeStep)}
								<Box sx={{ display: 'flex', justifyContent: 'flex-end', color:'primary' }}>
									{activeStep !== 0 && (
										<Button 
											onClick={handleBack}
											variant="contained"
											sx={{ mt: 3, ml: 1 }}>
                      Back
										</Button>
									)}
									{activeStep == 0 && (
										<Button 
											href='/cart'
											variant="contained"
											sx={{ mt: 3, ml: 1 }}>
                      Back
										</Button>
									)}
									{activeStep === steps.length - 1 ? 
										<Button
											variant="contained"
											onClick={handleOrder}
											sx={{ mt: 3, ml: 1 }}
										>
											Finalizar Compra
										</Button>    
										
										: 
										
										<Button
											variant="contained"
											onClick={handleNext}
											sx={{ mt: 3, ml: 1 }}
										>
											Next
										</Button> }
									
								</Box>
							</React.Fragment>
						)}
					</React.Fragment>
				</Paper>
			</Container>
		</>
	);
};
