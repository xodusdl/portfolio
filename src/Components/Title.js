import React from 'react'
import Style from './css/Title.module.css'

export default function Title({title}) {
  return (
    <div className={Style.title_box}>
      <p className={Style.title}>{title}</p>
    </div>
  )
}
