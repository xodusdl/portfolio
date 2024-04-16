import React from 'react'
import Style from './css/Footer.module.css'

export default function Footer() {
  return (
    <div className={Style.footer_wrap}>
      <footer className={Style.footer}>
        <p className={Style.title}>Portfolio 2024</p>
        <ul className={Style.skill_list}>
          <li><img src='/images/html.svg' alt='react'/></li>
          <li><img src='/images/css.svg' alt='react'/></li>
          <li><img src='/images/git.svg' alt='react'/></li>
          <li><img src='/images/react.svg' alt='react'/></li>
        </ul>
      </footer>
    </div>
  )
}
