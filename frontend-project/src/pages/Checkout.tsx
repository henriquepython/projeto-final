import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AddressForm } from '../shared/components/AddressForm';
import { PaymentForm } from '../shared/components/PaymentForm';
import { ReviewOrder } from '../shared/components/ReviewOrder';

const products = [
  { title: 'Technology', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 5, productId: 'djfs', quantity: 1 },
  { title: 'Technology', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 5, productId: 'djfs', quantity: 1 },
  { title: 'Technology', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 5, productId: 'djfs', quantity: 1 },
  { title: 'Technology', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 5, productId: 'djfs', quantity: 1 },
  { title: 'Technology', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 5, productId: 'djfs', quantity: 1 },
]


const steps = ['Shipping address', 'Payment details', 'Review your order'];

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <ReviewOrder products={products} />;
    default:
      throw new Error('Unknown step');
  }
}

export const Checkout = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
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
                  
        
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </Container>
    </>
  );
}