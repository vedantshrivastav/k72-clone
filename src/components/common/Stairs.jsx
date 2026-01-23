import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { useLocation } from 'react-router-dom'
const Stairs = ({children}) => {
    const currentPath = useLocation().pathname;
    const stairParentref = useRef(null);
    const pageref = useRef(null);
  const tl = gsap.timeline();
  useGSAP(() => {
    tl.from(stairParentref.current,{
      display:'block'
    })
    tl.from('.stair',{
      height:0,
      stagger:{
        amount:-0.2
      }
    })
    tl.to('.stair',{
      y:'100%',
      stagger:{
        amount:-0.25
      }
    })
    tl.to(stairParentref.current,{
      display:'none'
    })
    tl.to('.stair',{
      y:'0%',
    }) //  because of this the video is going black for a second when we load the page
    gsap.from(pageref.current,{
        opacity:0,
        delay:1,
        scale:1,
    }) 
  },[currentPath]) 
  console.log(children);
  return (
     <div>
        <div ref={stairParentref} className='h-screen w-full fixed z-20 top-0'>
        <div className='h-full w-full flex'>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
      </div>
      </div>
      <div ref={pageref}>{children}</div>
     </div>
  )
}

export default Stairs