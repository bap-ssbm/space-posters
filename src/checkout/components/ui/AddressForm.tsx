import { FC } from 'react'
import './AddressForm.css'
import CountryInput from './CountryInput'

interface AddressFormProps {
  
}

const AddressForm: FC<AddressFormProps> = ({}) => {
  return (
    <div className='address-input-wrapper'>
          <div className=' input-wrapper'>
            <p className='checkout-input-label'>
              FULL NAME •
            </p>
            <input required type='text' className='checkout-input' />
          </div>
          <div className='street-address-input-wrapper'>
            <div className=' input-wrapper'>
              <p className='checkout-input-label'>
                STREET ADDRESS •
              </p>
              <input type='address' required className='checkout-input' />
              <input className='checkout-input' />
            </div>
          </div>

          <div className='city-zip-state-wrapper'>
            <div className='shipping-email-input-wrapper input-wrapper'>
              <p className='checkout-input-label'>
                CITY •
              </p>
              <input type='city' required className='checkout-input' />
            </div>

            <div className=' input-wrapper'>
              <p className='checkout-input-label'>
                STATE/PROVINCE •
              </p>
              <input type='state' required className='checkout-input' />
            </div>

            <div className='input-wrapper'>
              <p className='checkout-input-label'>
                ZIP/POSTAL CODE •
              </p>
              <input type='zip' required className='checkout-input' />
            </div>
          </div>

          <div className='input-wrapper'>
            <p className='checkout-input-label'>
              COUNTRY •
            </p>
            <CountryInput/>
          </div>
        </div>
  )
}

export default AddressForm