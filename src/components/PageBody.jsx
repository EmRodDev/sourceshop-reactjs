import {Routes, Route, useNavigate,redirect, Navigate } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import HomePage from "./PageBody_views/HomePage";
import ProductPage from "./PageBody_views/ProductPage";
import AboutPage from "./PageBody_views/AboutPage";
import ProductDetailsPage from "./PageBody_views/ProductDetailsPage";
import RegisterPage from "./PageBody_views/RegisterPage";
import LoginPage from "./PageBody_views/LoginPage";
import CartPage from "./PageBody_views/CartPage";
import ConfirmationPage from "./PageBody_views/ConfirmationPage";
import NotFoundPage from "./NotFoundPage";
import { useEffect } from "react";


export default function PageBody (){
    let browserHeight = window.innerHeight;
    useEffect(() => {
        browserHeight = (window.innerHeight);
    }, []);
    
    return(
        <>
        <Box w='full' minH={browserHeight -220}>
        <Routes>
                <Route exact path='/' element={<HomePage/>}/>
                <Route exact path='/category/:id?' element={<ProductPage/>}/>
                <Route exact path='/about' element={<AboutPage/>}/>
                <Route exact path='/login' element={<LoginPage/>}/>
                <Route exact path='/register' element={<RegisterPage/>}/>
                <Route exact path='/item/:id' element={<ProductDetailsPage/>}/>
                <Route exact path='/cart' element={<CartPage/>}/>
                <Route exact path='/confirmation/:status' element={<ConfirmationPage/>}/>
                <Route exact path='/404' element={<NotFoundPage/>}/>
                <Route path="*" element={<Navigate to="/404" replace />}/>
        </Routes>
        </Box>
        </>
    )
}