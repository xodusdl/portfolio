import React, { useState } from 'react'
import Style from './css/Header.module.css'
import { Link } from 'react-router-dom'

export default function Header() {

  const allMenu=[
    {index:0, name:'PORTFOLIO', path:'/' },
    {index:1, name:'ABOUT', path:'/about' }
  ]
  const [ selectedMenu, setSelectedMenu ] = useState ('PORTFOLIO')

  const changeMenu=(menu)=>{
    setSelectedMenu(menu)
}
  
  return (
    <div className={Style.header_wrap}>
      <header className={Style.header}>
      <Link link to='/'><h1 className={Style.logo}>TAEYEON</h1></Link>
        <nav className={Style.menu}>
          <h2 className='hidden'>메뉴</h2>
          <ul className={Style.menu_list}>
            {/* <Link link to='/'><li className={Style.selected}>PORTFOLIO</li></Link>
            <Link link to='/about'><li>ABOUT</li></Link> */}
            {
              allMenu.map((item)=>{
                return(
                  <Link link to={item.path}><li className={item.name===selectedMenu && Style.selected} onClick={()=>{changeMenu(item.name)}}>{item.name}</li></Link>
                )
              })
            }
          </ul>
        </nav>
      </header>
    </div>
  )
}
