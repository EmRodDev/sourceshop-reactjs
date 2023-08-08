import { Card, HStack,Tr,Th, Table, TableContainer, Thead, Tbody,Td,Image,Text, Button, VStack, Center, AbsoluteCenter, Box, useDimensions, SimpleGrid } from '@chakra-ui/react'
import { BiTrash } from 'react-icons/bi';
import {useContext, useState,useEffect,useRef} from 'react'
import { CartContext } from '../../context/CartContext';
import PaypalWidget from './CartPage_components/PaypalWidget';
export default function CartPage() {
  const {cartItems, removeItem} = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [payCardElemHeight,setPayCardElemHeight] = useState(0);
  const payCardElem = useRef(null);
  
  


  //Gets the total amount of each item, multiplying its price with its quantity 
  var getTotalOfItem = (quantity,price) => {
    var first = parseInt(quantity);
    var second = parseInt(price)
    return (first * second)
  }

  //Gets the total amount of the cart
  const getAllTotal = () =>{
    if(cartItems != ''){
      setTotalPrice(cartItems.reduce((prev, next) => (prev + (next.quantity * next.price)), 0));
    }
  }

  useEffect(() => {
    getAllTotal();
  }, [cartItems]);

  //Observes and gets the height of the payment card
  useEffect(() => {
    if(!payCardElem.current) return;
    const resizeObserver = new ResizeObserver (() =>{
      try{
        setPayCardElemHeight(payCardElem.current.clientHeight)
      }catch(e){
        console.log('unable to set the height of the card element')
      }
      
    });
    resizeObserver.observe(payCardElem.current);
    return () => resizeObserver.disconnect();
  }, []);

  return (
    cartItems.length > 0 ?
    <Card p={5}>
    
      <SimpleGrid columns={{xl:2,lg:2,md:1,sm:1}} spacingX={0} spacingY={3}>
      <Box align='center' w='full'>
        <Card w='90%' bg='lightblue' align='center' h={payCardElemHeight}>
          <TableContainer w='full'>
            <Table variant='simple'>
              <Tbody>
                {cartItems.map((value,index)=>(
                  <Tr key={'row'+index}>
                    <Td key={'image_item'+index}><Image src={value.img} w='70px' h='70px'/></Td>
                    <Td key={'name_item'+index}><Text>{value.name}</Text></Td>
                    <Td key={'quantity_item'+index}><Text>x{value.quantity}</Text></Td>
                    <Td key={'price_item'+index}><Text>US${getTotalOfItem(value.quantity,value.price)}</Text></Td>
                    <Td key={'remove_item'+index}><Button onClick={(() =>{removeItem(value.id)})}><BiTrash/></Button></Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Card>
        </Box>
        <Center w='full'>
        <Card w='90%' minHeight='500px' bg='lightgray' align='center' ref={payCardElem}>
          <VStack>
          <Text fontSize='5xl' p={10}>Total: US${totalPrice}</Text>
          <Text fontSize='3xl'>Pay with:</Text>
          <Box w='full'>
          {totalPrice != 0 ? <PaypalWidget total={totalPrice} forceReRender={totalPrice}/>: "loading"}
          </Box>
          </VStack>
        </Card>
        </Center>
        </SimpleGrid>
      
      </Card>
      :
      <HStack p={5}>
      <Card h='300px' w='full' bg='lightgray' align='center'>
        <Text top='40%' pos='relative' fontSize={{xl:'5xl',lg:'5xl',md:'xl',sm:'xl'}}>There's no items on the cart</Text>
      </Card>
      </HStack>
      
  )
}
