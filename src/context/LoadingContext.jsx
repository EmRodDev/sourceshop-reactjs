import {createContext,useState } from "react";
import { Modal,ModalOverlay,ModalContent,Center,Spinner } from "@chakra-ui/react";
export const LoadingContext = createContext({
    isloading:false,
});

export const LoadingManagement = ({children}) =>{
const [loading,isLoading] = useState(false);



    return (

        <LoadingContext.Provider value={{ loading,isLoading}}>
            <Modal isOpen isCentered >
                {
                    loading === true ?
                        <>
                            <ModalOverlay bg='blackAlpha.300' backdropFilter='blur(10px)' />
                            <ModalContent bg='null' boxShadow='null'>
                                <Center><Spinner size='xl' color='blue.500' thickness='6px' /></Center>
                            </ModalContent>
                        </>

                        :
                        null
                }

                {children}
            </Modal>
        </LoadingContext.Provider>
    )

}