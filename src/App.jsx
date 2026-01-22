import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'  
import Projets from './pages/Projets.jsx'
import Agence from './pages/Agence.jsx'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

const App = () => {
  const stairParentref = useRef(null);
  const tl = gsap.timeline();
  useGSAP(() => {
    tl.from(stairParentref.current,{
      display:'block'
    })
    tl.from('.stair',{
      height:0,
      stagger:{
        amount:-0.5
      }
    })
    tl.to('.stair',{
      y:'100%',
      stagger:{
        amount:0.5
      }
    })
    tl.to(stairParentref.current,{
      display:'none'
    })
    tl.to('.stair',{
      y:'0%',
    }) //  because of this the video is going black for a second when we load the page 
  }) 
  return (
    <div className='text-white text-6xl'>
      <div ref={stairParentref} className='h-screen w-full fixed z-20 top-0'>
        <div className='h-full w-full flex'>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
      </div>
      </div>
      <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/projets" element={<Projets/>} />
         <Route path="/agence" element={<Agence/>} />
      </Routes>
    </div>
  )
}

export default App