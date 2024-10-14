import Image from 'next/image';
import React from 'react';
import Line from './_component/Line';

const OurStoryPage = () => {
    return (
        <div className='mt-44'>
            <section className='flex justify-center md:flex-row flex-col items-center w-full h-[40vh] px-3'>
                    <div className='max-w-96 space-y-4'>
                        <h1 className='md:text-5xl text-3xl font-semibold leading-tight text-[#404040]'>Goodbye information overload</h1>

                        <p className='text-justify font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus autem, quidem facere nulla iure assumenda cumque earum unde quasi harum.</p>


                    </div>
                    <Image src="/images/icons/banner-01.png" alt="" width={1200} height={600} className='md:w-[700px] w-[300px]'/>

            </section>
            <section className=' dot-mask'>
                                
                       <div className='max-w-7xl mx-auto space-y-8'>
                        
                       <div className='pt-24 text-center'>
                        <h2 className='text-2xl font-semibold '>Loved by <span className='bg-green-100 leading-none text-green-700'>15 million</span> teams and individuals</h2>    
                        </div>

                        <div className='grid md:grid-cols-3 place-content-center place-items-center'>
                                <div className='flex flex-col items-center justify-center max-w-[250px]'>
                                        <Image src="/images/icons/1.png" alt="" width={200} height={250} className=''/>
                                        <h3 className='font-bold'>Curious readers</h3>
                                        <p className='text-gray font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, quibusdam ipsa accusamus pariatur cupiditate sapiente.</p>    
                                </div>    
                                <div className='flex flex-col items-center justify-center max-w-[250px]'>
                                        <Image src="/images/icons/2.png" alt="" width={200} height={250} className=''/>
                                        <h3 className='font-bold'>Curious readers</h3>
                                        <p className='text-gray font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, quibusdam ipsa accusamus pariatur cupiditate sapiente.</p>    
                                </div>    
                                <div className='flex flex-col items-center justify-center max-w-[250px]'>
                                        <Image src="/images/icons/3.png" alt="" width={200} height={250} className=''/>
                                        <h3 className='font-bold'>Curious readers</h3>
                                        <p className='text-gray font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, quibusdam ipsa accusamus pariatur cupiditate sapiente.</p>    
                                </div>    
                        </div>    

                        <div className='flex flex-col items-center pt-16 px-3'>
                        <h2 className='text-2xl font-semibold '>Loved by <span className='bg-green-100 leading-none text-green-700'>15 million</span> teams and individuals</h2>  
                        <Image src="/images/icons/line_img-02-01.png" alt="" width={1200} height={700} className='w-full h-auto md:block hidden'/>
                        <Image src="/images/icons/mobile_line-01.png" alt="" width={1200} height={700} className='w-full h-auto md:hidden block'/>
                               
                        </div>  
                        </div>              
            </section>
        </div>
    );
};

export default OurStoryPage;