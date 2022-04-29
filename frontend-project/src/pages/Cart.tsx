import { Box, Button, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { Link, Navigate } from "react-router-dom";
import { CartList } from "../shared/components/Cart/CartList";

export const Cart = () => {
    
    return (
        <>
            <Box sx={{ width: '100vw'}}>
                <CartList />
            </Box>
            <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'row'}}>
                <Button
                variant="contained"
                sx={{ mt: 3, ml: 1 }}
                href='/checkout'
                >
                    Finalizar compra
                </Button>
                <Button
                variant="contained"
                sx={{ mt: 3, ml: 1 }}
                href='/home'
                >
                    voltar
                </Button>
            </Box>
        </>
    );
};