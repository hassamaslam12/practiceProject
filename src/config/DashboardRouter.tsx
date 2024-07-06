import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Student from '../Screens/StudentAdd'

const DashboardRouter = () => {
  return (
    <div>
     
        <Routes>
            <Route   path="/student" element={<Student />} />
        </Routes>
  
    </div>
  )
}

export default DashboardRouter
