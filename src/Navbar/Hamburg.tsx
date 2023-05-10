import { FC } from 'react'

interface HamburgProps {
  
}

const Hamburg: FC<HamburgProps> = ({}) => {
  return (
    <button className='hamburg'>
        <img src="/Images/hamburg.svg" alt=""/>
    </button>
  )
}

export default Hamburg