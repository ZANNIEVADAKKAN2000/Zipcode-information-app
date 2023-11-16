import React from 'react'
import Home from './Components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Outcome from './Components/Outcome'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route element={<Home/>} path='/'/>
    <Route element={<Outcome/>} path='/out/:postcode'/>
    </Routes>
    </BrowserRouter>
  )
}

export default App