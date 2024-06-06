import axios from 'axios'
import { useEffect, useState } from 'react'

export default function useProducts() {
    const[ allProducts, setAllProducts ] = useState([])

    useEffect(()=>{
        axios.get('/data/list.json').then((res)=>{
          setAllProducts(res.data)
        })
    }, [])

  return (
    [allProducts]
  )
}