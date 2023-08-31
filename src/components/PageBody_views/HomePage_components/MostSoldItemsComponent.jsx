import { Card, Center, Container, HStack,Text,Image } from "@chakra-ui/react";
import { GetItemInfoBySold} from "../../../utils/GetItemInfo";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingContext } from "../../../context/LoadingContext";

export default function MostSoldItemsComponent({greeting}) {
    const {isLoading} = useContext(LoadingContext);
    const [items, setItems] = useState([]);
    const navigate = useNavigate();
    const fetchData = async() => {
        await isLoading(true);
        const executeFetch = await GetItemInfoBySold();
        setItems(executeFetch);
        await isLoading(false);
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
    {items.map((value)=>(
            <Image sx={containerProps} key={value.ID} src={value.ImgURL} onClick={(()=>navigate('/item/'+value.ID))}/>
    ))}
    </HStack>
    
    
    </>
  )
}
