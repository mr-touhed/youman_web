import Image from "next/image";
import youmanCard from "@/images/tween_card.png"
import concert from "@/images/icon_img/Concert_Icon.png"
import event from "@/images/icon_img/event.jpg"
import invite from "@/images/icon_img/Invitation_Icon.png"
import { MovingBorderDemo } from "../MovingBorderDemo";
import Link from "next/link";
import HeadingAnimation from "../HeadingAnimation";

const InfinitePossibilities = () => {
    return (
        <section className="dot-mask px-4  ">
            <div className="max-w-7xl mx-auto mt-16 pt-8">
            <div>
                    <HeadingAnimation>

                        <h1 style={{lineHeight:"1.3"}} className="relative z-10 text-4xl md:text-7xl line-clamp-3 pb-6  bg-clip-text text-transparent bg-green-700  text-center font-sans font-bold">
                        Infinite possibilities
                    </h1>
                    </HeadingAnimation>
                    <h4 className="sub-heading md:hidden block">
                    To meet the ultimate privileges and embark on a thrilling adventure of self-discovery
                    
                    </h4>
                    <h4 className="text-center text-neutral-600 my-2 text-[1.05rem] leading-[23px] pb-4 md:block hidden">
                    To meet the ultimate privileges and embark on a thrilling adventure of self-discovery
                    
                    </h4>
            </div>

            <div className="w-full   grid md:grid-cols-2 grid-cols-1 gap-8 items-center  relative z-10">
            <div className='flex flex-col md:order-1 order-2'>
                <Image
          src={youmanCard}
          height={300}
          width={400}
          className="object-cover  w-[90%] mx-auto inset-0 card_animation"
          alt={''}
        />
                <Link href="/checkout" className='flex justify-center'>
                <MovingBorderDemo className="bg-green-700 dark:text-slate-200"/>
                </Link>
                </div>
                <div className='flex flex-col gap-16 md:order-2 order-1'>
                    <p className="text-[#3F3F46] text-justify font-thin  leading-normal">Your journey begins with a tap. Limitless contact sharing, seamless access to exclusive events, concerts, and many more - all in one place.</p>
                        
                    <div className="grid grid-cols-3 md:gap-16 gap-2">
                            <Link href="/trending-now" className="flex flex-col gap-2  life_style_card border p-3 rounded-md  items-center">
                            <Image
                        src={event}
                        height="400"
                        width="300"
                        className="object-cover  w-24 inset-0 "
                        alt={''}
                        />
                            <h2 className="relative z-10   bg-clip-text text-transparent bg-green-700   text-center font-sans font-bold">Events</h2>
                            </Link>
                            <Link href="/trending-now" className="flex flex-col gap-2 border life_style_card  p-3 rounded-md items-center">
                            <Image
                        src={concert}
                        height="400"
                        width="300"
                        className="object-cover  w-24 inset-0 "
                        alt={''}
                        />
                        <h2 className="relative z-10   bg-clip-text text-transparent bg-green-700  text-center  font-sans font-bold">Concert</h2>
                            </Link>
                        <Link href="/trending-now" className="flex flex-col gap-2 backdrop-blur-sm life_style_card border  p-3 rounded-md items-center">
                        <Image
                        src={invite}
                        height="400"
                        width="300"
                        className="object-cover  w-24 inset-0 "
                        alt={''}
                        />
                        <h2 className="relative z-10   bg-clip-text text-transparent bg-green-700  text-center  font-sans font-bold">Invitation</h2>
                        </Link>
                    </div>
                </div>

                

           </div>
            </div>
        </section>
    );
};

export default InfinitePossibilities;