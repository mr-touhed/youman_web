"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import partner from "@/images/Pages_img/Partners.png"
import travel from "@/images/Youman-7.jpg"
import welbing from "@/images/Youman-3.jpg"

// import required modules
import { Pagination,Autoplay } from 'swiper/modules';
const HeroSlider = () => {
  
  return (
    <div>
      <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
        pagination={{
          dynamicBullets: true,
          
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide >
          <div className='max-h-[50vh]'>
                  <Image
                  src={partner}
                  alt="image"
                  width="300px"
                  height="300px"
                  className='block w-full max-h-[50vh] object-cover'
                  />
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className='max-h-[50vh]'>
                  <Image
                  src={travel}
                  alt="image"
                  width="300px"
                  height="300px"
                  className='block w-full max-h-[50vh] object-cover'
                  />
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className='max-h-[50vh]'>
                  <Image
                  src={welbing}
                  alt="image"
                  width="300px"
                  height="300px"
                  className='block w-full max-h-[50vh] object-cover'
                  />
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default HeroSlider;