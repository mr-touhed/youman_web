"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import BlackCard from "@/images/card_black.png"
import WhiteCard from "@/images/card_white.png"
import { baseURL } from '@/utils/baseURL';
const PaymentSuccess = ({track}) => {
    const [info,setInfo] = useState({})
    const [loading,setLoading] = useState(true);
    const [message,setMessage] = useState('');

   
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
        const subtotal = 1111 - +info?.cashback;

        content = <div className='space-y-6 max-w-4xl mx-auto p-4'>
        <section className=''>
        <p className='text-green-700 font-semibold'>Order Successful</p>
        <p className='text-2xl font-bold text-left'>Thank you for your order</p>
        <p className=''>Your order is under process and you will be notified soon!</p>
        </section>

        <section>
                
                <div className='md:hidden block'>
                <p className='font-bold'>Order number <br/> <span className='font-normal'>#{info?.invoice_number}</span></p>
                <p className='font-bold'>Payment ID <br/> <span className='font-normal'>#{info?.paymentID}</span></p>
                </div>

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
                                <tr className=' border-b md:flex md:flex-row flex-col md:justify-between hidden'>
                                    <td className='font-bold'>Order number <br/> <span className='font-normal'>#{info?.invoice_number}</span></td>
                                    <td className='font-bold'>Payment ID <br/> <span className='font-normal'>#{info?.paymentID}</span></td>
                                    
                                </tr>
                                <tr className=' border-b '>
                                    <td className='py-8'>
                                        <div className='flex  items-center gap-2'>
                                        <Image  src={info.cardColor === "white" ? WhiteCard : BlackCard} alt="Youman Previlege Card" width={500} height={250} className='md:w-[250px] w-[150px]' />
                                        
                                        </div>
                                    </td>
                                    <td>BDT {1111}</td>
                                </tr>
                                <tr className=''>
                                    <td className=' p-2'>Referral / Promo</td>
                                    <td>BDT <span className='text-red-600'>{info?.cashback || 0}</span></td>
                                </tr>
                                <tr >
                                    <td className=' p-2'>Subtotal</td>
                                    <td>BDT {subtotal}</td>
                                </tr>
                                <tr className=' border-b '>
                                    <td className=' p-2'>Shipping</td>
                                    <td>BDT <span className='text-red-600'>0</span></td>
                                </tr>
                                <tr className='text-lg font-bold'>
                                    <td>Total</td>
                                    <td>BDT {info?.amount}</td>
                                </tr>
                        </tbody>
                </table>
        </section>
        <section>
                <p className='text-lg font-bold'>Shipping address</p>
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