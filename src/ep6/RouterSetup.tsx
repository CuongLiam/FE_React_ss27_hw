import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './components/Home'
import Detail from './components/Detail'
import Product from './components/Product'

export default function RouterSetup() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/detail' element={<Detail/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
    </Routes>
  )
}
