import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Pages/Root'
import NotFound from './Pages/NotFound'
import Portfolio from './Pages/Portfolio'
import About from './Pages/About'

export default function App() {

  const router=createBrowserRouter(
    [
      {
        path:'/',
        element:<Root/>,
        errorElement:<NotFound/>,
        children:[
          {index:true, element:<Portfolio/>},
          {path:'/about', element:<About/>}
        ]
      }
    ]
  )
  return (
    <RouterProvider router={router}/>
  )
}
