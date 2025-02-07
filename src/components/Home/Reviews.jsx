'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import img from "@/images/icon_img/USER.png"


import Neyaz from "@/images/review_img/Niaz.JPG"
import Galib from "@/images/review_img/Galib.JPG"
import Abdullah from "@/images/review_img/Abdullah_Abu_Sayeed.jpg"
import Faisal from "@/images/review_img/Faisal_Mahmud_Saeeb.jpg"
import Ehsan from "@/images/review_img/Ehsan.JPG"


// import required modules
import { Autoplay, Pagination,  } from 'swiper/modules';
import Image from 'next/image';
import HeadingAnimation from '../HeadingAnimation';

export default function App() {
  return (
    <div className='max-w-7xl mx-auto px-3 space-y-8'>

            <div className='space-y-8'>
              <HeadingAnimation>

                        <h1 style={{lineHeight:"1.3"}} className="relative z-10  text-4xl md:text-7xl line-clamp-3  bg-clip-text text-transparent bg-green-700  text-center font-sans font-bold">
                        Youman exprience
                    </h1>
              </HeadingAnimation>
                    <h4 className="sub-title md:text-center mt-3 px-3">
                    To meet the ultimate privileges and embark on a thrilling adventure of self-discovery
                    
                    </h4>
            </div>
      <Swiper
      style={{
        "--swiper-pagination-color": "#15803D",
        "--swiper-pagination-bullet-inactive-color": "#999999",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-size": "14px",
        "--swiper-pagination-bullet-horizontal-gap": "6px"
      }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        
        modules={[Autoplay, Pagination, ]}
        className=""
      >
        <SwiperSlide >
            <div className='bg-transparent text-black h-30vh md:p-16 m-4'>
                    <div className='max-w-[600px] mx-auto bg-[#26212116] p-4 backdrop-blur-sm'>
                               <div className='flex md:flex-row flex-col mb-6 items-center gap-2'>
                               <Image className='rounded-full border p-2' width={100} height={100} src={Neyaz} alt="Dr. S M Niaz Mowla" />
                               <div className='text-center'>
                               <h2 className='text-xl font-bold'>Dr. S M Niaz Mowla</h2>
                               <p className='text-sm text-center'>CDO</p>
                               <p className='text-sm text-center'>World Health Organizations  (WHO)</p>
                               </div>
                               </div>
                                <p className='text-justify italic'>Youman has changed how I network—now, with a single tap, I’m instantly connected to a world of opportunities. It’s sleek, efficient, and just feels premium.
                                </p>
                    </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="mb-8">
            <div className='bg-transparent text-black h-30vh md:p-16 m-4'>
                    <div className='max-w-[600px] mx-auto bg-[#26212116] p-4 backdrop-blur-sm'>
                               <div className='flex md:flex-row flex-col mb-6 items-center gap-2'>
                               <Image className='rounded-full border p-2' width={100} height={100} src={Galib} alt="ldld" />
                               <div className='text-center'>
                               <h2 className='text-xl font-bold'>Galib Bin Mohammad</h2>
                               <p className='text-sm text-center'>Chief Marketing Officer</p>
                               <p className='text-sm text-center'>Walton Hi-tech Industries PLC</p>
                               </div>
                               </div>
                                <p className='text-justify italic'>From exclusive offers to effortless connections, Youman delivers a lifestyle upgrade I didn’t know I needed. It’s like carrying my social and professional life in my pocket.
                                </p>
                    </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="mb-8">
            <div className='bg-transparent text-black h-30vh md:p-16 m-4'>
                    <div className='max-w-[600px] mx-auto bg-[#26212116] p-4 backdrop-blur-sm'>
                               <div className='flex md:flex-row flex-col mb-6 items-center gap-2'>
                               <Image className='rounded-full border p-2' width={100} height={100} src={Abdullah} alt="ldld" />
                               <div className='text-center'>
                               <h2 className='text-xl font-bold'>Abdullah Abu Sayeed</h2>
                               <p className='text-sm text-center'>Head of Business</p>
                               <p className='text-sm text-center'>CAL Securities Ltd</p>
                               </div>
                               </div>
                                <p className='text-justify italic'>Youman makes meeting new people and sharing my profile so easy. I love how it blends style and practicality into one seamless experience.
                                </p>
                    </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="mb-8">
            <div className='bg-transparent text-black h-30vh md:p-16 m-4'>
                    <div className='max-w-[600px] mx-auto bg-[#26212116] p-4 backdrop-blur-sm'>
                               <div className='flex md:flex-row flex-col mb-6 items-center gap-2'>
                               <Image className='rounded-full border p-2' width={100} height={100} src={Faisal} alt="ldld" />
                               <div className='text-center'>
                               <h2 className='text-xl font-bold'>Faisal Mahmud Sajeeb</h2>
                               <p className='text-sm text-center'>Founder</p>
                               <p className='text-sm text-center'>ACCFINTAX</p>
                               </div>
                               </div>
                                <p className='text-justify italic'>With Youman, I’ve unlocked a new level of convenience. Whether it’s access to premium brands or networking, it’s become my go-to for all things exclusive.”
                                </p>
                    </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="mb-8">
            <div className='bg-transparent text-black h-30vh md:p-16 m-4'>
                    <div className='max-w-[600px] mx-auto bg-[#26212116] p-4 backdrop-blur-sm'>
                               <div className='flex md:flex-row flex-col mb-6 items-center gap-2'>
                               <Image className='rounded-full border p-2' width={100} height={100} src={Ehsan} alt="ldld" />
                               <div className='text-center'>
                               <h2 className='text-xl font-bold'>Ehsan Samad</h2>
                               <p className='text-sm text-center '>Banker, writer
                               </p>
                               <p className='text-sm text-center'>BRAC BANK  PLC</p>
                               </div>
                               </div>
                                <p className='text-justify italic'>I feel a part of something bigger with Youman. It’s not just a card; it’s access to a thriving community and experiences I never thought possible.
                                </p>
                    </div>
            </div>
        </SwiperSlide>
        
       
        
        
      </Swiper>
    </div>
  );
}
