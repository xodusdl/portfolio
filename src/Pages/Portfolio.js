import React from 'react'
import Title from '../Components/Title'
import Style from './css/Portfolio.module.css'

export default function Portfolio() {
  const openTab =(url) => {
    window.open(url, "_blank", "noopener, noreferrer")
  }

  return (
    <>
    <Title title='Portfolio'/>
    <div className={Style.portfolio_wrap}>
      <ul className={Style.portfolio_list}>
        <li>
          <div className={Style.img}><img src='/images/01.jpg' alt='scoop'/></div>
          <div className={Style.text}>
            <p className={Style.text_title}>scoop<span> (개인)</span></p>
            <p className={Style.text_info}>웹접근성, 적응형, html, css, javascript<br/>2023.10.30 ~ 2023.11.20</p>
            <p className={Style.text_text}>‘아이스크림’을 주제로 홈페이지를 제작했습니다.</p>
            <div className={Style.link_box} onClick={()=> openTab ("http://scoop.dothome.co.kr/")}>Link to<img src='/images/narrow.svg' alt='narrow'/></div>
          </div>
        </li>
        <li>
          <div className={Style.img}><img src='/images/02.jpg' alt='ddogdogcat'/></div>
          <div className={Style.text}>
            <p className={Style.text_title}>ddogdogcat<span> (3인)</span></p>
            <p className={Style.text_info}>html, css, javascript<br/>2023.12.15 ~ 2024.01.03</p>
            <p className={Style.text_text}>동물의 입양, 유기 등의 현황을 고취시키기 위한 입양 홍보 프로젝트를 제작했습니다.</p>
            <div className={Style.link_box} onClick={()=> openTab ("http://adoption.dothome.co.kr/")}>Link to<img src='/images/narrow.svg' alt='narrow'/></div>
          </div>
        </li>
        <li>
          <div className={Style.img}><img src='/images/03.jpg' alt='seoulbicycle'/></div>
          <div className={Style.text}>
            <p className={Style.text_title}>seoulbicycle<span> (개인)</span></p>
            <p className={Style.text_info}>적응형, React<br/>2024.02.12 ~ 2024.02.29</p>
            <p className={Style.text_text}>자전거 대여 사이트를 주제로 제작한 React 프로젝트입니다 </p>
            <div className={Style.link_box} onClick={()=> openTab ("https://rentalbicycle.netlify.app/")}>Link to<img src='/images/narrow.svg' alt='narrow'/></div>
          </div>
        </li>
        <li>
          <div className={Style.img}><img src='/images/04.jpg' alt='zarakids'/></div>
          <div className={Style.text}>
            <p className={Style.text_title}>zarakids<span> (개인)</span></p>
            <p className={Style.text_info}>반응형, React<br/>2024.03.01 ~ 2024.03.15</p>
            <p className={Style.text_text}>의류 브랜드 ZARA 홈페이지를 React 활용하여 리뉴얼하였습니다</p>
            <div className={Style.link_box} onClick={()=> openTab ("https://zarakidsclothes.netlify.app/")}>Link to<img src='/images/narrow.svg' alt='narrow'/></div>
          </div>
        </li>
      </ul>
    </div>
    
    </>
  )
}
