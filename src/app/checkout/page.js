import Head from "next/head";

import CheckOutForm from "./CheckOutForm";
import PaymentSuccess from "./PaymentSuccess";
import { Seo } from "@/components/HeaderSEO";


const CheckOutPage = ({searchParams}) => {
    const  {track,order} = searchParams
    
    if(track && order === "success"){
        return <PaymentSuccess track={track}/>
    }
    return (
        <>
        <Seo 
         title="Youman Catalyst - NFC enabled premium membership card "
         description="Embrace luxury, convenience, and savings at a time with Youman Catalyst. Get Youman Catalyst membership card and enjoy valuable vouchers worth of BDT 10,000+ and also take advantage of up to 80% discounts at partner outlets."
         image="https://youman.one/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcard_white.0db53e32.png&w=384&q=75"
         url="https://youman.one/checkout"
         pixelId="1279300196709165"  // Your Pixel ID here
         gaId="ieVe7AnRvsKfUEWx2IAwhDPIhmeOXQzIXMCkl0SxMR4"
        
        />
        
        <div className="max-w-7xl mx-auto p-4">
                    
                <CheckOutForm/>
                

        </div>
        </>
    );
};

export default CheckOutPage;