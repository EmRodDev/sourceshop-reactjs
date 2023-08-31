import React, { useContext, useEffect, useState, ChangeEvent } from 'react'
import useQuery from '../../utils/UrlQueryHandler';
import { Box, Card, Center, SimpleGrid, Flex, Text, Image, Button, HStack, Select } from '@chakra-ui/react';
import { GetItemInfoByID } from '../../utils/GetItemInfo';
import { CartContext } from '../../context/CartContext';
import { GetCategoryById } from "../../utils/GetCategoryInfo";
import { useLocation } from 'react-router-dom';
import { LoadingContext } from '../../context/LoadingContext';

export default function ProductDetailsPage() {

  const [product, setProductInfo] = useState([]);
  const [category, setCategory] = useState('');
  const [stockNumber, setStock] = useState(0);
  const [selectedStock, setSelectedStock] = useState(1);
  const location = useLocation();


  const { addItem } = useContext(CartContext);
  const { isLoading } = useContext(LoadingContext);

  const getItemId = useQuery("id");

  const renderStock = () => {
    let items = [];
    if (stockNumber < 5) {
      for (let i = 2; i <= stockNumber; i++) {
        items.push(<option key={i}>{i}</option>);
      }
    } else {
      for (let i = 2; i <= 5; i++) {
        items.push(<option key={i} value={i}>{i}</option>);
      }
    }

    return items;
  }
  const pushProducts = (() => {
    addItem(product, selectedStock);
  });

  const getCategoryName = async (id) => {
    const category = await GetCategoryById(parseInt(id));
    return category[0].Name
  }

  const invokeFunctions = async () => {
    await isLoading(true);
    const productInfo = await GetItemInfoByID(getItemId);
    setProductInfo(productInfo);
    setCategory(await getCategoryName(productInfo.Category_ID));
    setStock(productInfo.Stock);
    await isLoading(false);
  }



  useEffect(() => {
    invokeFunctions();
  }, []);

  useEffect(() => {
    invokeFunctions();
  }, [location]);

  if (product !== undefined && category !== undefined) {
    return (
      <>
        <Center as={Box} w='100%' minH='1000px' p={4}>
          <Card h='90%' w='95%' bg='lightgrey' p={4}>
            <Box>
              <SimpleGrid columns={{ lg: 2, md: 1, sm: 1 }} paddingTop={10} paddingLeft={10} paddingRight={10} spacing={5} paddingBottom={{ lg: 4, md: 5, sm: 5 }}>
                <Image src={product.ImgURL} w={{ lg: '500px', md: '100%', sm: '100%' }} borderRadius={20} paddingBottom={{ lg: 0, md: 5, sm: 5 }}></Image>
                <Box bg='grey' w='100%' borderRadius={20}>
                  <Box>
                    <Text fontSize='3xl' align='center'><b>{product.Name}</b></Text>
                    <Text fontSize='xl' align='center'><b>US${product.Price}</b></Text>
                  </Box>
                  <Box alignItems='start' justifyItems='start' h={{ xl: '160px', lg: '130px', md: '150px', sm: '130px' }} p={6}>
                    <Text textAlign='left'><b>Stock: {product.Stock}</b></Text>
                    <Text textAlign='left'><b>Category: {category.charAt(0).toUpperCase() + category.slice(1)}</b></Text>
                  </Box>
                  <Box paddingBottom={10}>
                    <Center>
                      {product.Stock > 0 ?
                        <HStack>
                          <Text textAlign='center'><b>Quantity:</b></Text>
                          <Select bg='white' placeholder='1' w='60px' onChange={(ev) => setSelectedStock(ev.target.value)}>
                            {renderStock()}
                          </Select>
                        </HStack>
                        :
                        null
                      }
                    </Center>
                  </Box>
                  <Flex justifyContent='center' justifyItems='center' align='center' paddingBottom={4}>
                    {product.Stock > 0 ?
                      <HStack spacing={6}>
                        <Button w='60%' onClick={pushProducts}>Add to cart</Button>
                        <Button w='60%'>Buy Now</Button>
                      </HStack>
                      :
                      <Text fontSize='4xl'><b>Product out of stock</b></Text>
                    }


                  </Flex>
                </Box>
              </SimpleGrid>
            </Box>
            <Box bg='grey' borderRadius={20} h='400px' w='95%' alignSelf='center'>
              <Text textAlign='center' p={2}><b>Description:</b></Text>
              <Text p={6}>{product.Description}</Text>
            </Box>
          </Card>
        </Center>
      </>
    )

  } else if (product == undefined) {
    return (
      <>
        <Center as={Box} w='100%' minH='500px' p={2} paddingBottom={0}>
          <Card h='500px' w='95%' bg='lightgrey' p={4}>
            <Text textAlign='center'><b>This product doesn't exist</b></Text>
          </Card>
        </Center>
      </>
    )
  }
}
