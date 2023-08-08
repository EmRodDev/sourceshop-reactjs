import { Box, Card, VStack,Text } from "@chakra-ui/react";
import { BiSolidTruck } from "react-icons/bi";

export default function ConfirmationPage() {
  
    return (
    <>
    <Box p={3} h={{xl:'530px',lg:'530px',md:'full',sm:'full'}} w='full'>
    <Card h='90%' w='full' bg='lightgreen' p={10}>
        <VStack>
            <BiSolidTruck size='6em' color="green"/>
            <Text fontSize={{xl:'6xl',lg:'6xl',md:'3xl',sm:'3xl'}} color='green'><b>Payment successfull</b></Text>
            <Text fontSize={{xl:'4xl',lg:'4xl',md:'xl',sm:'xl'}} color='green'><b>Your order is on the way</b></Text>

        </VStack>
    </Card>
    </Box>
    </>
     )
}
