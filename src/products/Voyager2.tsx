import { FC } from 'react'
import data from '../data/data.json'
import ProductPage from './components/ProductPage'

interface Voyager2Props {

}

const Voyager2: FC<Voyager2Props> = ({ }) => {
  return (

    <ProductPage data={data.Voyager2} />

  )
}

export default Voyager2