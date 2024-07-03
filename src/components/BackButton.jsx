"use client"
import Image from "next/image";
import logo from "@/images/youman_logo.png"
import { useRouter } from "next/navigation";

const BackButton = () => {
    const router = useRouter();
    const back_func = () =>{
        router.back()
    }
    return (
        <div className='max-w-7xl mx-auto h-[100%] flex items-center'>
               
                <Image onClick={back_func} src={logo} width={50} height={30} alt="youman brand logo" className="cursor-pointer"/>
                
                </div>
    );
};

export default BackButton;