"use client";
import Image from 'next/image';
import { useState } from 'react';
// components/EventCard.js
import ReactCardFlip from 'react-card-flip';

const EventCard = ({ event,soon }) => {
    const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
        
        <section className='bg-[url("/images/event-card-bg.png")] bg-no-repeat bg-cover relative h-[354px] overflow-hidden rounded-md p-8 flex flex-col gap-4'>
        {soon && <div className='absolute w-full left-0 right-0 top-0 h-full z-20 bg-[#131313bc] grid place-content-center'> <h4 className='text-4xl font-bold text-green-700'>Coming soon...</h4></div>}   
          <h2 className='text-3xl font-semibold text-white'>{event.name} </h2>
          
          <button  className='w-28 absolute bottom-[200px] text-white text-sm bg-green-700 backdrop-blur-sm border rounded-t-xl border-green-700 px-1 py-1.5 ' onClick={handleFlip}>Know more</button>
          <div className='absolute bottom-0 left-0 right-0 w-full h-[200px] rounded-md overflow-hidden bg-green-700 p-1 '>
          <Image src="/images/event_img.jpg" alt="sdf" width={400} height={400} className='w-full h-[192px] rounded-md object-fill object-top '/>
          </div>
        </section>

        <section className='relative h-[354px] bg-[url("/images/event-card-bg.png")] bg-no-repeat bg-cover overflow-hidden rounded-md p-8 flex flex-col gap-4 text-white'>
                <div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, itaque animi possimus incidunt labore, sit fuga adipisci voluptatibus dolorem facere eius accusantium aspernatur obcaecati beatae rem laudantium voluptatem aut libero?</p>
                </div>
          <button  className='w-28 absolute  border-green-700 top-[0px] right-0 text-green-700  text-sm font-bold uppercase backdrop-blur-sm border rounded-b-md  px-1 py-1.5 ' onClick={handleFlip}>back</button>
        </section>
      </ReactCardFlip>
  );
};

export default EventCard;