"use client"
import BkashModal from "@/components/BkashModal";
import black from "@/images/card_black.png"
import white from "@/images/card_white.png"
import { baseURL } from "@/utils/baseURL";
import Image from "next/image";
import { useState } from "react";
import { TiWarning } from "react-icons/ti";
const CheckOutForm = () => {
    const [cardColor,setCardColor] = useState("black");
  
    const [order,setOrder] = useState({fullname:"",email:"",mobile:"",address:"",reffer:"",cardColor});
    const [loading,setLoading] = useState(false)
    const handel_change_input = (e) =>{
        setOrder(prev => ({...prev, [e.target.name]:e.target.value}))
    }
    const change_card_color = (e) =>{
            const value = e.target.value;
            setCardColor(value)
            
    }

    const handel_order = async (e) =>{
        e.preventDefault()
        try {
            const order_card_data = {...order,cardColor};
            setLoading(true)
            const response = await fetch(`${baseURL}/create-payment`,{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(order_card_data)
            })
            const result = await response.json();
            if(!result.status.type){
                alert(result.status.message)
            }else{
                const url = result.bkashUrl; // Replace with the URL you want to open

                return  window.location.href = url
            }
            

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
        <div className="grid md:grid-cols-2  grid-cols-1 gap-4 items-center  pt-2">
            <form onSubmit={handel_order} className="flex flex-col gap-4 order-2 md:order-1 ">
                    <div className="flex flex-col gap-1">
                        <label className="text-sm" htmlFor="name">Full Name</label>
                        <input onChange={(e)=>handel_change_input(e)} value={order.fullname} type="text" name="fullname" id="name"  className="border rounded-md p-2" required/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm" htmlFor="email">Email Address</label>
                        <input onChange={(e)=>handel_change_input(e)} value={order.email} type="email" name="email" id="email"  className="border rounded-md p-2" required/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm" htmlFor="phone">Mobile Number</label>
                        <input onChange={(e)=>handel_change_input(e)} value={order.mobile} type="tel" name="mobile" id="phone"  className="border rounded-md p-2" required/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm" htmlFor="address">Address Details</label>
                        <textarea onChange={(e)=>handel_change_input(e)} value={order.address} name="address" id="address" className="h-20 border rounded-md p-2" required></textarea>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm" htmlFor="reffer">Referral Code (if any)</label>
                        <input onChange={(e)=>handel_change_input(e)} value={order.reffer} type="text" name="reffer" id="reffer"  className="border rounded-md p-2"/>
                    </div>
                    <button type="submit" disabled={loading} className="bg-green-700 disabled:bg-green-400 p-2 rounded-md text-white uppercase">{loading ? "Loading..":"Order now !"}</button>
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

          
        </>
    );
};

export default CheckOutForm;