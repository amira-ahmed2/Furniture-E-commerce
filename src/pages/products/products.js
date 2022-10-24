import CardProducts from './../../components/cardProduct/cardProduct';
import "./products.css";
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useDispatch } from 'react-redux';
import React,{useEffect} from 'react';
import { getProductsService } from './../../redux/services/productsServices';
import getProductsAction from './../../redux/actions/productsAction';
function Products() {
  // useEffect(()=>{
  //   dispatch(getProductsAction)
  // },[])

//   const dispatch =useDispatch();
// // const mov=useSelector((state)=>state)
//     useEffect(() => {
//       dispatch (getProductsService())
//     },[]);


    return ( <>
    <div className='d-flex flex-column'>
        
        <div className=' order-0 position-relative mb-5'>
        <div className="col-11  h-100 bgColor2 position-static top-0 start-0">
        </div>
        <div className="col-11 position-absolute top-0 end-0  ">
            <img  src="/assets/images/xh2_hero1.png.pagespeed.ic.R1s5jToz4V.png" className='' alt="" height={'300px'} width={'100%'}/>
            <h1 className='position-absolute bottom-50 text-uppercase fw-bold'>products</h1>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ul">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page">
                  <Link to="/">Home</Link> <KeyboardArrowRightIcon/> Products
                </a>
              </li></ul>
        </div>

        </div>

<div className='order-1 text-center '>
<h2 className='fw-bold mb-3'>POPULAR PRODUCTS
</h2>
<p className='mb-5 text-center text-black-50 fw-semibold'>Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra<br/> ornare, eros dolor interdum nulla.

</p>
<CardProducts/>

</div>
    </div>
    </> );
}

export default Products;