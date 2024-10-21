"use client";
import Image from 'next/image';
import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const EventCard = ({ event, soon }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = (e) => {
    e.preventDefault(); // Prevent default action
    e.stopPropagation(); // Stop event from bubbling up
    setFlipped(!flipped);
  };

  return (
    <div>
         <div className='border border-green-700 rounded-md p-2 mb-4 '>
          <h2 className='text-center text-thin  text-black '> {event.name}</h2>
      </div>
      <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
      
      
      <section 
      
          onClick={handleFlip}
          onTouchEnd={handleFlip}
      className='bg-white text-black border shadow-md relative h-[250px] bg-[url("/images/Card_Black_banner.png")] bg-no-repeat bg-cover grid place-content-center  overflow-hidden rounded-xl md:p-8 p-3  gap-4 z-10'>
        <Image src="/images/event_img.jpg" alt="" width={300} height={250} className='rounded-2xl checkout'/>
        {soon && (
          <div className='absolute w-full left-0 right-0 top-0 h-full z-20 bg-[#131313bc] grid place-content-center'>
            <h4 className='text-4xl font-bold text-white'>Coming soon...</h4>
          </div>
        )}
        
      </section>
      
      <section
        onClick={handleFlip}
        onTouchEnd={handleFlip}
      className='relative h-[250px] bg-white shadow-lg border bg-[url("/images/Card_White_banner.png")] bg-no-repeat bg-cover overflow-hidden rounded-xl p-4 flex flex-col gap-4 text-black'>
        <div>
              <div>
                  <h3 className='text-xl font-semibold'>Event</h3>
                  <h6 className='text-xs font-thin'>Music Concert</h6>
              </div>
              <div>
                  <h3 className='text-xl font-semibold'>Date & Time</h3>
                  <h6 className='text-xs font-thin'> 18 nov 2024</h6>
              </div>
              <div>
                  <h3 className='text-xl font-semibold'>Venue</h3>
                  <h6 className='text-xs font-thin'> President Justice Shahabuddin Ahmed Park, Gulshan 2, 1212 Dhaka, Dhaka Division, Bangladesh</h6>
              </div>
        </div>
        <button  
          type='button'  
          className='w-28 absolute   bottom-2 left-[28%] text-green-700 text-sm font-bold backdrop-blur-sm   ' 
          onClick={handleFlip}
          onTouchEnd={handleFlip} // Handle touch events
        >
          Know more...
        </button>
      </section>
    </ReactCardFlip>

    </div>
  
    
   
    
    

  
  );
};

export default EventCard;
