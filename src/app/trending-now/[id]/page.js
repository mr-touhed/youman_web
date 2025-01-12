import HeadingAnimation from '@/components/HeadingAnimation';
import ShowDetails from '@/components/ShowDetails';
import { get_single_events } from '@/utils/fetchData';
import Image from 'next/image';
import React from 'react';

const EventsDetails = async ({params}) => {
    const {id} = params;
    const {result} = await get_single_events(id)
    
    return (
        <div className='max-w-7xl mx-auto p-3 grid md:grid-cols-2 gap-16'>

                <Image src={result.image.display_url} alt={result.name} width={1200} height={600} className='w-full  object-fill'/>
            
                <section className='md:mt-16 space-y-8'>
                       
                        <HeadingAnimation>
                            <h2 className='text-4xl font-semibold text-green-700 text-center'>{result.name}</h2>
                        </HeadingAnimation>
                        <div className='text-sm font-thin mt-8'>
                        <p className='leading-3 italic'><span className='font-semibold text-sm text-green-700'>Event:</span> {result.type}</p>
                        <p className='leading-5 italic'><span className='font-semibold text-sm text-green-700'>Vanue:</span> {result.venue}</p>
                        <p className='leading-5 italic'><span className='font-semibold text-sm text-green-700'>Date:</span> {result.date}</p>
                        
                        </div>

                       <div className='text-justify '>
                       <ShowDetails details={result.details}/>
                       </div>
                        
                </section>
        </div>
    );
};

export default EventsDetails;