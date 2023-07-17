import {Routes, Route, useNavigate } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import HomePage from "./PageBody_views/HomePage";
import ProductPage from "./PageBody_views/ProductPage";
import AboutPage from "./PageBody_views/AboutPage";

import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";

export default function PageBody (){

    const browserHeight = window.innerHeight;
    return(
        <>
        <Box w='full' minH={browserHeight}>
        <Routes>
                <Route exact path='/' element={<HomePage/>}/>
                <Route exact path='/products?' element={<ProductPage/>}/>
                <Route exact path='/about' element={<AboutPage/>}/>
                <Route exact path='/login' element={<LoginPage/>}/>
                <Route exact path='/register' element={<RegisterPage/>}/>
        </Routes>
        </Box>
        </>
    )
}