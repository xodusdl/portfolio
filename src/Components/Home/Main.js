import React from 'react'
import Style from './css/Main.module.css'

export default function Main() {
    return (
        <div id={Style.main_wrap}>
            <section id={Style.main}>
                <p className={Style.logo}>Taeyeon Kim</p>
                <p className={Style.text}>Got A Project In Mine?</p>
                <p className={Style.text_bottom}>Portfolio</p>
                <div className={Style.arrow}>
                    <img src='./images/arrow.svg' alt='arrow'/>
                    <img src='./images/arrow.svg' alt='arrow'/>
                    <img src='./images/arrow.svg' alt='arrow'/>
                    {/* <p class="arrow_img"></p> */}
                    {/* <p class="arrow_img"><img src='./images/arrow.svg' alt='arrow'/></p> */}
                </div>
            </section>
        </div>
      )
}
