import { FC } from 'react'
import './Summary.css'
import Wrapper from '../ui/Wrapper'

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
interface summaryProps {
    data: CartArrayType
}

const Summary: FC<summaryProps> = ({ data }) => {


    return (


        <Wrapper title='1.Summary'>
            <div className='checkout-summary-items-container'>
                {data.map(item => {
                    return (
                        <div className='summary-item-wrapper'>
                            <img className='summary-item-img' src={item.productData.imgUrl} />
                            <div className='checkout-summary-desc-wrapper'>
                                <div className='checkout-summary-title-and-quantity-wrapper'>
                                    <h2 className='checkout-summary-item-title'>
                                        {item.productData.title}
                                    </h2>
                                    <p>
                                        Quantity: <span>{item.amount}</span>
                                    </p>
                                </div>

                                <div className='checkout-summary-price'>
                                    $ {(item.amount * Number(item.productData.price)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} USD
                                </div>
                            </div>

                        </div>
                    )
                })}
            </div>

        </Wrapper>
    )
}

export default Summary