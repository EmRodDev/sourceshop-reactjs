import { Card, Text, Image, Button, Center, Box, SimpleGrid } from '@chakra-ui/react';
import { useNavigate,useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useQuery from '../../../utils/UrlQueryHandler';
import { GetItemInfoByCategory,GetAllItems } from '../../../utils/GetItemInfo';


export default function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    let stateText = "Loading...";
    const getItemType = useQuery("id");

    const fetchData = async () => {

        if(getItemType !== undefined){
            const executeFetch = await GetItemInfoByCategory(getItemType);
            setProducts(executeFetch);
        }else {
            const executeFetch = await GetAllItems();
            setProducts(executeFetch);
        }
        
    };

    useEffect(() => {
        fetchData();
    }, [location]);

    if (products.length > 0) {

        return (

            products.map((product) => (
                <Center key={"card"+product.id}>
                    <Card h='290px' w='200px' p={1}>
                        
                        <SimpleGrid columns={1} alignItems={'center'} justifyContent={'center'}>
                            <Text p={2} align='center' fontSize={{lg:'sm',sm:'sm'}}>{product.name}</Text>
                            <Center ><Image p={2} src={product.img} h='100px' w='120px'/></Center>
                            <Text p={2} align='center'>US${product.price}</Text>
                            <Text align='center' p={3}><b>Stock:</b> {product.stock}</Text>
                            {
                                product.stock > 0 ?
                                <Center><Button bg='gray' w='50%' onClick={(()=>{navigate('/item/'+product.id)})}>Details</Button></Center>
                                :
                                <Center><Button  bg='lightgray' w='50%' isDisabled textColor='red'>Out of stock</Button></Center>
                            }
                        </SimpleGrid>
                        
                    </Card>
                </Center>
            ))
        );
    }else if(products[0] == undefined && getItemType !== undefined){
        stateText = 'There is no products for this category';
        return (
            <>
                <Box w='full' h='full' align={'center'}>
                    <Text fontSize='5xl'>{stateText}</Text>
                </Box>
            </>
        )
    }
}
