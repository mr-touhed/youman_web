'use client'

import useChangeParams from "@/hooks/useChangeParams";

const catagorys = ['Food & Dining','Wellbeing','Grooming','Hotel & Resturant','Travel','Lifestyle','Arts & Crafts','Automobile']

const Catagory = () => {
    
const [changeCatagory] = useChangeParams()


    return (
        <div className="flex gap-4 md:justify-center no-scrollbar  overflow-x-auto mx-4 ">
             {
             catagorys.map(item => <button key={item}  onClick={()=>changeCatagory('catagory',item)} className="dark:text-white bg-[#e2ffee34] backdrop-blur-sm inline-block w-[148px] px-4 py-1 text-nowrap border rounded-md">{item}</button>)
             
             }
                
        </div>
    );
};

export default Catagory;