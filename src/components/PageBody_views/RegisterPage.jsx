import { Box, Container, FormControl, FormLabel, Input, Button, Text, VStack,Link as ChakraLink, FormErrorMessage, SimpleGrid, Icon, IconButton } from '@chakra-ui/react'
import React from 'react'
import { BiLogoDiscord, BiLogoFacebook, BiLogoGoogle, BiLogoTwitter } from 'react-icons/bi'
import SocialNetWidget from './LoginAndRegisterPage_components/SocialNetWidget'

export default function RegisterPage() {
  const formProps = {
    bg: 'lightBlue',
    p: '6',
    borderRadius: '10'
  }
  const boxProps = {
    paddingTop:'30px'
  }



  return (
    <>
      <FormControl h='600px'>
        <Box sx={boxProps}>
          <VStack>
            <Text fontSize='4xl'>Register</Text>
            <Container sx={formProps}>
              <FormControl paddingBottom={4}>
                <FormLabel paddingBottom={1}>Email</FormLabel>
                <Input type='email' bg='white' required={true} />
                <FormLabel paddingBottom={1} paddingTop={4} required={true}>Password</FormLabel>
                <Input type='password' bg='white' />
                <FormLabel paddingBottom={1} paddingTop={4} required={true}>Repeat password</FormLabel>
                <Input type='password' bg='white' />
              </FormControl>
              <Button type='submit'>Sign up</Button>
            </Container>
            <Text fontSize='1xl' p={4}>Sign up with:</Text>
            <SimpleGrid columns={4} spacing={3}>
              <SocialNetWidget/>
            </SimpleGrid>
          </VStack>
        </Box>

      </FormControl>
    </>
  )
}

