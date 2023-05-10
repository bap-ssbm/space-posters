import React, { FC } from 'react'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'

interface CartCheckOutProps {
    setOpenCart: React.Dispatch<React.SetStateAction<boolean>>,
    total:number
}

const CartCheckOut: FC<CartCheckOutProps> = ({ setOpenCart, total}) => {
    return (
        <div className='cart-checkout'>
            <div className='cart-subtotal'>
                <span>
                    SUBTOTAL
                </span>
                <span className='cart-subtotal-price'>
                    $ {total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} USD
                </span>
            </div>
            <Link onClick={()=>{setOpenCart(false)}} to='/checkout'>
                <Button type='light' widthFull fontSize='12px' letterSpacing='2px'>
                    CHECKOUT
                </Button>
            </Link>

        </div>
    )
}

export default CartCheckOut