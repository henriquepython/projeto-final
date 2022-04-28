import { Button, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { Link, Navigate } from "react-router-dom";

export const Cart = () => {
    
    return (
        <>
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
        </>
    );
};