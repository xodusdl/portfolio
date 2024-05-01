import React from 'react'
import Style from './css/Main.module.css'

export default function Main() {
    return (
        <div id={Style.main_wrap}>
            <section id={Style.main}>
                <p className={Style.logo}>TAEYEON</p>
                <p className={Style.text}>Got A Project In Mine?</p>
                <p className={Style.text_bottom}>LET'S TALK</p>
                <div className={Style.arrow}><img src='./images/arrow.svg' alt='arrow'/></div>
            </section>
        </div>
      )
}
