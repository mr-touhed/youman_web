import Image from "next/image";
import { Background } from "../Background";
import youmanCard from "@/images/tween_card.png"
import concert from "@/images/icon_img/concert_1.png"
import event from "@/images/icon_img/event_1.png"
import invite from "@/images/icon_img/letter_1-01.png"
import { MovingBorderDemo } from "../MovingBorderDemo";

const LifeStyle = () => {
    return (
        <Background bgColor="bg-neutral-900">
            <div>
                        <h1 className="relative z-10 text-4xl md:text-7xl line-clamp-3  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                        Elevate lifestyle
                    </h1>
                    <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                    To meet the ultimate privileges and embark on a thrilling adventure of self-discovery
                    
                    </p>
            </div>

            <div className="w-full px-4 grid md:grid-cols-2 grid-cols-1 gap-8 items-center my-8 relative z-10">
                <div className='flex flex-col gap-16'>
                    <p className="text-slate-300">Be a part of Youman, to meet the ultimate privileges and embark on a thrilling adventure of self-discovery, style, and unparalleled excitement. Your journey towards an empowered and fulfilled lifestyle begins here!</p>
                        
                    <div className="grid grid-cols-3 md:gap-16 gap-2">
                            <div className="flex flex-col gap-2 border border-green-300 p-3 rounded-md items-center">
                            <Image
                        src={event}
                        height="400"
                        width="300"
                        className="object-cover  w-24 inset-0 "
                        alt={''}
                        />
                            <h2 className="relative z-10   bg-clip-text text-transparent bg-gradient-to-b from-green-100 to-green-700  text-center font-sans font-bold">Events</h2>
                            </div>
                            <div className="flex flex-col gap-2 border border-green-300 p-3 rounded-md items-center">
                            <Image
                        src={concert}
                        height="400"
                        width="300"
                        className="object-cover  w-24 inset-0 "
                        alt={''}
                        />
                        <h2 className="relative z-10   bg-clip-text text-transparent bg-gradient-to-b from-green-100 to-green-700  text-center font-sans font-bold">Concert</h2>
                            </div>
                        <div className="flex flex-col gap-2 border border-green-300 p-3 rounded-md items-center">
                        <Image
                        src={invite}
                        height="400"
                        width="300"
                        className="object-cover  w-24 inset-0 "
                        alt={''}
                        />
                        <h2 className="relative z-10   bg-clip-text text-transparent bg-gradient-to-b from-green-100 to-green-700  text-center font-sans font-bold">Invitation</h2>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col '>
                <Image
          src={youmanCard}
          height="400"
          width="300"
          className="object-cover  w-full inset-0 card_animation"
          alt={''}
        />
                <div className='flex justify-center'>
                <MovingBorderDemo className="bg-black dark:text-slate-200"/>
                </div>
                </div>

           </div>
        </Background>
    );
};

export default LifeStyle;