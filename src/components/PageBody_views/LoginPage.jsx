import { Box, Container, FormControl, FormLabel, Input, Button, Text, VStack,Link as ChakraLink, FormErrorMessage, SimpleGrid, Icon, IconButton } from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import SocialNetWidget from './LoginAndRegisterPage_components/SocialNetWidget'

export default function LoginPage() {
    const formProps = {
        bg:'lightBlue',
        p:'6',
        borderRadius:'10'
    }
    const boxProps = {
        paddingTop:'40px'
    }
    const socialProps = {
        borderRadius:'10%'
    }
  return (
    <>
    <FormControl h='570px'>
        <Box sx={boxProps}>
        <VStack>
        <Text fontSize='4xl'>Sign in</Text>
        <Container sx= {formProps}>
            <FormControl paddingBottom={4}>
                <FormLabel paddingBottom={1}>Email</FormLabel>
                <Input type='email' bg='white' required={true}/>
                <FormLabel paddingBottom={1} paddingTop={4} required={true}>Password</FormLabel>
                <Input type='password' bg='white'/>
                
            </FormControl>
            <Button type='submit'>Ingresar</Button>
        </Container>
        <Text>Not registered yet? <ChakraLink to='/register' textColor='blue'><RouterLink to='/register'>Sign up here</RouterLink></ChakraLink></Text>
        <Text fontSize='1xl' p={4}>Login with:</Text>
        <Box>
        <SimpleGrid columns={4} spacing={3}>
            <SocialNetWidget/>
        </SimpleGrid>
        </Box>
        </VStack>
        </Box>

    </FormControl>
    </>
  )
}
