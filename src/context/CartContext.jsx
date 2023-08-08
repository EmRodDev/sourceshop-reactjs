import { createContext,useState } from "react";
import { CustomToast } from "../utils/ToastHandler";

export const CartContext = createContext({
cart_queue:[]
});

export const CartManagement = ({children}) => {
    const [cartItems,updateCartItems] = useState([]);
    const {addToast} = CustomToast();

    const isInCart = (itemId) => {
        return cartItems.some(product => product.id === itemId);
    }
    
    const addItem = (item, quantity) => {
        if(!isInCart(item.id)){
            updateCartItems(prevItems => [...prevItems, {...item, quantity}]);
        } else {
            addToast({message: 'This product was already added to the cart', type: 'error'})
            console.warn('This product was already added');
            
        }
    }

    const removeItem = (itemId) => {
        const findItem = cartItems.filter(product => product.id !== itemId);
        updateCartItems(findItem);
    }

    const clearCart = () => {
        updateCartItems([]);
    }

    return (
        <CartContext.Provider value={{cartItems, addItem, removeItem, clearCart}}>
        {children}
        </CartContext.Provider>
    )

}