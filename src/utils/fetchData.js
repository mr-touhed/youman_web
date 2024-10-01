import { baseURL } from "./baseURL";

export const get_singel_product = async (name) =>{
    try {
        const response =await fetch(`${baseURL}/single-partner/${name}`);
            return  await response.json()
    } catch (error) {
        console.log(error);
    }
}


 export const get_partners = async()  =>{
    try{
        const response = await fetch(`${baseURL}/partners`,{ next:{tags:['partners']}});
        return await response.json()
    }catch(error){
        console.log(error);
    }
}

export const get_catagorys = async() =>{
    try {
        const response = await fetch(`${baseURL}/catagorys`);
        return await response.json()
    } catch (error) {
        console.log(error);
    }
}

export const get_states = async() =>{
    try {
        const response = await fetch(`${baseURL}/catagorys`);
        return await response.json()
    } catch (error) {
        console.log(error);
    }
}

export const get_offer_state = async() =>{
    try {
        const response = await fetch(`${baseURL}/offer_state`);
        return await response.json()
    } catch (error) {
        console.log(error);
    }
}

export const get_query_partners = async(catagory,state) =>{
    try {
        const response = await fetch(`${baseURL}/query-partners?catagory=${catagory}&state=${state}`);
        return await response.json()
    } catch (error) {
        console.log(error);
    }
}


export const fetch_order = async (status,tag) =>{
    
    try {
        const response = await fetch(`${baseURL}/payments?status=${status}`, { cache:"no-store",next:{tags:[tag]}});
        const result = await response.json()
        return result
    } catch (error) {
        console.log(error);
    }
}