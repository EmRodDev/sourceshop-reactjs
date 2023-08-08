import { Card, Center, Container, HStack,Text,Image } from "@chakra-ui/react";
import { GetItemInfoBySold } from "../../../utils/GetItemInfo";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MostSoldItemsComponent({greeting}) {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();
    const fetchData = async() => {
        const executeFetch = await GetItemInfoBySold();
        await setItems(executeFetch);
    }

    const containerProps = {
        border: '2px',
        borderColor:'lightblue',
        borderRadius:6,
        w:{xl:'250px',lg:'250px',md:'200px',sm:'100px'},
        h:{xl:'280px',lg:'280px',md:'200px',sm:'140px'},
        marginBottom:4,
        marginTop:4,
        cursor:'pointer',
        className:'items'
    };
    useEffect(() => {
        fetchData();

      }, []);

    return (
    <>
    <Center>
        <Text fontSize='5xl'>
            {greeting}
        </Text>
    </Center>
    <HStack spacing={20}>
    {items.map((value,index)=>(
            <Image sx={containerProps} key={value.id} src={value.img} onClick={(()=>navigate('/item/'+value.id))}/>
    ))}
    </HStack>
    
    
    </>
  )
}
