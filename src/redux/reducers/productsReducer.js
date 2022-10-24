import { PRODUCTS_ACTIONS_TYPE } from './../actions/productsAction';

const INITIAL_STATE ={
    products:[],
    singleProduct:[]
}

export const productsReducer = (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case PRODUCTS_ACTIONS_TYPE.GET_PRODUCTS:{
            return{
                ...state,
                products:[...action.payload]
            }
        }
        case PRODUCTS_ACTIONS_TYPE.GET_SINGLE_PRODUCT:{
            return{
                ...state,
                singleProduct:[{...action.payload}]
            }
        }
        default:{
            return{
                ...state
            }
        }

    }
}