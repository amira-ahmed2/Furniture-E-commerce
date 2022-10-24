import React from "react";
import {useEffect, useState } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { getProductsService } from './../../redux/services/productsServices';
import { Link } from 'react-router-dom';

function CardProducts() {
 
  const dispatch =useDispatch();
  const products=useSelector((state)=>state.products.products)
      useEffect(() => {
        dispatch (getProductsService())
      },[]);
   

  return (
    <>
      <div className="">
        <div className="d-flex flex-wrap justify-content-center align-items-start">
          {products.map((product)=>{
            return(
              <div class="card me-3 mb-5" key={product._id} style={{width:"30%"}}>
              <img src={ product.image} class="card-img-top " style={{height:"230px"}}alt="..." />
              <div class="card-body">
                <Link to={`/products/${product._id}`} key={product._id} >
                <h5 class="card-title">{product.name}</h5>

                </Link>
                <p class="card-text">
                {product.price} L.E
                </p>
              </div>
            </div>
            )
          })}
        
        </div>
      </div>
    </>
  );
}

export default CardProducts;
