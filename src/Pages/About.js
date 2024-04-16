import React from 'react'
import Title from '../Components/Title'
import Style from './css/About.module.css'

export default function About() {
  const openTab =(url) => {
    window.open(url, "_blank", "noopener, noreferrer")
  }

  return (
    <>
    <Title title='About'/>
    <div className={Style.about_wrap}>
      <div className={Style.left}>
        <p className={Style.info}>김태연을 소개합니다.</p>
        <p className={Style.name}>Kim Taeyeon</p>
        <p className={Style.info}>tae2016@naver.com<br/>010 6613 8274</p>
        <img src='/images/github.svg' alt='github' onClick={()=> openTab ("https://github.com/xodusdl")}/>
      </div>
      <ul className={Style.right}>
        <li>
          <div className={Style.title}>학력사항</div>
          <div className={Style.date}><span>2016.03 ~ 2018.02</span><br/>배화여자대학교 아동보육학과 졸업</div>
        </li>
        <li>
          <div className={Style.title}>경력사항</div>
          <div className={Style.date}><span>2018.03 ~ 2019.02</span><br/>삼성서울병원 어린이집 [보육교사]</div>
          <div className={Style.date}><span>2020.04 ~ 2021.02</span><br/>서울특별시청 직장어린이집 [보육교사]</div>
          <div className={Style.date}><span>2021.03 ~ 2023.02</span><br/>무궁화 어린이집 [보육교사]</div>
        </li>
        <li>
          <div className={Style.title}>수료</div>
          <div className={Style.date}><span>2023.10 ~ 2024.03</span><br/>그린컴퓨터아트학원<br/>웹퍼블리셔 & 리엑트 활용 프론트엔드 웹 SW개발자 과정</div>
          <div className={Style.do}>
            <p>- 적응형 웹 사이트 개발 기획</p>
            <p>- 모바일 웹 어플리케이션 개발 기획</p>
            <p>- 스토리보드 작성, 와이어 프레임 기획, 프로토타입 개발</p>
            <p>- Figma 툴을 활용한 모바일 UIUX 디자인 및 프로토타입 개발</p><br/>
            <p>- 한국형 웹 접근성 지침 ( KWCAG ) 을 준수한 Html 5 웹표준 마크업</p>
            <p>- CSS 3.0 Flex 및 Grid 레이아웃 기반의 반응형 웹사이트 개발 ( 하드코딩 )</p>
            <p>- Java Script ES6 버전을 활용한 인터렉션 UI 개발 ( 하드코딩 )</p>
            <p>- Java Script ES6 버전 Class 구문을 활용한 객체 지향 프로그래밍 개발 ( OOP 프로그래밍 )</p>
            <p>- 인터렉션 2Depth 네비게이션 및 메인 비쥬얼 슬라이드 개발 ( 하드코딩 )</p>
            <p>- GSAP 라이브러를 활용한 인터렉션 UI 개발</p><br/>
            <p>- React 기반의 웹 Component 어플리케이션 UI 개발</p>
            <p>- useState() 활용한 UI 상태관리</p>
            <p>- useContext() 활용한 어플리케이션 UI 환경 개발</p>
            <p>- useReducer() 활용한 객체 데이터 관리</p>
            <p>- axios 활용한 외부 json 데이터 비동기 처리</p>
            <p>- Firebase 활용한 상품객체 데이터 처리</p>
          </div>
        </li>
      </ul>
    </div>
    </>

  )
}