"use client"

import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import img1 from "@/images/card_black.png"
import img2 from "@/images/card_white.png"
// import required modules
import { Autoplay, EffectFade,Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

const AnimatedImage = () => {

  return (
    <>
      <Swiper
        spaceBetween={30}
       
        centeredSlides={false}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation,EffectFade]}
       
        className="mySwiper max-w-[400px]"
      >
        <SwiperSlide className='flex w-full justify-center'>
            <Image  src={img1} alt='image'/>
        </SwiperSlide>
        <SwiperSlide  className='mx-auto'>
            <Image  src={img2} alt='image'/>
        </SwiperSlide>
        <SwiperSlide className='flex w-full justify-center'>
            <Image  src={img1} alt='image'/>
        </SwiperSlide>
        <SwiperSlide  className='mx-auto'>
            <Image  src={img2} alt='image'/>
        </SwiperSlide>
        <SwiperSlide className='flex w-full justify-center'>
            <Image  src={img1} alt='image'/>
        </SwiperSlide>
        <SwiperSlide  className='mx-auto'>
            <Image  src={img2} alt='image'/>
        </SwiperSlide>
        
        
       
      </Swiper>
    </>
  );

};

export default AnimatedImage;
