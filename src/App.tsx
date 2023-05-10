
import Footer from './Footer/Footer'

import Home from './Home/Home'
import Navbar from './Navbar/Navbar'
import { Routes, Route, useLocation } from "react-router-dom"
import CartContextProvider from './contexts/CartContext'
import Voyager1 from './products/Voyager1'
import Voyager2 from './products/Voyager2'
import Checkout from './checkout/Checkout'
import { AnimatePresence } from 'framer-motion'

function App() {
  const location = useLocation()

  return (
    <>
      <CartContextProvider>
        <Navbar />
        <AnimatePresence mode='wait' >
        <Routes location={location} key={location.key}>
          
            <Route path='/' element={<Home />} />
            <Route path='/product/voyager-1' element={<Voyager1 />} />
            <Route path='/product/voyager-2' element={<Voyager2 />} />
            <Route path='/checkout' element={<Checkout />} />
         
        </Routes>
        </AnimatePresence>
        <Footer />
      </CartContextProvider>
    </>
  )
}

export default App
