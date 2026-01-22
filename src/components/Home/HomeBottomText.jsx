import React from 'react'
import {Link} from 'react-router-dom'
import Projets from '../../pages/Projets.jsx'
import Agence from '../../pages/Agence.jsx'

const HomeBottomText = () => {
  return (
    <div className='font-[font-2] flex items-center justify-center gap-2 pb-1'>
      <Link className='text-[6.5vw] leading-[5.5vw] uppercase border-5 border-white rounded-full px-7 pt-3 hover:border-[#D3FD50] hover:text-[#D3FD50]' to='/projets'>Projets</Link>
      <Link className='text-[6.5vw] leading-[5.5vw] uppercase border-5 border-white rounded-full px-7 pt-3 hover:border-[#D3FD50] hover:text-[#D3FD50]' to='/agence'>Agence</Link> 
    </div>
  )
}

export default HomeBottomText