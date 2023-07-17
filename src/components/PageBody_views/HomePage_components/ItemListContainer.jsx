import { Center, Container, HStack,Text } from "@chakra-ui/react";

export default function ItemListContainer({numItems,greeting}) {
    const containerProps = {
        bg:'lightBlue',
        borderRadius:6,
        w:'250px',
        h:'280px',
        marginBottom:4,
        marginTop:4,
        cursor:'pointer',
        className:'items'
    };
    return (
    <>
    <Center>
        <Text fontSize='5xl'>
        {greeting}
        </Text>
    </Center>
    <HStack>
        {numItems.map((index)=>
         (<Container sx={containerProps} key={index}>{index}</Container>
         ))}
    </HStack>
    
    
    </>
  )
}
