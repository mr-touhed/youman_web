"use client"
import black from "@/images/card_black.png"
import white from "@/images/card_white.png"
import Image from "next/image";
import { useState } from "react";
import { TiWarning } from "react-icons/ti";
const CheckOutForm = () => {
    const [cardColor,setCardColor] = useState("black");

    const change_card_color = (e) =>{
            const value = e.target.value;
            setCardColor(value)
            
    }

    return (
        <div className="grid md:grid-cols-2  grid-cols-1 gap-4 items-center  pt-2">
            <form action="" className="flex flex-col gap-4 order-2 md:order-1 ">
                    <div className="flex flex-col gap-1">
                        <label className="text-sm" htmlFor="name">Full Name</label>
                        <input type="text" name="name" id="name"  className="border rounded-md p-2" required/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm" htmlFor="email">Email Address</label>
                        <input type="email" name="email" id="email"  className="border rounded-md p-2" required/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm" htmlFor="phone">Mobile Number</label>
                        <input type="tel" name="phone" id="phone"  className="border rounded-md p-2" required/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm" htmlFor="address">Address Details</label>
                        <textarea name="address" id="address" className="h-20 border rounded-md p-2" required></textarea>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm" htmlFor="reffer">Referral Code (if any)</label>
                        <input type="text" name="reffer" id="reffer"  className="border rounded-md p-2"/>
                    </div>
                    <button className="bg-green-700 p-2 rounded-md text-white uppercase">Order now !</button>
                </form>

        <div className="border-l order-1 md:order-2">
                    <Image className="mx-auto md:w-auto w-[70%]"  src={cardColor === "black" ? black : white} alt="youman card" width={300} height={200}/>

                   <div className="flex justify-center my-6 gap-4">
                   <p className="flex px-6 py-2 items-center rounded-full bg-black text-white shadow-lg cursor-pointer">
                        <label htmlFor="black" className="cursor-pointer">Black</label>
                        <input className="hidden" onChange={(e)=>change_card_color(e)} type="radio" name="color" id="black"  value="black" />
                    </p>
                    <p className="flex px-6 py-2 items-center rounded-full bg-[hsl(0,50%,99%)]  shadow-lg text-black cursor-pointer">
                        <label htmlFor="white" className="cursor-pointer">White</label>
                        <input className="hidden" onChange={(e)=>change_card_color(e)} type="radio" name="color" id="white" value="white" />
                    </p>
                   </div>
                <p className="text-center uppercase text-yellow-500 md:text-sm text-xs flex items-center md:gap-4 justify-center"> <TiWarning className="inline-block md:w-6 md:h-6"/>Choose your Card What color you went</p>
        </div>

        </div>
    );
};

export default CheckOutForm;