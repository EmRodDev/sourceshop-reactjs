import { Box, Card, Center, Flex, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import React from "react";
import useQuery from "../../utils/UrlQueryHandler";
import ItemListContainer from "./ProductPage_components/ItemListContainer";
import { GetCategoryById } from "../../utils/GetCategoryInfo";
import { useState,useEffect } from "react";
import { useLocation } from 'react-router-dom';


export default function ProductPage (){
    const getProductType = useQuery("id");

    const [category,setCategory] = useState('');

    const location = useLocation();


    const getCategoryName = async() => {
        if(getProductType !== undefined)
        {
            const cat = await GetCategoryById(parseInt(getProductType));
            await setCategory(cat[0].Name);
        }
    }

    useEffect(() => {
        getCategoryName();

      }, [location]);

    
    return(
        <>
        <Box minH='550px' w='full' display='flex'>
        <Center w='full' h='full' p={6}>
            <VStack w='full' h='full'>
            {getProductType !== undefined ?
                <Text fontSize='3xl' p='10px'>Products {'>'} {category.charAt(0).toUpperCase()+category.slice(1)}</Text>
                :
                <Text fontSize='3xl' p='10px'>All products</Text>

            }
                <SimpleGrid bg='lightgrey' minChildWidth='200px' p={3} spacing='2'  justifyContent={"center"} alignContent={"center"} w='100%' h='100%' >
                <ItemListContainer/>
                </SimpleGrid>
            </VStack>
        </Center>
        </Box>
        </>
    )
}
