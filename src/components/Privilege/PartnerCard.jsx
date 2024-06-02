import Image from "next/image";
import img from "@/images/a.jpg"
const PartnerCard = ({data}) => {
  const {name,description,logo,location,webURL,phone,disclaimer,offer,catagory} = data;
  console.log(data);
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg relative">
          <div className="flex gap-2 absolute top-3 right-3">
    <span className="bg-green-300 h-6  px-2 text-green-700 text-sm  rounded-xl">{offer.discount}% Discount </span>
    {offer.flat && <span className="bg-yellow-400 h-6  px-2 text-yellow-700 text-sm  rounded-xl">Cash voucher {offer.flat}</span>}
    </div>
  <Image class="w-full" src={img} alt="Sunset in the mountains" />
  <div className="px-6 py-4">
   
    <div className="font-bold text-xl mb-2">{name}</div>
    
    
    <p className="text-gray-700 text-base">
    {catagory}
    </p>
  </div>
  {/* <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div> */}
</div>
    );
};

export default PartnerCard;