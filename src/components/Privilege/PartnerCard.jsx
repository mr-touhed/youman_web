import Image from "next/image";
import Link from "next/link";
const PartnerCard = ({data}) => {
  const {name,image,offers,catagory,location} = data;

    return (
        <Link href={`/privilege/details/${name}`} className="md:w-[250px] w-[150px]  h-[300px] md:h-[420px] mx-auto rounded overflow-hidden shadow-lg relative ">
          <div className="flex gap-2 absolute md:flex-row flex-col top-3 right-3">
    {offers.discount && <span className="border border-green-300 bg-[#ffffff] backdrop-blur-sm h-6  px-2 text-green-700 text-xs flex justify-center items-center rounded-xl">{offers.discount}% Discount </span>}
    {offers.flat && <span className="bg-yellow-400 h-6  px-2 text-yellow-700 text-xs flex justify-center items-center rounded-xl">Cash voucher {offers.flat} TK</span>}
    </div>
  <Image className="w-full" src={image?.display_url} width={250} height={200} alt={name} />
  <div className="md:px-6 py-4  h-[100px] flex items-end ">
   
    <h4 className="md:font-bold font-semibold  md:text-xl mb-2 text-base text-left">{name}</h4>
    
    
  </div>
      <div className="absolute bottom-2 left-1">
      <p className="text-sm text-nowrap ">{catagory}</p>
      
      </div>
  
</Link>

    );
};

export default PartnerCard;