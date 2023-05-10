import { FC, useContext, useState, useEffect } from 'react'
import CartNav from './CartNav'
import './Cart.css'
import { AnimatePresence, motion } from 'framer-motion'
import { CartContext } from '../../contexts/CartContext'
import CartContents from './CartContents'
import CartCheckOut from './CartCheckOut'


interface CartProps {

}

const Cart: FC<CartProps> = ({ }) => {
    const { openCart, setOpenCart, total} = useContext(CartContext)
    
    return (
        <AnimatePresence>

            {openCart && <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.2 } }}
                exit={{ opacity: 0 }}

                className='cart-overall-wrapper'>
                <div
                    onClick={() => { setOpenCart(false) }}
                    className='cart-shadow' />
                <motion.div
                    initial={{ x: 100 }}
                    animate={{ x: 0, transition: { duration: 0.4 } }}
                    exit={{ x: 100, transition: { duration: 1 } }}
                    className='cart-wrapper'>
                    <CartNav setOpenCart={setOpenCart} />
                    {total === 0 ? (
                        <div className='cart-empty-wrapper'>
                            <p>
                                NO ITEMS FOUND.
                            </p>
                        </div>
                    ) : (
                        <>
                            <CartContents />
                            <CartCheckOut setOpenCart={setOpenCart} total={total}/>
                        </>
                    )}

                </motion.div>
            </motion.div>}
        </AnimatePresence>

    )
}

export default Cart