import { useDisclosure, Box, Avatar, Spacer, Image, Button, HStack, ButtonGroup, Menu, MenuButton, MenuList, MenuItem, Text, SimpleGrid, VStack, InputGroup, Stack, Input, InputRightElement, InputRightAddon, Show, Hide, IconButton, Flex } from '@chakra-ui/react'
import { useCallback } from 'react';
import { BiCart, BiSearch, BiMenu } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import {CartWidget} from './NavBar_components/CartWidget';
import SearchWidget from './NavBar_components/SearchWidget';
import ButtonViewsWidget from './NavBar_components/ButtonViewsWidget';

export default function NavBar({ onClick }) {
    const navigate = useNavigate();
    const goToHomePage = () => navigate('/');
    const goToLoginPage = () => navigate('/login')

    const logoPath = '/logo.png'

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
                            <SearchWidget/>
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
                                                    Sign in
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
                                <ButtonViewsWidget/>
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
                            <Image w='100%' h='100%' src={logoPath} onClick={goToHomePage} cursor='pointer' />
                        </Box>
                        <Spacer />
                        <Box w='270px' h='70px'>
                           <SearchWidget/>
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
