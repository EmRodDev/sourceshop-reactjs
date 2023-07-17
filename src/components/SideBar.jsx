import { Stack, Text, AccordionButton, AccordionItem, Avatar, Button, Drawer, DrawerContent, DrawerHeader, DrawerOverlay, Spacer, VStack, Box, AccordionIcon, AccordionPanel, Divider, DrawerFooter, DrawerBody, Center, extendTheme, Portal, AbsoluteCenter, Icon, HStack, SimpleGrid, Square, Badge } from "@chakra-ui/react";
import { BiCart } from "react-icons/bi";
import CartWidget from "./NavBar_components/CartWidget";


export default function SideBar({ isOpen, onClose }) {
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
                                <Button w='150px' h='40px'>Iniciar sesión</Button>
                            </Box>
                        </VStack>
                    </DrawerHeader>
                    <DrawerBody>
                        <Text fontSize='3xl' textAlign='right'>Carrito (0)</Text>
                        <Divider h='2px' bg='lightgrey' />
                        <Box w='100%' h='35px'> <Text fontSize='xl' textAlign='right' textStyle=''><b>Catálogo</b></Text></Box>
                        <Box w='100%' h='30px' as='button'> <Text fontSize='xlg' textAlign='right' textStyle=''>Celulares</Text></Box>
                        <Box w='100%' h='30px' as='button'> <Text fontSize='xlg' textAlign='right' textStyle=''>Laptops</Text></Box>
                        <Box w='100%' h='30px' as='button'> <Text fontSize='xlg' textAlign='right' textStyle=''>Periféricos</Text></Box>

                    </DrawerBody>
                    <DrawerFooter bg='lightgrey' justifyContent={'center'}>
                        <Box>Source Shop - 2023</Box>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>

        </>
    )
}