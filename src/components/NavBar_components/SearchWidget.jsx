import { Hide, Show,InputGroup,Input,InputRightAddon,Button } from '@chakra-ui/react'
import { BiSearch } from 'react-icons/bi'
import React from 'react'

export default function SearchWidget() {
  return (
    <>
    <Show above='750px'>
    <InputGroup top='15px' borderColor='black'>
        <Input placeholder="Search products..." bg='white' type='search' h='30px' />
        <InputRightAddon p={0} h='30px'><Button w='100%' h='100%'><BiSearch /></Button></InputRightAddon>
    </InputGroup>
    </Show>
    <Hide above='750px'>
        <InputGroup borderColor='black' h='100%' top='20%'>
            <Input placeholder="Search products.." bg='white' type='search' h='60%' />
            <InputRightAddon p={0} h='60%'><Button w='100%' h='100%'><BiSearch /></Button></InputRightAddon>
        </InputGroup>
    </Hide>
    </>
  )
}
