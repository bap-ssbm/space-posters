import { FC, useContext } from 'react'
import "./Checkout.css"
import Summary from './components/summary/Summary'
import Shipping from './components/shipping/Shipping'
import { CartContext } from '../contexts/CartContext'
import Payment from './components/payment/Payment'
import OrderSummary from './components/orderSummary/OrderSummary'



interface CheckoutProps {

}

const Checkout: FC<CheckoutProps> = ({ }) => {
  const { cart, total } = useContext(CartContext)
  return (
    <div className='checkout-page-full-wrapper'>

      <div className='checkout-nav-bg' />

      <div className='checkout-page'>

        <form className='overall-checkout-boxes-wrapper'>
          <div className='checkout-page-wrapper'>
            <div className='your-order-title-wrapper'>
              <h1 className='checkout-title'>
                YOUR ORDER
              </h1>
              <div className='your-order-header-line'/>
            </div>

            <Summary data={cart} />
            <Shipping />
            <Payment />
          </div>
          <OrderSummary data={cart} total={total} />

        </form>
      </div>
    </div>
  )
}

export default Checkout