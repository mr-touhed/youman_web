

import {  get_partners } from '@/utils/fetchData';
import PartnerTable from './PartnerTable';
    

const ProductListPage = async () => {

    const result  = await  get_partners();
    
   
    return (
        <section>
                <h2 className='text-2xl text-center'>Partner List </h2>
                <PartnerTable partners={result.data}/>
        </section>
    );
};

export default ProductListPage;