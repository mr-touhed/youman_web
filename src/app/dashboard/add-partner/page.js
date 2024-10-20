import ProductFrom from '@/components/productForm/AddedPartner';

import React from 'react';

const addproductPage =  () => {
    
    

    const privilege_data = {name:"",location:{address:""}, offers:{discount:"",flat:"",Upto:"false"},catagory:"select",exclusive:"false"}


    return (
       <div>
            <h2 className='text-2xl text-center'>Add Privilege Partner</h2>
            <ProductFrom privilege={privilege_data} />
       </div>
    );
};

export default addproductPage;