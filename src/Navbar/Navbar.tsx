import { FC, useState, useContext, useEffect } from 'react'
import "./Navbar.css"


import Hamburg from './Hamburg'
import { Link } from 'react-router-dom'
import MobileMenu from './MobileMenu'
import { AnimatePresence } from 'framer-motion'
import Cart from './cart/Cart'
import { CartContext } from '../contexts/CartContext'
interface NavbarProps {

}

const Navbar: FC<NavbarProps> = ({ }) => {
    const [openMenu, setOpenMenu] = useState(false);

    const { cart, setOpenCart } = useContext(CartContext)
    const [amount, setAmount] = useState(0)
    useEffect(()=>{
        let amountToAdd = 0
        cart.forEach(item=>{
            amountToAdd+=item.amount
        })
        setAmount(amountToAdd)
    })
   

    return (
        <>
            <AnimatePresence>
                {openMenu && <MobileMenu setOpenMenu={setOpenMenu} />}

                
            </AnimatePresence>
            <Cart  />
            <nav className='navbar'>

                <div className='nav-wrapper'>
                    <div
                        onClick={() => { setOpenMenu(true) }}
                        className='left-nav'>
                        <Hamburg />
                    </div>

                    <div id='nav-logo'>
                        <Link to='/'>
                            <img className='nav-image' src="/Images/logo.png" width="150" alt="" />
                        </Link>

                    </div>

                    <div className='nav-right'>
                        <div className='nav-menu'>
                            <div className='nav-link-wrapper'>
                                <Link to='/'>
                                    <p className='nav-link'>
                                        HOME
                                    </p>
                                    <div className='nav-underline' />
                                </Link>
                            </div>

                            <div className='nav-link-wrapper'>
                                <a href='#posters'>
                                    <p className='nav-link'>
                                        POSTERS
                                    </p>
                                    <div className='nav-underline' />
                                </a>
                            </div>
                        </div>
                        <button
                            onClick={() => {
                                setOpenCart(true)
                            }}
                            className='nav-btn nav-link-wrapper'>
                            <div className='shopping-cart'>
                                <img src='/Images/cart.svg' />
                            </div>



                            <p className='cart-amount'>
                                {amount}
                            </p>
                            <div className='nav-underline' />
                        </button>

                    </div>
                </div>

            </nav>
        </>
    )
}

export default Navbar