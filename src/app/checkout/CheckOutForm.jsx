"use client"
import BkashModal from "@/components/BkashModal";
import black from "@/images/order_card/card_black.png"
import white from "@/images/order_card/card_white.png"
import { baseURL } from "@/utils/baseURL";
import Image from "next/image";
import { useState } from "react";

const CheckOutForm = () => {
    const [cardColor,setCardColor] = useState("white");
  
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
        <div className="grid md:grid-cols-2  grid-cols-1 gap-4 items-center  pt-8">
            <section className="order-2 md:order-1">
            <form onSubmit={handel_order} className="flex flex-col gap-4  ">
                    <div className="flex flex-col gap-1">
                        <label className="text-sm" htmlFor="name">Name</label>
                        <input onChange={(e)=>handel_change_input(e)} value={order.fullname} type="text" name="fullname" id="name"  className="border rounded-md p-2" required/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm" htmlFor="email">Email </label>
                        <input onChange={(e)=>handel_change_input(e)} value={order.email} type="email" name="email" id="email"  className="border rounded-md p-2" required/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm" htmlFor="phone">Mobile </label>
                        <input onChange={(e)=>handel_change_input(e)} value={order.mobile} type="tel" name="mobile" id="phone"  className="border rounded-md p-2" required/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm" htmlFor="address">Address </label>
                        <textarea onChange={(e)=>handel_change_input(e)} value={order.address} name="address" id="address" className="h-20 border rounded-md p-2" required></textarea>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm" htmlFor="reffer">Referral code (if any)</label>
                        <input onChange={(e)=>handel_change_input(e)} value={order.reffer} type="text" name="reffer" id="reffer"  className="border border-green-700 rounded-md p-2"/>
                    </div>
                    <button type="submit" disabled={loading} className="bg-green-700 disabled:bg-green-400 p-2 md:rounded-md text-white uppercase md:relative fixed bottom-2  font-bold w-[90.5%] z-50">{loading ? "Loading..":"GET IT !"}</button>
                </form>

                <div className="mt-6 px-3">
                            <h3 className="text-xl mb-2 font-semibold">Order summary</h3>
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody className=" font-thin">
                                <tr>
                                    <td>Subtotal (1 items)</td>
                                    <td>1,111</td>
                                </tr>
                                <tr>
                                    <td>Discount / Promo</td>
                                    <td>200</td>
                                </tr>
                                <tr>
                                    <td>Delivery</td>
                                    <td >0</td>
                                </tr>
                                <tr className="font-bold text-green-700">
                                    <td>Total</td>
                                    <td>1,111</td>
                                </tr>
                            </tbody>
                        </table>

                </div>
                <div className="mt-4 space-y-3 font-thin">
                    <h4 className="font-bold">Description</h4>
                    <p>Youman Catalyst - NFC enabled premium membership card  </p>
                    <div>
                        <h4>Key Features:</h4>
                        <ol className="list-inside list-decimal px-3">
                            <li>NFC Enabled Business card – Tap or Scan to share your contact information</li>
                            <li>Upto 80% discount at Youman Partner outlets </li>
                            <li>BDT 10,000+ worth of Vouchers  </li>
                            <li>Round the year exclusive events access </li>
                        </ol>
                    </div>
                    <p>Embrace luxury, convenience, and savings at a time with Youman Catalyst. Get Youman Catalyst membership card and enjoy valuable vouchers worth of BDT 10,000+ and also take advantage of up to 80% discounts at partner outlets. Access benefits from Healthcare, Restaurants, Travel, Dining, Automotive, Lifestyle and what not! Order now and receive the custom made physical card, vouchers, starter kit and lot more!</p>
                </div>
            </section>

        <div className=" order-1 md:order-2 self-start flex flex-col items-center w-full ">
                    <Image className="mx-auto md:w-auto w-[70%] card_animation "  src={cardColor === "black" ? black : white} alt="youman card" width={300} height={200}/>

                    <div className="space-y-4  mt-4">
                        
                        <div className=" font-semibold   ">
                            <p className="text-2xl text-center font-bold uppercase text-green-700 " >BDT <span className="ml-2">1,111</span></p>
                            <p className="text-sm text-center">Validity: 365 days</p>
                        </div>

                        
                    </div>
                    <div className="mt-8">

                    <p className=" text-base text-center"> Select your shade, own your vibe !</p>
                    <div className="flex justify-center my-6 gap-4">
                   
                    <div className={`flex px-6 py-1 items-center rounded-lg bg-[hsl(0,50%,99%)]  shadow-lg text-black cursor-pointer icon_shadow ${cardColor === "white" && "checkout"}`}>
                        <label htmlFor="white" className="cursor-pointer">White</label>
                        <input className="hidden" onChange={(e)=>change_card_color(e)} type="radio" name="color" id="white" value="white" />
                    </div>
                   
                   <div className={`flex px-6 py-1 items-center rounded-lg bg-black text-white shadow-lg cursor-pointer icon_shadow ${cardColor === "black" && "checkout"}`}>
                        <label htmlFor="black" className="cursor-pointer">Black</label>
                        <input className="hidden" onChange={(e)=>change_card_color(e)} type="radio" name="color" id="black"  value="black" />
                    </div>
                    
                   </div>
                    </div>
                   
                
        </div>

        </div>

          
        </>
    );
};

export default CheckOutForm;