import { Box, Container, VStack, Text, Spacer, Image, HStack, Center, SimpleGrid } from "@chakra-ui/react";

export default function FooterPage (){
    return(
        <>
        <Box as='footer' bg='lightgray' w='100%' h='120px' bottom={0}>
            <Container paddingTop='15px'>
            <Center>
            <Text paddingTop='10px' paddingBottom='1px' fontSize='13px'><b>Powered by</b></Text>
            </Center>
                <Box as={Container} w='100px' h='50px' alignContent={'center'}>
                    <Center paddingTop='10px'>
                    <Image alt="Vite.js" src='/vite.svg' w='50%' h='50%'/>
                    <Text textColor='white'><b>+</b></Text>
                    <Image alt="React" src='/react.svg' w='50%' h='50%'/>
                    </Center>
                </Box>
            </Container>

        </Box>
        </>
    )
}