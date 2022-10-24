import AxiosInstance from './../../axiosConfig/instance';

export const PRODUCTS_ACTIONS_TYPE = {
GET_PRODUCTS:'GET_PRODUCTS',
GET_SINGLE_PRODUCT:'GET_SINGLE_PRODUCT'
}

export const getProductsAction=(products)=>{
    return{
        type:PRODUCTS_ACTIONS_TYPE.GET_PRODUCTS,
        payload:products
    }
}

export const getSingleProductAction=(product)=>{
    return{
        type:PRODUCTS_ACTIONS_TYPE.GET_SINGLE_PRODUCT,
        payload:product
    }
}
// export default function getSingleProductAction2(id) {
//   return (dispatch) => {
//     return AxiosInstance
//        .get(`/products/${id}`)
//        .then((res) => {
//          console.log(res.data);
//         //  dispatch({ type:PRODUCTS_ACTIONS_TYPE.GET_SINGLE_PRODUCT , payload: res.data.products.id });
//        })
//        .catch((err) => {
//          console.log(err);
//        });
//    };
//   }
