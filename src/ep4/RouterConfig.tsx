import React from 'react'
import { Link, Navigate, Route, Routes } from 'react-router'
import ProductList from './pages/ProductList'

export default function RouterConfig() {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/products'/>}></Route>
        <Route path='/products' element={<ProductList/>}></Route>
    </Routes>
  )
}
