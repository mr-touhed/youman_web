import Image from 'next/image';
import React from 'react';
import ContactForm from './_components/ContactForm';
import { FaFacebookF,FaYoutube,FaSquareXTwitter,FaLinkedinIn,FaInstagram,} from "react-icons/fa6";
import Link from 'next/link';
const page = () => {
    return (
        <div className='max-w-7xl mx-auto grid md:grid-cols-2  items-center gap-8 px-4'>
            
                <section className='md:order-1 order-0'>
                        <ContactForm/>
                </section>
                <section className='flex flex-col items-center gap-4 md:order-0 order-1'>
                    <Image src="/images/contact_banner.png" alt="contact banner image" width={1000} height={600} className='w-full '/>

                    <div className='text-2xl font-bold mx-auto p-3 '>
                        <h3 className='ml-3'>Youman contact center:</h3>
                        <p>Phone: +880 9611696515</p>
                        <p className='md:block hidden'>WhatsApp +8801844696515 (11:00 AM - 7:00 PM || Working days only)</p>
                        <p className='md:hidden block'>WhatsApp +8801844696515 <br/><span className='text-xs'>(11:00 AM - 7:00 PM || Working days only)</span></p>
                        <p>Email: hello@youman.com.bd</p>
                    </div>


                </section>
        </div>
    );
};

export default page;