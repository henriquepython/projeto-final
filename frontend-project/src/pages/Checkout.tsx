import * as React from 'react';
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

interface ICartCheckout {
	userId: string;
	productId: string;
	quantity: number;
	price: number;
	title: string;
	image: string;
}

export const Checkout = () => {
	const [checkout, setCheckout] = useState<ICartCheckout[]>([]);
	const idUser = sessionStorage.getItem('id_user');
	const [activeStep, setActiveStep] = React.useState(0);

	useEffect(()=> {
		console.log(idUser);
		api.get(`cart/user/${idUser}`)
			.then((response)=> {
				setCheckout(response.data);
				console.log(JSON.stringify(response.data));
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const getStepContent = (step: number) => {
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
	};

	const handleNext = () => {
		setActiveStep(activeStep + 1);
	};

	const handleBack = () => {
		setActiveStep(activeStep - 1);
	};

	const handleOrder = async () => {
		const userId = sessionStorage.getItem('id_user');
		
		await api.post('order/', {
			userId: userId,
		})
			.then((response)=>{
				console.log(response.data);
				setActiveStep(activeStep + 1);
			})
			.catch((err)=>{
				console.log(err);
				alert('Usuário não cadastrado');
			});
	};

	return (
		<Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
			<Paper 
				variant="outlined" 
				sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 }, background: 'white' }}>
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

				<>
					{activeStep === steps.length ? (
							
						<>
							<Typography variant="h5" gutterBottom>
                  Obrigado por comprar na nossa loja.
							</Typography>
							<Typography variant="subtitle1">
                  Seu pedido foi realizado, assim que enviarmos iremos lhe informar.
							</Typography>
						</>
							
					) : (

						<>
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
                      Voltar
									</Button>
								)}

								{activeStep === steps.length - 1 ? (
									<Button
										variant="contained"
										onClick={handleOrder}
										sx={{ mt: 3, ml: 1 }}
									>
											Finalizar Compra
									</Button>    
										
								):( 
										
									<Button
										variant="contained"
										onClick={handleNext}
										sx={{ mt: 3, ml: 1 }}
									>
											Next
									</Button> 
								)}
							</Box>
						</>
					)}
				</>
			</Paper>
		</Container>
	);
};
