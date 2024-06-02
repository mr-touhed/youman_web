"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import test from "@/images/Youman-2.jpg"
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
                  src={test}
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
                  src={test}
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
                  src={test}
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