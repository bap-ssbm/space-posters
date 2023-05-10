import { FC } from 'react'
import './productDetails.css'
import ProductDetails from '../../Home/Posters/ProductDetails'
import { delay, motion } from 'framer-motion'
interface ProductPageProps {
    data: {
        title: string,
        price: string,
        description: string,
        dimension1: string,
        dimension2: string,
        imgUrl: string,
        mockupImgUrl: string,
        zoomImgUrl: string,
        link: string
    }
}

const ProductPage: FC<ProductPageProps> = ({ data }) => {
    return (
        < >
            <div className='nav-cover' />
            <div className='product-page-wrapper'>
                <div className='product-details-section'>
                    <ProductDetails data={data} productPage />
                </div>


                <motion.div 
                initial={{opacity:0}}
                animate={{opacity:1, transition:{
                    delay:0.4,
                    duration:0.8
                }}}
                className='product-imgs'>
                    <img src={data.mockupImgUrl} />
                    <img src={data.imgUrl} />
                    <img src='/Images/Voyager 1 & 2 Mockup-p-1080.jpeg' />
                    <img src={data.zoomImgUrl} />
                </motion.div>
            </div>

        </>
    )
}

export default ProductPage