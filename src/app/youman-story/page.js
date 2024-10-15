import Image from 'next/image';
import React from 'react';

const OurStoryPage = () => {
    return (
        <div className='mt-56'>
            <section className='flex justify-center md:flex-row flex-col items-center w-full h-[40vh] px-4 mb-8'>
                    <div className='max-w-96 space-y-4 px-4'>
                        <h1 className='md:text-5xl text-3xl font-semibold leading-tight text-[#404040]'>Goodbye information overload</h1>

                        <p className='text-justify text-sm font-thin'>Youman began with a vision—an idea that connections, when meaningful, can redefine how we live, grow, and thrive. We saw a world where people seek more than just networking; they yearn for experiences, a sense of belonging, and opportunities to unlock their potential. We imagined a community built on ambition, where every member finds value beyond expectations.</p>


                    </div>
                    <Image src="/images/icons/banner-01.png" alt="" width={1200} height={600} className='md:w-[700px] w-[300px] '/>

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
                                        <p className='text-gray text-sm font-thin'>So, we set out to build Youman—a platform that goes beyond a simple card. We designed it as a gateway to curated privileges, from exclusive access to premium brands to meaningful networking with industry leaders. But more importantly, we created a space where members aren’t just users; they are part of a community that inspires each other to dream bigger, reach further, and grow together.
                                        </p>    
                                </div>    
                                <div className='flex flex-col items-center justify-center max-w-[250px]'>
                                        <Image src="/images/icons/2.png" alt="" width={200} height={250} className=''/>
                                        <h3 className='font-bold'>Curious readers</h3>
                                        <p className='text-gray text-sm font-thin'>With every tap of a Youman card, stories unfold—stories of personal growth, of doors opening to new possibilities, of passions turning into realities. Our mission is to empower you to elevate your lifestyle, not just with a product, but through a shared journey of ambition and achievement.
                                        </p>    
                                </div>    
                                <div className='flex flex-col items-center justify-center max-w-[250px]'>
                                        <Image src="/images/icons/3.png" alt="" width={200} height={250} className=''/>
                                        <h3 className='font-bold'>Curious readers</h3>
                                        <p className='text-gray text-sm font-thin'>At Youman, we believe that your story matters. It’s about more than access; it’s about being part of a movement that celebrates who you are and what you aspire to be. We’re here to amplify your voice, connect you with those who share your vision, and ensure that you never stop exploring what’s next.
                                        </p>    
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