import { partners } from "../../_data/data";



export const GET = async (res) =>{
    try {
        const catagories = partners.map(item => item.location.state);
        return Response.json(catagories)
    } catch (error) {
        console.log(error);
    }   
}