import React,{ ReactDOM,useRef,useState,useEffect, useContext} from "react";
import { PayPalButtons, PayPalScriptProvider,FUNDING } from "@paypal/react-paypal-js";
import { useNavigate, redirect} from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { Text } from "@chakra-ui/react";
import { CustomToast } from "../../../utils/ToastHandler";

export default function PaypalWidget({ total }) {
    const {addToast} = CustomToast();
    const [useWidget, setUseWidget] = useState(true);
    const {clearCart} = useContext(CartContext);
    const navigate = useNavigate(); 
    
    const fundingSources = [FUNDING.PAYPAL,FUNDING.CARD];
    const paypalOptions = {
      "client-id":"AQ6HHh0alIRfABeZrDixmPIUUpkvZ4rquaNNrmAfmPEea5QATZY8p39i18jIOZyRMbPwinT_e8kXqIVf",
      currency:"USD"
    };


    useEffect(() => {
      //Workaround to reset the amount of the payment on the Paypal's external window
      setUseWidget(false);
      setTimeout(() => {setUseWidget(true)},100);
    }, [total]);
    return (
        <>
        {useWidget === true ?
        fundingSources.map((fundSources,index) =>          
        <PayPalScriptProvider key={'paypalbtn'+index} options={paypalOptions}>
          <PayPalButtons 
          style={{ layout: "horizontal" }} 
          createOrder={(data,actions) =>{
            return actions.order.create({purchase_units: [{amount:{value:total}}]})
          }}
          fundingSource={fundSources}
          onApprove={(data,actions) => {clearCart();navigate('/confirmation/success');}}
          onCancel={(data,actions) => addToast({message: 'The payment was cancelled', type: 'warning'})}
          onError={(err) => addToast({message: err.toString(), type: 'error'})}
          />
        </PayPalScriptProvider>
        )
       :
       <Text textAlign='center'>Reseting payment...</Text>
        }
       
        </>
    )
}
