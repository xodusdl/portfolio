import React from 'react'
import Style from './css/Footer.module.css'

export default function Footer() {
  return (
    <div className={Style.footer_wrap}>
      <footer className={Style.footer}>
        <div className={Style.title}>Portfolio 2024</div>
        <ul className={Style.skill_list}>
          <li><img src='/images/html.svg' alt='html'/></li>
          <li><img src='/images/css.svg' alt='css'/></li>
          <li><img src='/images/git.svg' alt='git'/></li>
          <li><img src='/images/react.svg' alt='react'/></li>
        </ul>
      </footer>
    </div>
  )
}
