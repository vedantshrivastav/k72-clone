import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'  
import Projets from './pages/Projets.jsx'
import Agence from './pages/Agence.jsx'
import Navbar from './components/Navigation/Navigation.jsx'
import FullScreenNav from './components/Navigation/FullScreenNav.jsx'

const App = () => {
  
  return (
    <div className='text-white'>
      {/* <Navbar/> */}
      <FullScreenNav/>
      {/* <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/projets" element={<Projets/>} />
         <Route path="/agence" element={<Agence/>} />
      </Routes> */}
    </div>
  )
}

export default App