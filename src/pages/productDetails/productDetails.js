import { useParams } from 'react-router-dom';
import {useEffect, useState } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { getSingleProductService } from '../../redux/services/productsServices';
function ProductDetails() {
    const params = useParams();
    console.log(params.id)
    const dispatch =useDispatch();
    const products=useSelector((state)=>state.products.products)
        useEffect(() => {
          dispatch (getSingleProductService(params.id))
        },[]);
     
  
    return ( <>
    
    </> );
}

export default ProductDetails;