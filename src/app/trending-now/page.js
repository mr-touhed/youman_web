import React from 'react';
import EventCard from './_components/EventCard';
import Image from 'next/image';
import bannerImg from "@/images/Pages_img/Trendingnow.png"
import HeadingAnimation from '@/components/HeadingAnimation';
const TrendingNowPage = () => {

    const events = [
        {
            name: 'Music Festival',
            image: '/images/music-festival.jpg',
            time: 'July 15, 2024, 3 PM',
            details: 'Join us for a day of music and fun featuring various artists at Central Park.',
        },
        {
            name: 'Tech Conference 2024',
            image: '/images/tech-conference.jpg',
            time: 'August 22-24, 2024',
            details: 'Explore the latest in technology and innovation with industry leaders.',
        },
        {
            name: 'Art Exhibition',
            image: '/images/art-exhibition.jpg',
            time: 'September 10, 2024, 5 PM',
            details: 'Visit our annual art exhibition showcasing local artists and their works.',
        },
        {
            name: 'Charity Run',
            image: '/images/charity-run.jpg',
            time: 'October 5, 2024, 8 AM',
            details: 'Participate in our charity run to support local causes. All ages welcome!',
        },
        {
            name: 'Food Festival',
            image: '/images/food-festival.jpg',
            time: 'November 12-14, 2024',
            details: 'Taste a variety of cuisines from around the world at our annual food festival.',
        },
        {
            name: 'Winter Wonderland',
            image: '/images/winter-wonderland.jpg',
            time: 'December 20, 2024, 4 PM',
            details: 'Celebrate the season with holiday activities, food, and entertainment for the whole family.',
        },
    ];
    

    return (
        <div className='max-w-7xl mx-auto px-4 space-y-8'>
                <div>
                    <Image src={bannerImg} alt="" width={1200} height={600} className='w-full md:max-h-[40vh] object-contain'/>
                </div>
            
                <div className='space-y-8'>
                        <HeadingAnimation>
                            <h2 className='text-4xl font-semibold text-green-700 text-center'>Ongoing</h2>
                            </HeadingAnimation>
                <section className='grid md:grid-cols-3 gap-4'>
                {
                    events.slice(0,3).map((event,i) => <EventCard key={i} event={event} soon={false}/>)
                }
            </section>
                </div>
                <div className='space-y-8'>
                            <HeadingAnimation>
                            <h2 className='text-4xl font-semibold text-green-700 text-center'>Upcoming</h2>
                            </HeadingAnimation>
                <section className='grid md:grid-cols-3 gap-4'>
                {
                    events.slice(3,5).map((event,i) => <EventCard key={i} event={event} soon={true}/>)
                }
            </section>
                </div>


                <div className='space-y-8'>
                            <HeadingAnimation>
                            <h2 className='text-4xl font-semibold text-green-700 text-center'>Preceding</h2>
                            </HeadingAnimation>
                <section className='grid md:grid-cols-3 gap-4'>
                {
                    events.slice(3,5).map((event,i) => <EventCard key={i} event={event} />)
                }
            </section>
                </div>
        </div>
    );
};

export default TrendingNowPage;