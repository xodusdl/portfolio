import React from 'react'
import Style from './css/WebList.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFigma } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faGit } from "@fortawesome/free-brands-svg-icons";
import useList from '../Hook/useList';

export default function WebList() {
  const openTab =(url) => {
    window.open(url, "_blank", "noopener, noreferrer")
  }
  window.scrollTo(0,0)

  const [ allList ] = useList()


  return (
    <div id={Style.web_wrap}>
      <section id={Style.list}>
        <div className={Style.title_box}>WEB</div>
        <div className={Style.list_box}>
          <ul className={Style.portfolio_list}>
            {
              allList.map((item)=>{
                return(
                  <li>
                    <div className={Style.portfolio_text_box}>
                      <p className={Style.info_title}>{item.name} ({item.num})
                      {
                        item.figma ? <span onClick={()=> openTab (item.figma)}><FontAwesomeIcon icon={faFigma} /></span> : ''
                      }
                      </p>
                      <p className={Style.keyword}>{item.keyword_skill}<br/>{item.keyword_date}</p>
                      <p className={Style.info_text}>{item.info}</p>
                    </div>
                    <div className={Style.img}>
                      <img src={item.image} alt={item.name}/>
                      <div className={Style.link_box} onClick={()=> openTab (item.link)}><p>Link to</p></div>
                    </div>
                  </li>
                )
              })

            }

            {/* 

            <li>
              <div className={Style.portfolio_text_box}>
              <p className={Style.info_title}>seoulbicycle (개인)</p>
                <p className={Style.keyword}>적응형, React<br/>2024.02.12 ~ 2024.02.29</p>
                <p className={Style.info_text}>자전거 대여 사이트를 주제로 제작한 React 프로젝트입니다.</p>
              </div>
              <div className={Style.img}>
                <img src='./images/seoul.jpg' alt='seoulbicycle'/>
                <div className={Style.link_box} onClick={()=> openTab ("https://rentalbicycle.netlify.app/")}><p>Link to</p></div>
              </div>
            </li>
            <li>
              <div className={Style.portfolio_text_box}>
                <p className={Style.info_title}>zarakids (개인)<span onClick={()=> openTab ("https://www.figma.com/file/zha4Wy1xndQyJRqYMBukHT/zarakids_Figma?type=design&node-id=0%3A1&mode=design&t=qZNu4iDS8ReCJOKA-1")}><FontAwesomeIcon icon={faFigma} /></span></p>
                <p className={Style.keyword}>반응형, React<br/>2024.03.01 ~ 2024.03.15</p>
                <p className={Style.info_text}>의류 브랜드 ZARA 홈페이지를 React 활용하여 리뉴얼하였습니다.</p>
              </div>
              <div className={Style.img}>
                <img src='./images/zara.jpg' alt='zarakids'/>
                <div className={Style.link_box} onClick={()=> openTab ("https://zarakidsclothes.netlify.app/")}><p>Link to</p></div>
              </div>
            </li>
            <li>
              <div className={Style.portfolio_text_box}>
                <p className={Style.info_title}>Glossier (개인)</p>
                <p className={Style.keyword}>html, css<br/>2024.04.29 ~ 2024.05.03</p>
                <p className={Style.info_text}>Glossier 홈페이지를 html, css를 활용하여 제작하였습니다.</p>
              </div>
              <div className={Style.img}>
                <img src='./images/glossier.jpg' alt='glossier'/>
                <div className={Style.link_box} onClick={()=> openTab ("https://youlookgood.netlify.app/")}><p>Link to</p></div>
              </div>
            </li>
            <li>
              <div className={Style.portfolio_text_box}>
                <p className={Style.info_title}>seniorcorp (2인)</p>
                <p className={Style.keyword}>반응형, html, css<br/>2024.05.20 ~ 2024.05.28</p>
                <p className={Style.info_text}>고령화 사회에 시니어 세대를 위한 서비스를 제공하는 프로젝트를 제작했습니다. 저는 html과 css를 맡아 제작하였습니다.</p>
              </div>
              <div className={Style.img}>
                <img src='./images/seniorcorp.png' alt='seniorcorp'/>
                <div className={Style.link_box} onClick={()=> openTab ("https://seniorcorp.co.kr/")}><p>Link to</p></div>
              </div>
            </li> */}
          </ul>
        </div>
        <ul className={Style.tool_list}>
          <li><FontAwesomeIcon icon={faHtml5} /></li>
          <li><FontAwesomeIcon icon={faCss3Alt} /></li>
          <li><FontAwesomeIcon icon={faJs} /></li>
          <li><FontAwesomeIcon icon={faReact} /></li>
          <li><FontAwesomeIcon icon={faGit} /></li>
        </ul>
      </section>
    </div>
  )
}

