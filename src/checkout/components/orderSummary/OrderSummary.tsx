import { FC, useState, useEffect } from 'react'
import './OrderSummary.css'
import Button from '../../../components/Button'

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
interface OrderSummaryProps {
    data: CartArrayType
}

const OrderSummary: FC<OrderSummaryProps> = ({ data }) => {
    const [total, setTotal] = useState(0);
    useEffect(() => {
        let totalToSet = 0
        data.forEach(item => {
            totalToSet += item.amount * Number(item.productData.price)
        })
        setTotal(totalToSet)
    })
    return (
        <div className='checkout-place-order-wrapper'>
            <div className='checkout-order-summary-wrapper'>
                <div className='checkout-order-summary-title'>
                    <span>
                        Order Summary
                    </span>
                </div>

                <div className='order-summary-posters-section-wrapper'>
                    <p className='order-summary-poster-title'>
                        Posters
                    </p>
                    {data.map(item => {
                        return (
                            <div className='order-summary-posters-items-wrapper'>
                                <p>
                                    {item.productData.title}
                                </p>
                                <p>
                                    x {item.amount}
                                </p>
                            </div>
                        )
                    })}
                </div>
                <div className='order-summary-posters-overall-total-wrapper'>
                    <div className='order-summary-posters-title'>
                        <p className='order-summary-posters-title-name'>
                            Posters
                        </p>
                        <p className='checkout-order-summary-posters-price'>
                            $ {total} USD
                        </p>
                    </div>
                    <div className='order-summary-total-wrapper'>
                        <p className='order-summary-total-title'>
                            Total
                        </p>
                        <p className='checkout-order-summary-total-price'>
                            $ {total} USD
                        </p>
                    </div>
                </div>

                <div className='order-summary-discount-wrapper'>
                    <p>
                        Discount Code
                    </p>
                    <form className='discount-form-wrapper'>
                        <div className='discount-input-wrapper'>
                            <input required className='checkout-input' type='text' />
                        </div>


                        <Button type='light'>
                            Apply
                        </Button>
                    </form>
                </div>
            </div>
            <button className='place-order-btn'>
                PLACE ORDER
            </button>
        </div>
    )
}

export default OrderSummary