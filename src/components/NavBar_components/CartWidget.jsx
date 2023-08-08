import { Menu,MenuButton,MenuList,Image,Text,Icon,Badge,Stack, MenuItem, SimpleGrid, Center, Button, useDisclosure, Box } from "@chakra-ui/react"
import { BiCart,BiTrash } from "react-icons/bi"
import { CartContext } from "../../context/CartContext"
import { useContext} from "react"
import { useNavigate } from "react-router-dom"

export function CartWidget() {
  const navigate = useNavigate();
  const iconCartPers = () => <BiCart size='2em'/>
  const {cartItems} = useContext(CartContext);
  const { isOpen, onOpen, onClose } = useDisclosure()

  if (!location.pathname.match('/cart')){
  return(
    <>
    <Menu placement='bottom-end' isOpen={isOpen}>
        <MenuButton onMouseEnter={onOpen} onMouseLeave={onClose} onClick={(() =>{navigate('/cart');onClose();})}>
          <Stack>
          <Icon as={iconCartPers}/>
           <Badge bg='red'textColor='white' pos='absolute' transform={'translate(170%,140%)'}>{cartItems.length}</Badge>
          </Stack>
        </MenuButton>
        <MenuList minH='30px' w='350px' onMouseEnter={onOpen} onMouseLeave={onClose}>
          {
            cartItems.length > 0 ?
            cartItems.map((value,index) =>(
            <MenuItem key={index} w='full' h='70px'>
              <SimpleGrid columns={3} w='full' h='full'>
                <Box  display='flex' alignItems='center' justifyContent='center'>
                <Center><Image src={value.img} w='50px' h='50px'/></Center>
                </Box>
                <Box display='flex' alignItems='center' justifyContent='center'>
                <Center><Text fontSize='15' textAlign='center'>{value.name}</Text></Center>
                </Box>
                <Box  display='flex' alignItems='center' justifyContent='center'>
                <Center><Text fontSize='15' textAlign='center'>x {value.quantity}</Text></Center>
                </Box>
              </SimpleGrid>
            </MenuItem>
            )):
            <Text textColor='grey'>There is no products here</Text>
          }
        </MenuList>
    </Menu>
    </>
    )
  }else return null;
}
