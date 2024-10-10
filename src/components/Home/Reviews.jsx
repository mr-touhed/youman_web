'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import img from "@/images/icon_img/USER.png"


// import required modules
import { Autoplay, Pagination,  } from 'swiper/modules';
import Image from 'next/image';

export default function App() {
  return (
    <div className='max-w-7xl mx-auto px-3 text-center'>

            <div >
                        <h1 style={{lineHeight:"1.3"}} className="relative z-10 text-4xl md:text-7xl line-clamp-3  bg-clip-text text-transparent bg-green-700  text-center font-sans font-bold">
                        Youman Exprience
                    </h1>
                    <h4 className="sub-title  mt-3">
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
                               <Image className='rounded-full border p-2' width={100} height={100} src={img} alt="ldld" />
                               <div>
                               <h2 className='text-xl font-bold'>John doe</h2>
                               <h2 className='text-sm'>job holder</h2>
                               </div>
                               </div>
                                <h1 className='text-justify italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum autem corporis at, aliquid consequuntur voluptate distinctio, modi exercitationem ab nihil quas delectus architecto doloremque repellendus, voluptatum asperiores. Veritatis, distinctio asperiores.</h1>
                    </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="mb-8">
            <div className='bg-transparent text-black h-30vh md:p-16 m-4'>
                    <div className='max-w-[600px] mx-auto bg-[#26212116] p-4 backdrop-blur-sm'>
                               <div className='flex md:flex-row flex-col mb-6 items-center gap-2'>
                               <Image className='rounded-full border p-2' width={100} height={100} src={img} alt="ldld" />
                               <div>
                               <h2 className='text-xl font-bold'>John doe</h2>
                               <h2 className='text-sm'>job holder</h2>
                               </div>
                               </div>
                                <h1 className='text-justify italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum autem corporis at, aliquid consequuntur voluptate distinctio, modi exercitationem ab nihil quas delectus architecto doloremque repellendus, voluptatum asperiores. Veritatis, distinctio asperiores.</h1>
                    </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="mb-8">
            <div className='bg-transparent text-black h-30vh md:p-16 m-4'>
                    <div className='max-w-[600px] mx-auto bg-[#26212116] p-4 backdrop-blur-sm'>
                               <div className='flex md:flex-row flex-col mb-6 items-center gap-2'>
                               <Image className='rounded-full border p-2' width={100} height={100} src={img} alt="ldld" />
                               <div>
                               <h2 className='text-xl font-bold'>John doe</h2>
                               <h2 className='text-sm'>job holder</h2>
                               </div>
                               </div>
                                <h1 className='text-justify italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum autem corporis at, aliquid consequuntur voluptate distinctio, modi exercitationem ab nihil quas delectus architecto doloremque repellendus, voluptatum asperiores. Veritatis, distinctio asperiores.</h1>
                    </div>
            </div>
        </SwiperSlide>
        
       
        
        
      </Swiper>
    </div>
  );
}
