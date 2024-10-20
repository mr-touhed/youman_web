import HeadingAnimation from '@/components/HeadingAnimation';
import Image from 'next/image';
import React from 'react';

const OurStoryPage = () => {
    return (
        <div className='mt-60'>
            <section className='flex justify-center md:flex-row flex-col items-center w-full h-[40vh] px-3 md:mb-8 mb-16'>
                    <div className='max-w-96 space-y-4 px-1 md:px-0'>
                    <HeadingAnimation>
                    <h1 style={{lineHeight:"1.3"}} className="relative z-10 text-4xl md:text-7xl  bg-clip-text text-transparent bg-green-700 text-center font-sans font-bold">
                    The beginning
            </h1>
                    </HeadingAnimation>
            <Image src="/images/icons/banner-01.png" alt="" width={1200} height={600} className=' md:hidden block'/>
                        <p className='text-justify text-base font-thin md:-ml-3'>Youman began with a vision - a true community have the power to transform the way we live, grow, and thrive. We saw a world where people seek more than just networking; they yearn for experiences, a sense of belonging, and opportunities to unlock their potential. We imagined a community built on ambition, where every member finds value beyond expectations.</p>


                    </div>
                    <Image src="/images/icons/banner-01.png" alt="" width={1200} height={600} className='md:w-[700px] w-[300px] md:block hidden'/>

            </section>
            <section className=' mb-16'>
                                
                       <div className='max-w-7xl mx-auto space-y-8'>
                        
                       <div className='pt-24 text-center'>
                          
                        </div>

                        <div className='grid md:grid-cols-3  gap-16 place-content-center place-items-center'>
                                <div className='flex flex-col items-center md:justify-start md:h-[500px] justify-center p-2 '>
                                <HeadingAnimation>
                                        <h2 style={{lineHeight:"1.3"}} className="relative z-10 text-4xl md:text-3xl  bg-clip-text text-transparent bg-green-700 text-center font-sans font-bold">
                       Power, Purpose, Potential</h2>
                       </HeadingAnimation>
                       <Image src="/images/icons/1.png" alt="" width={200} height={250} className=''/> 
                                        <p className='text-gray text-base font-thin'>So, we set out to build Youman—a platform that goes beyond a simple card. We designed it as a gateway to curated privileges, from exclusive access to premium brands to meaningful networking with industry leaders. But more importantly, we created a space where members aren’t just users; they are part of a community that inspires each other to dream bigger, reach further, and grow together.
                                        </p>    
                                </div>    
                                <div className='flex flex-col items-center md:justify-start md:h-[500px] justify-center p-2'>
                                        <HeadingAnimation>
                                       <h2 style={{lineHeight:"1.3"}} className="relative z-10 text-4xl md:text-3xl  bg-clip-text text-transparent bg-green-700 text-center font-sans font-bold">
                                        Step beyond </h2>
                                        </HeadingAnimation>
                                        <Image src="/images/icons/2.png" alt="" width={200} height={250} className=''/>
                                        <p className='text-gray text-base font-thin'>With every tap of a Youman card, stories unfold—stories of personal growth, of doors opening to new possibilities, of passions turning into realities. Our mission is to empower you to elevate your lifestyle, not just with a product, but through a shared journey of ambition and achievement.
                                        </p>    
                                </div>    
                                <div className='flex flex-col items-center md:h-[500px]  md:justify-start justify-center p-2'>
                                        <HeadingAnimation>
                                        <h2 style={{lineHeight:"1.3"}} className="relative z-10 text-4xl md:text-3xl  bg-clip-text text-transparent bg-green-700 text-center font-sans font-bold">
                                        Empowering you</h2>
                                        </HeadingAnimation>
                                        <Image src="/images/icons/3.png" alt="" width={200} height={250} className=''/>
                                        <p className='text-gray text-base font-thin'>At Youman, we believe that your story matters. It’s about more than access; it’s about being part of a movement that celebrates who you are and what you aspire to be. We’re here to amplify your voice, connect you with those who share your vision, and ensure that you never stop exploring what’s next.
                                        </p>    
                                </div>    
                        </div>    

                        
                        </div>              
            </section>
        </div>
    );
};

export default OurStoryPage;