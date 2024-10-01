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
    <div className='max-w-7xl mx-auto px-4'>

<div>
                        <h1 style={{lineHeight:"1.3"}} className="relative z-10 text-4xl md:text-7xl line-clamp-3  bg-clip-text text-transparent bg-green-700  text-center font-sans font-bold">
                        Customer Reviews
                    </h1>
                    <p className="text-neutral-500 max-w-lg mx-auto my-2 text-base text-center relative z-10">
                    To meet the ultimate privileges and embark on a thrilling adventure of self-discovery
                    
                    </p>
            </div>
      <Swiper
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
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='bg-transparent text-black h-30vh md:p-16 m-4'>
                    <div className='max-w-[600px] mx-auto bg-[#26212116] p-4 backdrop-blur-sm'>
                               <div className='flex md:flex-row flex-col mb-6 items-center gap-2'>
                               <Image className='rounded-full border p-2' width={100} height={100} src={img} alt="ldld" />
                               <div>
                               <h2 className='text-xl'>John doe</h2>
                               <h2 className='text-sm'>job holder</h2>
                               </div>
                               </div>
                                <h1 className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum autem corporis at, aliquid consequuntur voluptate distinctio, modi exercitationem ab nihil quas delectus architecto doloremque repellendus, voluptatum asperiores. Veritatis, distinctio asperiores.</h1>
                    </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='bg-transparent text-black h-30vh md:p-16 m-4'>
                    <div className='max-w-[600px] mx-auto bg-[#26212116] p-4 backdrop-blur-sm'>
                               <div className='flex md:flex-row flex-col  mb-6 items-center gap-2'>
                               <Image className='rounded-full border p-2' width={100} height={100} src={img} alt="ldld" />
                               <div>
                               <h2 className='text-xl'>John doe</h2>
                               <h2 className='text-sm'>job holder</h2>
                               </div>
                               </div>
                                <h1 className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum autem corporis at, aliquid consequuntur voluptate distinctio, modi exercitationem ab nihil quas delectus architecto doloremque repellendus, voluptatum asperiores. Veritatis, distinctio asperiores.</h1>
                    </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='bg-transparent text-black h-30vh md:p-16 m-4'>
                    <div className='max-w-[600px] mx-auto bg-[#26212116] p-4 backdrop-blur-sm'>
                               <div className='flex md:flex-row flex-col mb-6 items-center gap-2'>
                               <Image className='rounded-full border p-2' width={100} height={100} src={img} alt="ldld" />
                               <div>
                               <h2 className='text-xl'>John doe</h2>
                               <h2 className='text-sm'>job holder</h2>
                               </div>
                               </div>
                                <h1 className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum autem corporis at, aliquid consequuntur voluptate distinctio, modi exercitationem ab nihil quas delectus architecto doloremque repellendus, voluptatum asperiores. Veritatis, distinctio asperiores.</h1>
                    </div>
            </div>
        </SwiperSlide>
       
        
        
      </Swiper>
    </div>
  );
}
