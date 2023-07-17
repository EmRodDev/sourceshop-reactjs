import { Menu,MenuButton,MenuList,AbsoluteCenter,Text, Box, Icon,Badge, VStack, Stack } from "@chakra-ui/react"
import { BiCart } from "react-icons/bi"

export default function CartWidget() {
  const iconCartPers = () => <BiCart size='2em'/>
  return (
    <>
    <Menu placement='bottom-end'>
        <MenuButton >
          <Stack>
          <Icon as={iconCartPers}/>
           <Badge bg='red'textColor='white' pos='absolute' transform={'translate(170%,140%)'}>0</Badge>
          </Stack>
        </MenuButton>
        <MenuList minH='80px' w='200px' > 
            <AbsoluteCenter w='100%'>
                <Text color='grey'>Aún no tienes productos agregados en tu carrito</Text>
            </AbsoluteCenter>
        </MenuList>
    </Menu>
    </>
    
  )
}
