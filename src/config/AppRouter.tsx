import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Components/Dashboard'
import { routelist } from './RouteList'

const AppRouter = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                {routelist.map((route, index) =><Route key={index} path={route.path} element={route.element}/>)
                    }
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default AppRouter
