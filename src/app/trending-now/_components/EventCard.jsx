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
    <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
      <section 
      
          onClick={handleFlip}
          onTouchEnd={handleFlip}
      className='bg-white text-black border border-green-800 shadow-md relative h-[200px] bg-[url("/images/event_img.jpg")] bg-no-repeat bg-cover  overflow-hidden rounded-md md:p-8 p-3 flex flex-col gap-4 z-10'>
        {soon && (
          <div className='absolute w-full left-0 right-0 top-0 h-full z-20 bg-[#131313bc] grid place-content-center'>
            <h4 className='text-4xl font-bold text-green-700'>Coming soon...</h4>
          </div>
        )}
        <h2 className='md:text-3xl text-xl font-semibold text-white'>{event.name}</h2>

        
        
        {/* <button 
          type='button'  
          className='w-28 absolute bottom-[200px] text-white text-sm bg-green-700 backdrop-blur-sm border rounded-t-xl border-green-700 px-1 py-1.5' 
          onClick={handleFlip}
          onTouchEnd={handleFlip} // Handle touch events
        >
          Know more
        </button>
        
        <div className='absolute bottom-0 left-0 right-0 w-full h-[200px] rounded-md overflow-hidden bg-green-700 p-1'>
          <Image src="/images/event_img.jpg" alt="event" width={400} height={400} className='w-full h-[192px] rounded-md object-fill object-top' />
        </div> */}
      </section>

      <section
        onClick={handleFlip}
        onTouchEnd={handleFlip}
      className='relative h-[200px] bg-black overflow-hidden rounded-md p-4 flex flex-col gap-4 text-white'>
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
  );
};

export default EventCard;
