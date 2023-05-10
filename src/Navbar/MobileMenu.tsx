import { FC } from 'react'
import './MobileMenu.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

interface MobileMenuProps {
    setOpenMenu:Function
}

const MobileMenu: FC<MobileMenuProps> = ({setOpenMenu}) => {
  return (
    <motion.div 
    initial={{
        opacity:0,
        scale:0
    }}
    animate={{
        opacity:1,
        scale:1,
        transformOrigin:'top left',
        transition:{
            duration:0.5
        }
    }}
    exit={{
        opacity:0,
        scale:0,
        transformOrigin:'top left',
        transition:{
            duration:0.5
        }
    }}
    className='mobile-nav-menu'>
        <img onClick={()=>{setOpenMenu(false)}} className='mobile-close' src='/Images/close.svg'/>
        <img className='mobile-logo' src='/Images/logo.png'/>
        <Link
        onClick={()=>{setOpenMenu(false)}}
        to='/'>
            HOME
        </Link>
        <a 
        onClick={()=>{setOpenMenu(false)}}
        href='#posters'>
            POSTERS
        </a>
    </motion.div>
  )
}

export default MobileMenu