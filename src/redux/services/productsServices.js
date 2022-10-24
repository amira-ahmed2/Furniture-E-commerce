
import { getProductsAction } from '../actions/productsAction';
import AxiosInstance from './../../axiosConfig/instance';
import { getSingleProductAction } from './../actions/productsAction';

export const getProductsService =()=> async(dispatch)=>{

    try{
        const response= await AxiosInstance.get('/products')
        // console.log(response.data.products)

        dispatch(getProductsAction(response.data.products));
    }catch(error){
console.log(error)
    }
}

export const getSingleProductService =(id)=> async(dispatch)=>{

    try{
        const responseS= await AxiosInstance.get('/products/'+id)
        // console.log(responseS.data)
        // res.data.products.id
        dispatch(getSingleProductAction(responseS.data));
    }catch(error){
console.log(error)
    }
}