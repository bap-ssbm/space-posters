import { FC } from 'react'
import './About.css'
interface AboutProps {
  
}

const About: FC<AboutProps> = ({}) => {
  return (
    <section id='about'>
        <div className='about-wrapper'>
            <div className='about-sections mattepaper'>
            <img className='about-img' src='/Images/mattePaper.svg'/>
                <p>
                    Enhanced Matte Paper
                </p>
            </div>
            <div className='about-sections tube'>
            <img className='about-img' src='/Images/rolledTube.svg'/>
                <p>
                    Sent Rolled In A Tube
                </p>
            </div>
            <div className='about-sections resolution'>
            <img className='about-img' src='/Images/highresolution.svg'/>
                <p>
                    Ultra High Resolution
                </p>
            </div>
        </div>
    </section>
  )
}

export default About