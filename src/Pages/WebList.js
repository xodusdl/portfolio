import React from 'react'
import Style from './css/WebList.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFigma } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faGit } from "@fortawesome/free-brands-svg-icons";
import useProducts from '../Hook/useProducts';

export default function WebList() {

  const [allProducts] = useProducts()
  
  const openTab =(url) => {
    window.open(url, "_blank", "noopener, noreferrer")
  }
  window.scrollTo(0,0)

  return (
    <div id={Style.web_wrap}>
      <section id={Style.list}>
        <div className={Style.title_box}>WEB</div>
        <div className={Style.list_box}>
          <ul className={Style.portfolio_list}>
            {
              allProducts.map((item)=>{
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

