import { Box, VStack } from "@chakra-ui/react";
import Carousel from "./HomePage_components/CarouselComponent";
import MostSoldItemsComponent from "./HomePage_components/MostSoldItemsComponent";

export default function HomePage(){
    return(
        <>
        <Box w='100%' minH='1000px'>
            <VStack>
            <MostSoldItemsComponent greeting='Best sellers'/>
            </VStack>
            <Carousel/>
        </Box>
        </>
    )
}