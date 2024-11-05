"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const EventCard = ({ event, soon,end=false }) => {
  const {image,name,type,venue,details,_id} = event
  const [flipped, setFlipped] = useState(false);

  const handleFlip = (e) => {
    e.preventDefault(); // Prevent default action
    e.stopPropagation(); // Stop event from bubbling up
    setFlipped(!flipped);
  };

  return (
    <div className='md:w-[403px] w-full'>
         <div className='border border-green-700 rounded-md p-2 mb-4 '>
          <h2 className='text-center text-thin  text-black '> {name}</h2>
      </div>
      <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
      
      
      <section 
      
          onClick={handleFlip}
          onTouchEnd={handleFlip}
      className={`bg-white ${end ? "opacity-50" : "opacity-100"} text-black border shadow-md relative w-full  h-[250px] bg-[url("/images/Card_Black_banner.png")] bg-no-repeat bg-cover grid place-content-center  overflow-hidden rounded-xl md:p-8 p-3  gap-4 z-10`}>
        <Image src={image.display_url} alt="" width={250} height={150} className='rounded-2xl w-[250px] -rotate-12 h-[150px] checkout'/>
        {soon && (
          <div className='absolute w-full left-0 right-0 top-0 h-full z-20 bg-[#131313bc] grid place-content-center'>
            <h4 className='md:text-4xl text-2xl font-bold text-white'>Coming soon...</h4>
          </div>
        )}
        
      </section>
      
      <section
        onClick={handleFlip}
        onTouchEnd={handleFlip}
      className='relative h-[250px] bg-white shadow-lg border  md:min-w-[403px] w-[276px] bg-[url("/images/Card_White_banner.png")] bg-no-repeat bg-cover overflow-hidden rounded-xl p-4 flex flex-col gap-4 text-black'>
        <div>
              <div>
                  <h3 className='text-xl font-semibold'>Event</h3>
                  <h6 className='text-xs font-thin'>{type}</h6>
              </div>
              <div>
                  <h3 className='text-xl font-semibold'>Date & Time</h3>
                  <h6 className='text-xs font-thin'> 18 nov 2024</h6>
              </div>
              <div>
                  <h3 className='text-xl font-semibold'>Venue</h3>
                  <h6 className='text-xs font-thin'> {venue}</h6>
              </div>
        </div>
        <Link  
          href={`/trending-now/${_id}`}  
          className='w-28 absolute   bottom-2 left-[38%] text-green-700 text-sm font-bold backdrop-blur-sm   ' 
           // Handle touch events
        >
          Know more...
        </Link>
      </section>
    </ReactCardFlip>

    </div>
  
    
   
    
    

  
  );
};

export default EventCard;
