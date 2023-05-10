import { FC } from 'react'

import { Link } from 'react-router-dom'

import './Posters.css'
import ProductDetails from './ProductDetails'

interface PosterWrapperProps {
    data: {
        title: string,
        price: string,
        description: string,
        dimension1: string,
        dimension2: string,
        imgUrl: string,
        link: string
    }

}

const PosterWrapper: FC<PosterWrapperProps> = ({ data }) => {
   

    return (
        <div className='poster-info-wrapper-wrapper'>
            <Link className='posters-img-wrapper-desktop' to={data.link}>
                <img className='posters-img-desktop' src={data.imgUrl} />
            </Link>
            <ProductDetails data={data}/>
        </div>

    )
}

export default PosterWrapper