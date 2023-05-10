import { FC} from 'react'
import './Hero.css'
import Button from '../../../components/Button'
import Orbit from './Orbit'


interface HeroProps {

}

const Hero: FC<HeroProps> = ({ }) => {
    return (
        <div  className='hero-wrapper'>
            <div className='hero-object-wrapper'>
                <div className='hello-box'>
                    <div className='dashed-line' />
                    <p className='hello-text'>HELLO</p>
                    <div className='dashed-line' />
                </div>
                <div className='hero-title-wrapper'>
                    <h1 className='hero-title'>
                        MINIMALIST
                        <br />
                        SPACE POSTERS
                    </h1>
                    <a href='#posters'>
                        <Button type='light'>
                            See Posters
                        </Button>
                    </a>

                </div>

            </div>
            <Orbit />
            <a href='#about' className='explore'>
                <span>EXPLORE</span>
                <div className='down-arrow'>
                    <img src='/Images/downarrow.svg' />
                </div>
            </a>


        </div>
    )
}

export default Hero