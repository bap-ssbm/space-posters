import { FC } from 'react'
import { motion, useTransform, useScroll } from 'framer-motion'
import './Orbit.css'
interface OrbitProps {
 
}


const Orbit: FC<OrbitProps> = ({ }) => {

  const { scrollYProgress } = useScroll({ });
  const y = useTransform(scrollYProgress, [0,.2] , ["0%", "10%"])
  const opacity = useTransform(scrollYProgress, [0,.2] , ["100%", "10%"])
  return (
    <motion.div 
  
    style={{ y:y, opacity:opacity}}
    className='orbit' >
      <div className='orbit-circle1'>
        <img src='/Images/hero-circle.png' />
        <img  className='planet planet2' src='/Images/planet2.png' />
        
      </div>
      <div className='orbit-circle2'>
        <img src='/Images/hero-circle.png' />
        <img className='planet planet1' src='/Images/planet1.png' />
      </div>

    </motion.div>
  )
}

export default Orbit