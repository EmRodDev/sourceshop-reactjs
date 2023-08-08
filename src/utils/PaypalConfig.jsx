export const CartCreateOrder= (data,actions) => {
    
        return actions.order.create({
            purchase_units: [
                {
                    description: "Source-Shop Cart",
                    amount: {
                        currency_code: "USD",
                        value: "10",
                    },
                },
            ],
        }).then((orderID) => {
                return orderID;
            });
}

export const CartOnApprove = (data, actions) =>{
    return actions.order.capture().then(function (details) {
        const { payer } = details;
    });
}

