import React, { FC } from 'react'
import "./Wrapper.css"
interface WrapperProps {
    children: React.ReactNode,
    title: string,
    required?: true
}

const Wrapper: FC<WrapperProps> = ({ children, title, required }) => {
    return (
        <div className='summary-wrapper'>
            <div className='checkout-wrapper-top-section'> 
                <h2 className='checkout-wrapper-title'>
                    {title}
                </h2>
                {required&&(
                    <p className='checkout-required'>
                        • Required
                    </p>
                )}
            </div>
            <div className='checkout-wrapper-bottom-section'>
                {children}
            </div>

        </div>
    )
}

export default Wrapper