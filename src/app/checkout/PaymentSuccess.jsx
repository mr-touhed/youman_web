"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import BlackCard from "@/images/card_black.png"
import WhiteCard from "@/images/card_white.png"
import { baseURL } from '@/utils/baseURL';
const PaymentSuccess = ({track}) => {
    const [info,setInfo] = useState({})
    const [card,setCard] = useState(info.cardColor);
    const [loading,setLoading] = useState(true);
    const [message,setMessage] = useState('')
    console.log(info);
    useEffect(()=>{
        const checkPayment = async () =>{
            try {
                const response = await fetch(`${baseURL}/check-payment/${track}`, {cache:"no-cache"})
                if(!response.ok){
                    setLoading(false)
                    
                    return setMessage("Information not Found please contact with us")
                }
                const result  = await response.json();
                setInfo(result.paymentInfo)
               return  setLoading(false)
            } catch (error) {
                console.log(error);
                setMessage(error.message)
            }
        }

        checkPayment()

    },[track])


    let content;

    if(loading){
        content = <h1 className='w-full h-screen flex justify-center items-center'>Loading</h1>
    }else if(message){
        content = <h1 className='w-full h-screen flex justify-center items-center'>{message}</h1>
    }else{
        content = <div className='space-y-6 max-w-4xl mx-auto p-4'>
        <section className=''>
        <p className='text-green-700 font-semibold'>Order Successful</p>
        <p className='text-2xl font-bold '>Thank you for your order</p>
        <p className=''>Your order is under process and you will be notified soon!</p>
        </section>

        <section>
                


                <table className='w-full' cellPadding={6} cellSpacing={12} >
                        <thead>
                            <tr>
                                <th></th>
                            </tr>
                            <tr>
                                <th></th>
                            </tr>
                            
                        </thead>
                        <tbody className=''>
                                <tr className=' border-b'>
                                    <td className=''>Order number <br/> <span className='font-bold'>#{info?.invoice_number}</span></td>
                                    <td className=''>PaymentId <br/> <span className='font-bold'>#{info?.paymentID}</span></td>
                                    
                                </tr>
                                <tr className=' border-b '>
                                    <td className='py-8'>
                                        <div className='flex  items-center gap-2'>
                                        <Image  src={card == "white" ? WhiteCard : BlackCard} alt="Youman Previlege Card" width={500} height={250} className='md:w-[250px]' />
                                        <span className='text-xs'>Quentity 1</span>
                                        </div>
                                    </td>
                                    <td>CA${info?.amount}</td>
                                </tr>
                                <tr >
                                    <td className=' p-2'>Subtotal</td>
                                    <td>CA${info?.amount}</td>
                                </tr>
                                <tr className=' border-b'>
                                    <td className=' p-2'>Shipping</td>
                                    <td>CA$0</td>
                                </tr>
                                <tr className='text-lg font-bold'>
                                    <td>Total</td>
                                    <td>CA${info?.amount}</td>
                                </tr>
                        </tbody>
                </table>
        </section>
        <section>
                <p className='font-semibold'>Shipping Address</p>
                    <address>
                        <p>{info?.fullname}</p>
                        <p>{info?.mobile}</p>
                        <p>{info?.address}</p>    
                    </address>                
        </section>
    </div>
    }



    return (
        content
    );
};

export default PaymentSuccess;