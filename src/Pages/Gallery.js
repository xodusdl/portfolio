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
          <SwiperSlide><img src='./images/1.jpg' alt='images'/></SwiperSlide>
          <SwiperSlide><img src='./images/2.jpg' alt='images'/></SwiperSlide>
          <SwiperSlide><img src='./images/3.jpg' alt='images'/></SwiperSlide>
          <SwiperSlide><img src='./images/4.jpg' alt='images'/></SwiperSlide>
          <SwiperSlide><img src='./images/5.jpg' alt='images'/></SwiperSlide>
          <SwiperSlide><img src='./images/6.jpg' alt='images'/></SwiperSlide>
          <SwiperSlide><img src='./images/7.jpg' alt='images'/></SwiperSlide>
        </Swiper> 
      </section>
    </div>
  )
}
