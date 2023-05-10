import { FC, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { useContext } from 'react'

interface CartContentsProps {

}

const MapProduct = ({ product }: any) => {
    const { dispatch, setTotal } = useContext(CartContext)
    const [amountInput, setAmountInput] = useState(product.amount)
   
    const catchChange = (e: React.ChangeEvent<HTMLInputElement>) => { 
        setTotal(1)
        dispatch({ type: e.target.valueAsNumber===0?"REMOVE_PRODUCT":"INCREMENT_PRODUCT_BY_ONE", numOfProduct: e.target.valueAsNumber, product: product.productData })
        
        setAmountInput(e.target.valueAsNumber)
        
    }
    return (
        <div className='cart-item-wrapper'>
            <div className='cart-item-img-wrapper'>
                <img className='cart-product-img' src={product.productData.imgUrl} />
            </div>

            <div className='cart-item-description'>
                <h5 className='cart-item-title'>
                    {product.productData.title.toUpperCase()}
                </h5>
                <p className='cart-item-price'>
                    $ {product.productData.price} USD
                </p>
                <button className='cart-item-remove' onClick={() => {
                    dispatch({ type: "REMOVE_PRODUCT", numOfProduct: 0, product: product.productData })
                }}>
                    REMOVE
                </button>
            </div>
            <input onChange={catchChange} className='cart-item-number-input amount-input' type='number' value={amountInput} />

        </div>
    )
}

const CartContents: FC<CartContentsProps> = ({ }) => {
    const { cart } = useContext(CartContext)


    return (
        <div className='cart-content-wrapper'>
            {cart.map(product => {
                return (
                    <MapProduct product={product} />
                )
            })}

        </div>
    )
}

export default CartContents