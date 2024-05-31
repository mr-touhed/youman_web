import Catagory from "@/components/Privilege/Catagory";
import CatagoryDetails from "@/components/Privilege/CatagoryDetails";
import HeroSlider from "@/components/Privilege/HeroSlider";
import { Suspense } from "react";



const Catagorys = ({searchParams}) => {

    
    return (
        <div className="max-w-7xl mx-auto flex flex-col gap-4">
                <HeroSlider/>
                <Catagory/>
                <Suspense fallback="Loading.......">
                <CatagoryDetails searchParams={searchParams}/>
                </Suspense>
        </div>
    );
};

export default Catagorys;