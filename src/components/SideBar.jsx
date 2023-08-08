import { Stack, Text, AccordionButton, AccordionItem, Avatar, Button, Drawer, DrawerContent, DrawerHeader, DrawerOverlay, Spacer, VStack, Box, AccordionIcon, AccordionPanel, Divider, DrawerFooter, DrawerBody, Center, extendTheme, Portal, AbsoluteCenter, Icon, HStack, SimpleGrid, Square, Badge } from "@chakra-ui/react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";


export default function SideBar({ isOpen, onClose }) {
    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();
    const goToProductsPage_cellphones = () => navigate('/category/cellphones');
    const goToProductsPage_laptops = () => navigate('/category/laptops');
    const goToProductsPage_peripherals = () => navigate('/category/peripherals');
    const goToProductsPage = () => navigate('/category/');

    const goToLoginPage = () => navigate('/login');
    const goToCartPage = () => navigate('/cart');

    return (
        <>
            <Drawer isOpen={isOpen} onClose={onClose} placement='right'>
                <DrawerOverlay w='100%' h='100%' />
                <DrawerContent>
                    <DrawerHeader bg='lightBlue' >
                        <VStack spacing={0}>
                            <Box h='60px' w='40%' alignItems={'center'}>
                                <Box as={Square} w='100%' h='100%' align='center'>
                                <Avatar />
                                </Box>
                            </Box>
                            <Box h='60px' w='70%' as={Square}>
                                <Button w='150px' h='40px' onClick={goToLoginPage}>Sign in</Button>
                            </Box>
                        </VStack>
                    </DrawerHeader>
                    <DrawerBody>
                        <Text cursor='pointer' fontSize='3xl' textAlign='right' onClick={goToCartPage}>Shopping cart ({cartItems.length})</Text>
                        <Divider h='2px' bg='lightgrey' />
                        <Box w='100%' h='35px' as='button' onClick={goToProductsPage}> <Text fontSize='xl' textAlign='right' textStyle=''><b>Catalogue</b></Text></Box>
                        <Box w='100%' h='30px' as='button' onClick={goToProductsPage_cellphones}> <Text fontSize='xlg' textAlign='right' textStyle=''>Cellphones</Text></Box>
                        <Box w='100%' h='30px' as='button' onClick={goToProductsPage_laptops}> <Text fontSize='xlg' textAlign='right' textStyle=''>Laptops</Text></Box>
                        <Box w='100%' h='30px' as='button' onClick={goToProductsPage_peripherals}> <Text fontSize='xlg' textAlign='right' textStyle=''>Peripherals</Text></Box>

                    </DrawerBody>
                    <DrawerFooter bg='lightgrey' justifyContent={'center'}>
                        <Box>Source Shop - 2023</Box>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>

        </>
    )
}