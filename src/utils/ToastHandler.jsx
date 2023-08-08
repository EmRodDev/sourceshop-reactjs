import { useToast } from "@chakra-ui/react";

export const CustomToast = () => {
    const toast = useToast();
    // types are: "success", "info", "warning", "error"

    const addToast = (newRes) => {
        toast({
            description:newRes.message, 
            status: newRes.type, 
            position:"top", 
            isClosable: false, 
            duration: 3000,
        })
    }
    
    return { addToast };
}