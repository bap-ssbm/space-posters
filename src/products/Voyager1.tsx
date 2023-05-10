import { FC } from 'react'
import data from '../data/data.json'
import ProductPage from './components/ProductPage'

interface Voyager1Props {

}

const Voyager1: FC<Voyager1Props> = ({ }) => {
  return (
    <ProductPage data={data.Voyager1} />
  )
}

export default Voyager1