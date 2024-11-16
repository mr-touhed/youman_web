import React from 'react';
import EventCard from './_components/EventCard';
import Image from 'next/image';
import bannerImg from "@/images/Pages_img/Trendingnow.png"
import HeadingAnimation from '@/components/HeadingAnimation';
import { get_events } from '@/utils/fetchData';
import Ongoing from './_components/Ongoing';
import Upcoming from './_components/Upcoming';
import Preceding from './_components/Preceding';

    

const TrendingNowPage = async () => {

    const {result:events} = await get_events()
   
console.log(events);
const ongoing = events.filter(event => event.status === "ongoing");

const upcoming = events.filter(event => event.status === "upcoming");

const preceding = events.filter(event => event.status === "preceding");



    return (
        <div className='max-w-7xl mx-auto px-4 space-y-8'>
                <div>
                    <Image src={bannerImg} alt="" width={1200} height={600} className='w-full md:max-h-[40vh]  object-contain'/>
                </div>
            
                <Ongoing events={ongoing}/>
                <Upcoming events={upcoming}/>
                <Preceding events={preceding}/>
                


                
        </div>
    );
};

export default TrendingNowPage;