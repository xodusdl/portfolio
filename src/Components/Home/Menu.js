import React from 'react'
import Style from './css/Menu.module.css'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <div id={Style.menu_wrap}>
        <section id={Style.menu}>
            <div className={Style.title_box}>MENU</div>
            <div className={Style.menu_box}>
                <ul className={Style.menu_list}>
                    <li><Link to={'/web'}>Web <span>&#8640;</span></Link></li>
                    <li><Link to={'/gallery'}>Gallery <span>&#8640;</span></Link></li>
                </ul>
            </div>
        </section>
    </div>
  )
}
