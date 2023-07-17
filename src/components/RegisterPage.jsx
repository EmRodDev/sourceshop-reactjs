import { Box, Container, FormControl, FormLabel, Input, Button, Text, VStack,Link as ChakraLink, FormErrorMessage, SimpleGrid, Icon, IconButton } from '@chakra-ui/react'
import React from 'react'
import { BiLogoDiscord, BiLogoFacebook, BiLogoGoogle, BiLogoTwitter } from 'react-icons/bi'
import { Link as RouterLink } from 'react-router-dom'

export default function RegisterPage() {
  const formProps = {
    bg: 'lightBlue',
    p: '6',
    borderRadius: '10'
  }
  const boxProps = {
    pos: 'relative',
    top: (window.innerHeight / 14)
  }
  const socialProps = {
    borderRadius: '10%'
  }
  return (
    <>
      <FormControl>
        <Box sx={boxProps}>
          <VStack>
            <Text fontSize='4xl'>Registrarse</Text>
            <Container sx={formProps}>
              <FormControl paddingBottom={4}>
                <FormLabel paddingBottom={1}>Correo electrónico</FormLabel>
                <Input type='email' bg='white' required={true} />
                <FormLabel paddingBottom={1} paddingTop={4} required={true}>Contraseña</FormLabel>
                <Input type='password' bg='white' />
                <FormLabel paddingBottom={1} paddingTop={4} required={true}>Repetir contraseña</FormLabel>
                <Input type='password' bg='white' />
              </FormControl>
              <Button type='submit'>Registrarse</Button>
            </Container>
            <Text fontSize='1xl' p={4}>Registrarse con:</Text>
            <SimpleGrid columns={4} spacing={3}>
              <IconButton icon={<BiLogoTwitter size='2em' />} isRound={true}></IconButton>
              <IconButton icon={<BiLogoFacebook size='2em' />} isRound={true}></IconButton>
              <IconButton icon={<BiLogoGoogle size='2em' />} isRound={true}></IconButton>
              <IconButton icon={<BiLogoDiscord size='2em' />} isRound={true}></IconButton>
            </SimpleGrid>
          </VStack>
        </Box>

      </FormControl>
    </>
  )
}

