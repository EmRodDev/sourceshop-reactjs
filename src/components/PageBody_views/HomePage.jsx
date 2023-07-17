import { Box } from "@chakra-ui/react";
import Carousel from "./HomePage_components/CarouselComponent";
import ItemListContainer from "./HomePage_components/ItemListContainer";

export default function HomePage(){
    let numItems = ["Primer item", "Segundo Item","Tercer Item","Cuarto Item"];
    return(
        <>
        <Box w='100%' minH='1000px'>
            <ItemListContainer numItems={numItems} greeting='Items más vendidos'/>
            <Carousel/>
        </Box>
        </>
    )
}