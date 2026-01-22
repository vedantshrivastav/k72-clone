import React from 'react'
import Video from './Video'
const HomeTopText = () => {
  return (
    <div className='font-[font-1] pt-5 text-center'>
      <div className='uppercase text-[9.5vw] leading-[8.5vw] flex items-center justify-center'>L'étincelle</div>
      <div className='uppercase text-[9.5vw] leading-[8.5vw] flex items-center justify-center'>qui <div className='h-[7vw] w-[15vw] rounded-full overflow-hidden -mt-2'><Video/></div>  génère</div>
      <div className='uppercase text-[9.5vw] leading-[8.5vw] flex items-center justify-center'>la créativité</div>
    </div>
  )
}

export default HomeTopText