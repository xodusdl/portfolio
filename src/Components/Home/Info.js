import React from 'react'
import Style from './css/Info.module.css'

export default function Info() {
  return (
    <div id={Style.info_wrap}>
        <section id={Style.info}>
            <div className={Style.title_box}>INFORMAITON</div>
            <div id={Style.info_box}>
                <div className={Style.box}>
                    <p className={Style.box_text}>Profile</p>
                    <p className={Style.text}>김태연 / 1997.03.11</p>
                    <p className={Style.text}>rlaxosl03@gmail.com</p>
                    <p className={Style.text}>010.6613.8274</p>
                </div>
                <div className={Style.box}>
                    <p className={Style.box_text}>Career</p>
                    <p className={Style.text}>2018.03 ~ 2019.02<span>삼성서울병원어린이집 보육교사</span></p>
                    <p className={Style.text}>2020.04 ~ 2021.02<span>서울시청직장어린이집 보육교사</span></p>
                    <p className={Style.text}>2021.03 ~ 2023.02<span>무궁화어린이집 보육교사</span></p>
                    <p className={Style.text}>2024.04 ~<span></span></p>
                </div>
                <div className={Style.box}>
                    <p className={Style.box_text}>Education</p>
                    <p className={Style.text}>2023.10 ~ 2024.04<span>웹퍼블리셔 & 리엑트 활용 프론트엔드 웹 SW개발자 과정</span></p>
                </div>
            </div>
        </section>
    </div>
  )
}
