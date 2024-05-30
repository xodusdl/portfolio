import React from 'react'
import Style from './css/Gallery.module.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './css/styles.css';
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';


export default function Gallery() {
  return (
    <div id={Style.gallery_wrap}>
      <section id={Style.list}>
        <div className={Style.title_box}>GALLAERY</div>
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          FreeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide><img src='./images/00.jpg' alt='images'/></SwiperSlide>
          <SwiperSlide><img src='./images/01.jpg' alt='images'/></SwiperSlide>
          <SwiperSlide><img src='./images/02.jpg' alt='images'/></SwiperSlide>
          <SwiperSlide><img src='./images/03.jpg' alt='images'/></SwiperSlide>
          <SwiperSlide><img src='./images/04.jpg' alt='images'/></SwiperSlide>
          <SwiperSlide><img src='./images/05.jpg' alt='images'/></SwiperSlide>
          <SwiperSlide><img src='./images/06.jpg' alt='images'/></SwiperSlide>
          <SwiperSlide><img src='./images/07.jpg' alt='images'/></SwiperSlide>
          <SwiperSlide><img src='./images/08.jpg' alt='images'/></SwiperSlide>
        </Swiper> 
      </section>
    </div>
  )
}
