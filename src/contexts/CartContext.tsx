import React, { FC, useReducer, createContext, useState} from 'react'


interface productType {
    title: string,
    price: string,
    description: string,
    dimension1: string,
    dimension2: string,
    imgUrl: string,
    link: string
}
interface CartType {
    amount: number,
    productData: productType
}
interface CartArrayType extends Array<CartType> { }

interface CartAction {
    type: string;
    product: productType;
    numOfProduct: number;
}


interface CartContextProps {
    children: React.ReactNode
}

export const CartContext = createContext<{
    cart: CartArrayType;
    dispatch: React.Dispatch<any>;
    openCart: boolean;
    setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
}>({
    cart: [],
    dispatch: () => null,
    openCart: false,
    setOpenCart: () => null
});





const CartContextProvider: FC<CartContextProps> = ({ children }) => {
    
   
    const [openCart, setOpenCart] = useState(false)

    const cartReducer = (state: CartArrayType, action: CartAction) => {

        let index = state.findIndex(x => x.productData.title === action.product.title);

        switch (action.type) {

            case "ADD_PRODUCT":
                {
                    
                    if (state.filter(e => e.productData.title === action.product.title).length > 0) {
                        state[index].amount += action.numOfProduct;
                        console.log("add existing")
                    } else {
                        state.push({
                            productData: action.product,
                            amount: action.numOfProduct
                        })
                        console.log("add one")
                    }
                    localStorage.setItem("cart", JSON.stringify(state))
                    return (state)
                }
            case "INCREMENT_PRODUCT_BY_ONE":
                {

                   
                    state[index].amount = action.numOfProduct;
                    
                    
                    localStorage.setItem("cart", JSON.stringify(state))
                    return (state)
                }

            case "REMOVE_PRODUCT":
                {
                    
                    let newData = state.filter((item) => item.productData.title !== action.product.title)

                    localStorage.setItem("cart", JSON.stringify(newData))
                    return (newData)
                }
            case "ORDER_CURRENT":
                {
                    
                    localStorage.setItem("cart", JSON.stringify([{
                        amount: action.numOfProduct,
                        productData: action.product
                    }]))
                    return ([{
                        amount: action.numOfProduct,
                        productData: action.product
                    }])
                }
           
            default:
                localStorage.setItem("cart", JSON.stringify(state))
                
                return state;
        }
    };
   
    const [cart, dispatch] = useReducer(cartReducer, [], () => {
        const cartData = localStorage.getItem('cart');
        return cartData ? JSON.parse(cartData) : [];
      })
    



    return (
        <CartContext.Provider value={{ cart, dispatch,  openCart, setOpenCart }} >
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider;