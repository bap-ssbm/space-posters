import { FC } from 'react'
import Wrapper from '../ui/Wrapper'
import AddressForm from '../ui/AddressForm'
import './Shipping.css'

interface ShippingProps {

}

const Shipping: FC<ShippingProps> = ({ }) => {
  return (
    <Wrapper title='2.Shipping' required>
      <div className='shipping-wrapper'>
        <div className='shipping-email-input-wrapper input-wrapper'>
          <p className='checkout-input-label'>EMAIL •</p>
          <input required type='email' className='checkout-input' />
        </div>

        <AddressForm/>
        <div className='shipping-description-wrapper'>
          <h2>
            Free Shipping
          </h2>
          <p>
          Once a product is shipped it should arrive in 5-7 business days.
          </p>
        </div>


      </div>
    </Wrapper>
  )
}

export default Shipping