import { FC } from 'react'
import './components/hero/Hero.css'
import './Home.css'
import Hero from './components/hero/Hero'
import About from './About/About'
import Posters from './Posters/Posters'
import { motion, useTransform, useMotionValue ,  useAnimationFrame} from 'framer-motion'
import { wrap } from "@motionone/utils";

interface HomeProps {

}

const Home: FC<HomeProps> = ({ }) => {
  const baseX = useMotionValue(0);
  const x = useTransform(baseX, (v) => `${wrap(-10, 10, v)}%`);
  useAnimationFrame((t, delta) => {
    let moveBy = 1 * (delta / 1000);

  

    baseX.set(baseX.get() + moveBy);
  });
  return (
    <motion.div 
    
    className='homepage'>
      <div  className='hero'>

      <motion.div style={{ x }} className='hero-background'/>
        <Hero/>
        <About/>
        
      </div>
      <Posters/>
    </motion.div>
  )
}

export default Home