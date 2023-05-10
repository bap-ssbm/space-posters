import { FC } from 'react'

import './Posters.css'
import PosterWrapper from './PosterWrapper'
import data from '../../data/data.json'

interface PostersProps {

}

const Posters: FC<PostersProps> = ({ }) => {
    return (
        <section id='posters'>
            <div className='posters-section-wrapper'>
                <h1 className='posters-title'>
                    POSTERS
                </h1>
                <div className='posters-wrapper'>
                    <PosterWrapper data={data.Voyager1}/>
                    <PosterWrapper data={data.Voyager2}/>
                </div>

            </div>
        </section>
    )
}

export default Posters