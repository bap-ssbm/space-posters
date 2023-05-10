import { FC, useState, useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'

interface ProductDetailsProps {
    data: {
        title: string,
        price: string,
        description: string,
        dimension1: string,
        dimension2: string,
        imgUrl: string,
        link: string
    },
    productPage? :true
}

const ProductDetails: FC<ProductDetailsProps> = ({ data , productPage }) => {
    const [num, setNum] = useState<number>(1);
    const { dispatch, setOpenCart } = useContext(CartContext)
    const catchNumChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setNum(e.target.valueAsNumber)
    }
    const handleAddCart = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        dispatch({ type: "ADD_PRODUCT", numOfProduct: num, product: data })
        setOpenCart(true)
    }
    const handleBuyCurrent = () => {
        dispatch({ type: "ORDER_CURRENT", numOfProduct: num, product: data })
    }
    return (
        <div className={productPage?'product-details-wrapper':'poster-info-wrapper'}>



            <h2 className='poster-info-title'>
                {data.title}
            </h2>
            <h3 className='price'>
                $ {data.price} USD
            </h3>
            <div className='shipping'>
                FREE SHIPPING
            </div>
            {!productPage&&(<div>
                <img className='posters-img-mobile' src={data.imgUrl} />
            </div>)}


            <p className='posters-description'>
                {data.description}
            </p>
            <p className='dimensions'>
                Dimensions: {data.dimension1}in x {data.dimension2}in
            </p>
            <form className='purchase-btns'>

                <input
                    onChange={catchNumChange}
                    required className='amount-input' type="number" min="1" value={num} />

                <Button onClick={handleAddCart} type='light'>
                    Add to Cart
                </Button>
                <Link 
                onClick={handleBuyCurrent}
                to='/checkout'>
                    <Button type='dark'>
                        Buy Now
                    </Button>
                </Link>

            </form>
            {!productPage&&(<Link className='more-photos' to={data.link}>
                More Photos
            </Link>)}
            {productPage&&(
            <div className='share'>
                <p>Share</p>
                <div className='share-icons'>
                    <img className='share-icon' src='/Images/facebook.svg'/>
                    <img className='share-icon' src='/Images/twitter.svg'/>
                    <img className='share-icon' src='/Images/reddit.svg'/>
                    <img className='share-icon' src='/Images/email.svg'/>
                </div>
            </div>
            )}

        </div>
    )
}

export default ProductDetails