import { partners } from "../../../../public/data/data"



export  async function GET(request){
    try {
        const searchParams = request.nextUrl.searchParams;
        const catagory = searchParams.get('catagory');
        const city = searchParams.get('city');
        if(catagory && city){
            
            const catagoryData = partners.filter(partner => partner.catagory === catagory);
            const filterData = catagoryData.filter(partner => partner.location.state === city);
            
            return Response.json(filterData)
        }
        if(catagory){
            const filterData = partners.filter(partner => partner.catagory === catagory);
            return Response.json(filterData)
        }else if (city){
            const filterData = partners.filter(partner => partner.location.state === city);
            return Response.json(filterData)
        }else{
            return Response.json(partners)
        }
        
        
    } catch (error) {
        console.log(error)
    }
} 