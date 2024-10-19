'use client'

import useChangeParams from "@/hooks/useChangeParams";




const Catagory = () => {


const [changeCatagory] = useChangeParams()
    
const catagorys = [
    'Hotel & Dining',
    'Travel',
    'Grooming',
    'Wellbeing',
    'Lifestyle',
    'Arts & Carafts',
    'Automobiles',
    'Others'

]
   
    return (
        <div className="grid md:grid-cols-6 grid-cols-2  md:justify-center no-scrollbar gap-2 overflow-x-auto mx-4 ">
             {
                
             catagorys.map(item => <button type="button"  key={item}  onClick={()=>changeCatagory('catagory',item)} className="dark:text-white border border-[#4db16c]   text-black backdrop-blur-sm inline-block md:w-[148px] md:px-4 py-1 text-nowrap  rounded-md  md:text-base text-sm">{item}</button>)
              
             }
                
        </div>
    );
};

export default Catagory;