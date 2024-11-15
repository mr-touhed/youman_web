import Image from "next/image";
import Link from "next/link";
const PartnerCard = ({data}) => {
  const {name,image,offers,catagory,location} = data;

    return (
        <Link href={`/privilege/details/${name}`} className="md:w-[250px] w-[150px] space-y-4  min-h-[330px] md:h-[430px] mx-auto rounded overflow-hidden shadow-lg relative ">
          
  <Image className="w-full md:h-[200px] h-[135px]" src={image?.display_url} width={250} height={200} alt={name} />
      <div className="md:px-6   md:h-[100px] md:flex items-start ">
  
    <h4 className="md:font-bold font-semibold  md:text-xl mb-2 text-base  w-full text-center">{name}</h4>
    
    
  </div>
  <div className="flex gap-2 md:px-2 px-1 flex-wrap ">
    {offers?.offer1 && <span className="border border-green-300 bg-[#ffffff] backdrop-blur-sm h-6  px-2 text-green-700 text-xs flex justify-center items-center rounded-xl">{offers?.offer1}</span>}
    {offers?.offer3 && <span className="border border-green-300 bg-[#ffffff] backdrop-blur-sm h-6  px-2 text-green-700 text-xs flex justify-center items-center rounded-xl">{offers?.offer3}</span>}
    {offers?.offer2 && <span className="border border-green-300 bg-[#ffffff] backdrop-blur-sm h-6  px-2 text-green-700 text-xs flex justify-center items-center rounded-xl">{offers?.offer2}</span>}
    </div>
      <div className="absolute bottom-2 left-1">
      <p className="text-sm text-nowrap ">{catagory}</p>
      
      </div>
  
</Link>

    );
};

export default PartnerCard;