"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import BlackCard from "@/images/card_black.png"
import WhiteCard from "@/images/card_white.png"
const PaymentSuccess = ({track}) => {
    const [card,setCard] = useState("white");
    const [loading,setLoading] = useState(false);
    const [info,setInfo] = useState({})
    useEffect(()=>{
        // TODO: fetch payment user info and display
    },[track])
    return (
        <div className='space-y-6 max-w-4xl mx-auto p-4'>
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
                                        <td className=''>Order number <br/> <span className='font-bold'>#123456</span></td>
                                        <td></td>
                                    </tr>
                                    <tr className=' border-b '>
                                        <td className='py-8'>
                                            <div className='flex  items-center gap-2'>
                                            <Image  src={card == "white" ? WhiteCard : BlackCard} alt="Youman Previlege Card" width={500} height={250} className='md:w-[250px]' />
                                            <span className='text-xs'>Quentity 1</span>
                                            </div>
                                        </td>
                                        <td>CA$156</td>
                                    </tr>
                                    <tr >
                                        <td className=' p-2'>Subtotal</td>
                                        <td>CA$156</td>
                                    </tr>
                                    <tr className=' border-b'>
                                        <td className=' p-2'>Shipping</td>
                                        <td>CA$156</td>
                                    </tr>
                                    <tr className='text-lg font-bold'>
                                        <td>Total</td>
                                        <td>CA$156</td>
                                    </tr>
                            </tbody>
                    </table>
            </section>
            <section>
                    <p className='font-semibold'>Shipping Address</p>
                        <address>
                            <p>Master para , Naogaon Sadar , Naogaon</p>    
                        </address>                
            </section>
        </div>
    );
};

export default PaymentSuccess;