import React from 'react'
import Style from './css/WebList.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFigma } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faGit } from "@fortawesome/free-brands-svg-icons";

export default function WebList() {
  const openTab =(url) => {
    window.open(url, "_blank", "noopener, noreferrer")
  }
  return (
    <div id={Style.web_wrap}>
      <section id={Style.list}>
        <div className={Style.title_box}>WEB</div>
        <div className={Style.list_box}>
          <ul className={Style.portfolio_list}>
            <li>
              <div className={Style.portfolio}>
                <p className={Style.info_title}>Scoop (개인)
                {/* <span onClick={()=> openTab ("")}><FontAwesomeIcon icon={faFigma} /></span> */}
                </p>
                <p className={Style.keyword}>웹접근성, 적응형, html, css, javascript<br/>2023.10.30 ~ 2023.11.20</p>
                <p className={Style.info_text}>‘아이스크림’을 주제로 홈페이지를 제작했습니다.</p>
              </div>
              <div className={Style.img}>
                <img src='./images/01.jpg' alt='scoop'/>
                <div className={Style.link_box} onClick={()=> openTab ("http://scoop.dothome.co.kr/")}><p>Link to</p></div>
              </div>
            </li>
            <li>
              <div className={Style.portfolio}>
                <p className={Style.info_title}>Ddogdogcat (3인)<span onClick={()=> openTab ("https://www.figma.com/file/se6lGvan0n7ZEdt6KC8avE/Untitled?type=design&node-id=1%3A2&mode=design&t=hkJClqmiRWnqrOki-1")}><FontAwesomeIcon icon={faFigma} /></span></p>
                <p className={Style.keyword}>html, css, javascript<br/>2023.12.15 ~ 2024.01.03</p>
                <p className={Style.info_text}>동물의 입양, 유기 등의 현황을 고취시키기 위한 입양 홍보 프로젝트를 제작했습니다.</p>
              </div>
              <div className={Style.img}>
                <img src='./images/02.jpg' alt='dogddogcat'/>
                <div className={Style.link_box} onClick={()=> openTab ("http://adoption.dothome.co.kr/")}><p>Link to</p></div>
              </div>
            </li>
            <li>
              <div className={Style.portfolio}>
                <p className={Style.info_title}>Seoulbicycle (개인)
                {/* <span onClick={()=> openTab ("")}><FontAwesomeIcon icon={faFigma} /></span> */}
                </p>
                <p className={Style.keyword}>적응형, React<br/>2024.02.12 ~ 2024.02.29</p>
                <p className={Style.info_text}>자전거 대여 사이트를 주제로 제작한 React 프로젝트입니다.</p>
              </div>
              <div className={Style.img}>
                <img src='./images/03.jpg' alt='seoulbicycle'/>
                <div className={Style.link_box} onClick={()=> openTab ("https://rentalbicycle.netlify.app/")}><p>Link to</p></div>
              </div>
            </li>
            <li>
              <div className={Style.portfolio}>
                <p className={Style.info_title}>Zarakids (개인)<span onClick={()=> openTab ("https://www.figma.com/file/zha4Wy1xndQyJRqYMBukHT/zarakids_Figma?type=design&node-id=0%3A1&mode=design&t=qZNu4iDS8ReCJOKA-1")}><FontAwesomeIcon icon={faFigma} /></span></p>
                <p className={Style.keyword}>반응형, React<br/>2024.03.01 ~ 2024.03.15</p>
                <p className={Style.info_text}>의류 브랜드 ZARA 홈페이지를 React 활용하여 리뉴얼하였습니다.</p>
              </div>
              <div className={Style.img}>
                <img src='./images/04.jpg' alt='zarakids'/>
                <div className={Style.link_box} onClick={()=> openTab ("https://zarakidsclothes.netlify.app/")}><p>Link to</p></div>
              </div>
            </li>
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

