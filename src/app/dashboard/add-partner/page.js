import ProductFrom from '@/components/productForm/AddedPartner';

import React from 'react';

const addproductPage =  () => {
    
    

    const privilege_data = {name:"",location:{address:""}, offers:{discount:"",flat:"",Upto:"false"},catagory:"select",exclusive:"false"}

 const handel_submit_offer = async (e) => {
        e.preventDefault();
        
        try {

            if(image === null) return toast('select your partner image');
            setLoading(true)
            const imageUrl = await uploadImageToImgBB(image.file);
                if (imageUrl){
                    const partner = {...offer, image:imageUrl }
                        const response = await fetch(`${baseURL}/add-partner`,{
                            method:"POST",
                            headers:{
                                "content-type": "application/json"
                            },
                            body: JSON.stringify(partner)
                        })

                        const result = await response.json();
                        if(result.status){
                            setLoading(false)
                            e.target.reset()
                            setImage(null)
                            setOffer({name:"",details:"",location:{address:""}, offers:{discount:"",flat:"",Upto:"false"},catagory:"select",exclusive:"false"})
                            return toast(result.status.message)
                        }
                }

        } catch (error) {
            console.log("upload offer");
        }
    }

    return (
       <div>
            <h2 className='text-2xl text-center'>Add Privilege Partner</h2>
            <ProductFrom privilege={privilege_data} />
       </div>
    );
};

export default addproductPage;