'use client'

import useChangeParams from "@/hooks/useChangeParams";




const Catagory = () => {


const [changeCatagory] = useChangeParams()
    
const catagorys = [
    'Travel and Dining',
    'Wellbeing',
    'Grooming',
    'Healthcare',
    'Automobile',
    'Others'
]
   
    return (
        <div className="grid md:grid-cols-6 grid-cols-2  md:justify-center no-scrollbar gap-1 overflow-x-auto mx-4 ">
             {
             catagorys.map(item => <button type="button"  key={item}  onClick={()=>changeCatagory('catagory',item)} className="dark:text-white bg-[#e2ffee34] backdrop-blur-sm inline-block md:w-[148px] md:px-4 py-1 text-nowrap border rounded-md  md:text-base text-sm">{item}</button>)
              
             }
                
        </div>
    );
};

export default Catagory;