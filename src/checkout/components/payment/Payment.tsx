import { FC, useState, ChangeEvent } from 'react'
import Wrapper from '../ui/Wrapper'
import AddressForm from '../ui/AddressForm';
import './Payment.css'
interface PaymentProps {

}

const Payment: FC<PaymentProps> = ({ }) => {
  const [checked, setChecked] = useState(true);
  const [cardNum, setCardNum] = useState<string>("")
  const [cardDate, setCardDate] = useState<string>("")
  const [cardCVC, setCardCVC] = useState<string>("")

  const cardNumChange = (e: any) => {
    let noSpace = e.target.value.replace(/ /g, '')
    let newNum = e.target.value
    if (e.target.value.length < 19) {
      if (e.nativeEvent.inputType === "deleteContentBackward") {
        newNum = newNum.slice(0, -1);
      } else {
        newNum = noSpace.replace(/(.{4})/g, "$1 ");
      }
    }
    if (!isNaN(Number(e.target.value[e.target.value.length - 1])) || e.target.value.length === 0) {
      setCardNum(newNum)
    }
    
  }
  const catchCardDateChange = (e: any) => {
    
      let valueToAdd = e.target.value
      if (e.nativeEvent.inputType === "deleteContentBackward") {
        valueToAdd.replace(/.$/, '')
        setCardDate(valueToAdd)
      } else {
        if (!isNaN(Number(e.target.value[e.target.value.length - 1])) || e.target.value.length === 0) {
        valueToAdd = e.target.value.replace(/^(\d\d)(\d)$/g,'$1/$2').replace(/^(\d\d\/\d\d)(\d+)$/g,'$1/$2').replace(/[^\d\/]/g,'')
        setCardDate(valueToAdd)
        }
      }
      
     
    
  }
  const catchCardCVCChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!isNaN(Number(e.target.value[e.target.value.length - 1])) || e.target.value.length === 0) {
      
      
      setCardCVC(e.target.value)
    }
  }


  return (
    <Wrapper title='3.Payment' required>
      <div className='payment-wrapper'>
        <div className='input-wrapper'>
          <p className='checkout-input-label'>
            CARD NUMBER •
          </p>
          <input value={cardNum} maxLength={19} onChange={cardNumChange} placeholder='1234 1234 1234 1234' type='text' required className='checkout-input' />
        </div>

        <div className='expirationdate-securitycode-wrapper'>
          <div className='input-wrapper'>
            <p className='checkout-input-label'>
              EXPIRATION DATE •
            </p>
            <input value={cardDate} onChange={catchCardDateChange} maxLength={5} placeholder='MM/YY' type='text' required className='checkout-input' />
          </div>
          <div className='input-wrapper'>
            <p className='checkout-input-label'>
              SECURITY CODE •
            </p>
            <input onChange={catchCardCVCChange} value={cardCVC} placeholder='CVC' type='text' maxLength={4} required className='checkout-input' />
          </div>
        </div>
        <div className='payment-desc-wrapper'>
          <input defaultChecked={checked} onChange={() => setChecked(!checked)} type='checkbox' />
          <p>
            Billing address same as shipping
          </p>

        </div>
        {!checked && <AddressForm />}
      </div>
    </Wrapper>
  )
}

export default Payment