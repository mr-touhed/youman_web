import Image from 'next/image';
import ContactForm from './_components/ContactForm';
import banner from "@/images/Pages_img/Contactus.png"
const page = () => {
    return (
        <div className='max-w-7xl mx-auto md:grid md:grid-cols-2  md:items-center gap-8 px-4 flex flex-col-reverse'>
            
                <section className=''>
                        <ContactForm/>

                        <div className='text-2xl  mx-auto p-3 md:hidden block my-16'>
                        <h3 className='text-center text-green-700 text-3xl font-semibold'>Contact center</h3>
                        <p>Phone: +880 9611696515 </p>
                        <p className='text-xs'>(11:00 AM - 7:00 PM || Sunday-Thursday)</p>
                        <p>Email: hello@youman.com.bd</p>
                             </div>
                </section>
                <section className='flex flex-col items-center gap-4 '>
                    <Image src={banner} alt="contact banner image" width={1000} height={600} className='w-full object-cover'/>
                    <div className='text-2xl font-bold mx-auto p-3 md:block hidden'>
                        <h3 className='ml-3 text-green-700 text-3xl font-semibold'>Contact center:</h3>
                        <p>Phone: +880 9611696515 </p>
                        <p className='text-xs font-thin'>(11:00 AM - 7:00 PM || Sunday-Thursday)</p>
                        <p>Email: hello@youman.com.bd</p>
                    </div>
                    </section>
        </div>
    );
};

export default page;