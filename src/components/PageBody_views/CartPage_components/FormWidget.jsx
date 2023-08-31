import { useState, useEffect,useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { FormControl,FormLabel,Input,Button } from "@chakra-ui/react";
import createShipment from "../../../utils/createShipment";
import { LoadingContext } from "../../../context/LoadingContext";
import { useNavigate } from 'react-router-dom';

export default function FormWidget({ cart }) {
    const {isLoading} = useContext(LoadingContext);
    const {clearCart} = useContext(CartContext);
    const [buttonDisabled, disableButton] = useState(true);
    const navigate = useNavigate();

    //Variables of the data form
    const [input, setInput] = useState({
        email: '',
        address: '',
        country: '',
        state: '',
        postal_code: ''
    });

    const sendData = async() => 
    {
      await isLoading(true)
      const itemsID = await getAllItemIDs();
      await createShipment(input,itemsID).then((shipmentID) => {
        clearCart();
        isLoading(false)
        navigate('/confirmation/success/'+shipmentID);
      });
    };
  
    const getAllItemIDs = async () => {
        let itemIDs = [];
        for (const item of cart) {
            await itemIDs.push(item.ID);
        }
        return itemIDs;
    }

    //Quick workaround to handle data on forms
    const onChange = (e) => {
        const {name, value} = e.target;
        setInput(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const checkValues = () =>{
        console.log(Object.values(input).every((v) => v != ''));
        if(Object.values(input).every((v) => v != '')){
            disableButton(false);
        }else{
            disableButton(true);
        }
    }

    const onSubmit = async(e) => {
        e.preventDefault()
        await sendData()
    }

    useEffect(() =>{
        checkValues();
    },[input])

    return (
        <>
        <form onSubmit={onSubmit}>
            <FormControl isRequired p={2}>
                <FormLabel>Email</FormLabel>
                <Input type='email' name='email' value={input.email} onChange={onChange} />
                <FormLabel>Street Address</FormLabel>
                <Input type='text' name='address' value={input.address} onChange={onChange} />
                <FormLabel>Country</FormLabel>
                <Input type='text' name='country' value={input.country} onChange={onChange} />
                <FormLabel>State</FormLabel>
                <Input type='text' name='state' value={input.state} onChange={onChange} />
                <FormLabel>Postal code</FormLabel>
                <Input type='text' name='postal_code' value={input.postal_code} onChange={onChange} />
            </FormControl>
            <Button w='100px' h='50px' bg='lightGrey' type="submit" isDisabled={buttonDisabled}>Submit</Button>
        </form>
        </>
    )
}
