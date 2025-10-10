import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'

export default function RouterSetup() {
  return (
    <Routes>
      <Route path='/' element= {<Home/>}></Route>
      <Route path='/about' element= {<About/>}></Route>
      <Route path='*' element= {<NotFound/>}></Route>
    </Routes>
  )
}
