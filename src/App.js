import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Pages/Root'
import NotFound from './Pages/NotFound'
import Home from './Pages/Home'

export default function App() {

  const router=createBrowserRouter(
    [
      {
        path:'/',
        element:<Root/>,
        errorElement:<NotFound/>,
        children:[
          {index:true, element:<Home/>}
        ]
      }
    ]
  )
  return (
    <RouterProvider router={router}/>
  )
}
