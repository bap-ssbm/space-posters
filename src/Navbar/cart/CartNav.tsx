import { FC } from 'react'

interface CartNavProps {
    setOpenCart:Function
}

const CartNav: FC<CartNavProps> = ({setOpenCart }) => {
    return (
        <nav className='cart-nav'>
            <h3 className='cart-nav-title'>
                Your Cart
            </h3>
            <div 
            onClick={()=>{setOpenCart(false)}}
            className='cart-close'>
                <svg className="icon-2" width="16px" height="16px" viewBox="0 0 16 16">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g fill-rule="nonzero" fill="#333333">
                            <polygon points="6.23223305 8 0.616116524 13.6161165 2.38388348 15.3838835 8 9.76776695 13.6161165 15.3838835 15.3838835 13.6161165 9.76776695 8 15.3838835 2.38388348 13.6161165 0.616116524 8 6.23223305 2.38388348 0.616116524 0.616116524 2.38388348 6.23223305 8">
                            </polygon>
                        </g>
                    </g>
                </svg>
            </div>
        </nav>
    )
}

export default CartNav