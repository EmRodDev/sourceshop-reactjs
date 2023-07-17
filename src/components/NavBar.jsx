import { AbsoluteCenter, Box, Avatar, Spacer, Image, Button, HStack, ButtonGroup, Menu, MenuButton, MenuList, MenuItem, Text, SimpleGrid, VStack, InputGroup, Stack, Input, InputRightElement, InputRightAddon, Show, Hide, IconButton, Flex } from '@chakra-ui/react'
import { useCallback } from 'react';
import { BiCart, BiSearch, BiMenu } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import CartWidget from './NavBar_components/CartWidget';

export default function NavBar({ onClick }) {
    //Routes
    const navigate = useNavigate();
    const goToHomePage = () => navigate('/');
    const goToProductsPage_cellphones = () => navigate('/products?product=cellphones');
    const goToProductsPage_laptops = () => navigate('/products?product=laptops');
    const goToProductsPage_peripherals = () => navigate('/products?product=peripherals');

    const goToAboutPage = () => navigate('/about');
    const goToLoginPage = () => navigate('/login')

    //Path of the logo
    const logoPath = './logo.png'

    /*Hides almost all the contents of the NavBar expect the company logo if the webpage's subpath is 'login' or 'register', avoiding the urge
     to create multiple Router components*/
    if (location.pathname.match('/login') || location.pathname.match('/register')) {
        return (
            <>
                <Flex as='nav' bgColor='lightblue' maxW='100%' minW='400px' h='80px' alignItems={'center'}>
                    <Image w='70px' h='70px' src={logoPath} onClick={goToHomePage} cursor='pointer' pos='absolute' left='30px' />
                </Flex>
            </>
        )
    } else {

        return (
            <>
                {/*Desktop*/}
                <Show above='750px'>
                    <SimpleGrid as='nav' columns={3} spacingX={1} spacingY={0} bgColor='lightblue' maxW='100%' minW='400px' h='100px' textAlign='center'>
                        <Box w='100%' height='47px' align='center'>
                            <Box w='100px' h='100px' position='relative' >
                                <VStack>
                                    <HStack>
                                        <Image w='100%' h='100%' src={logoPath} onClick={goToHomePage} cursor='pointer' />
                                    </HStack>
                                </VStack>
                            </Box>
                        </Box>
                        <Box w='100%' height='47px' align='center'>
                            <InputGroup top='15px' borderColor='black'>
                                <Input placeholder="Buscar productos" bg='white' type='search' h='30px' />
                                <InputRightAddon p={0} h='30px'><Button w='100%' h='100%'><BiSearch /></Button></InputRightAddon>
                            </InputGroup>
                        </Box>
                        <Box w='100%' height='47px'>
                            <Box w='100px' h='50px' top='50%' left='40%' position='relative'>
                                <VStack>
                                    <HStack spacing='24px'>
                                        <CartWidget />
                                        <Menu placement='bottom-end'>
                                            <MenuButton><Avatar bg='#646464' hover={{ bg: 'black' }} /></MenuButton>
                                            <MenuList>
                                                <MenuItem onClick={goToLoginPage}>
                                                    Iniciar Sesión
                                                </MenuItem>
                                            </MenuList>
                                        </Menu>
                                    </HStack>
                                </VStack>

                            </Box>
                        </Box>
                        <Box w='100%' height='47px'></Box>
                        <Box w='100%' height='47px'>
                            <VStack>
                                <Spacer />
                                <ButtonGroup w='100%' h='100%' flexGrow='6'>
                                    <Button variant='ghost' size='lg' _hover={{ bg: 'white' }} colorScheme='white' w='100%' h='70%' onClick={goToHomePage}>Inicio</Button>
                                    <Spacer />
                                    <Menu placement='bottom'>
                                        <MenuButton as={Button} variant='ghost' size='lg' _hover={{ bg: 'white' }} colorScheme='white' w='100%' h='70%' top='0.1px'>
                                            Catálogo
                                        </MenuButton>
                                        <MenuList>
                                            <MenuItem onClick={goToProductsPage_cellphones}>Celulares</MenuItem>
                                            <MenuItem onClick={goToProductsPage_laptops}>Laptops</MenuItem>
                                            <MenuItem onClick={goToProductsPage_peripherals}>Periféricos</MenuItem>
                                        </MenuList>
                                    </Menu>
                                    <Spacer />
                                    <Button variant='ghost' size='lg' _hover={{ bg: 'white' }} colorScheme='white' w='100%' h='70%' onClick={goToAboutPage}>Acerca de</Button>
                                </ButtonGroup>
                                <Spacer />
                            </VStack>
                        </Box>
                        <Box w='100%' height='47px'></Box>
                    </SimpleGrid>
                </Show>
                {/*Mobile*/}
                <Hide above='750px'>
                    <Flex as='nav' h='100px' w='100%' align={'center'} bgColor={'lightblue'}>
                        <Box w='80px' h='80px'>
                            <Image w='100%' h='100%' src={logoPath} />
                        </Box>
                        <Spacer />
                        <Box w='270px' h='70px'>
                            <InputGroup borderColor='black' h='100%' top='20%'>
                                <Input placeholder="Buscar productos" bg='white' type='search' h='60%' />
                                <InputRightAddon p={0} h='60%'><Button w='100%' h='100%'><BiSearch /></Button></InputRightAddon>
                            </InputGroup>
                        </Box>
                        <Spacer />
                        <Box w='80px' h='80px'>
                            <Button variant='ghost' w='100%' h='100%' onClick={onClick}>
                                <BiMenu size='3em' />
                            </Button>
                        </Box>
                    </Flex>
                </Hide>
            </>
        )
    }
}
