import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import TaskList from './pages/TaskList'
import TaskDetail from './pages/TaskDetail'

export default function RouterConfig() {
  return (
    <Routes>
        <Route path='/' element={<Navigate to="/task"/> }></Route>
        <Route path='/task' element={<TaskList/>}></Route>
        <Route path='/task/:id' element={<TaskDetail/>}></Route>

    </Routes>
  )
}
