import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProductService } from "../../redux/services/productsServices";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
function ProductDetails() {
  const params = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleProductService(params.id));
  });
  const product = useSelector(
    (state) => state.singleProduct.singleProduct[0].product
  );
  // console.log(product)

  return (
    <>
      <div className="container mt-5 text-capitalize">
        <div className="card mb-3 border-0" key={product._id}>
          <div className="row g-0 justify-content-between">
            <div className="col-md-4">
              <img
                src={product.image}
                className="img-fluid shadow w-100"
                alt="..."
              />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title h1">{product.name}</h5>
                <p className="card-text fw-bold fs-5 textColor">
                  {product.price} L.E
                </p>
                <p className="card-text">
                  category :{" "}
                  <span className="textColor">{product.category}</span>
                </p>
                <p className="card-text">Availibility : In Stock</p>
                <hr className="text-dark" />
                <p className="card-text">{product.description}</p>
                <div >
                    <button type="button" className="py-1 bg-transparent rounded-5">
                      <RemoveIcon />
                    </button>
                  <input
                    type="number"
                    name="conter"
                    value="1"
                    className="w-25  mx-3 py-2 px-3 rounded-5 border-dark-50"
                  />
                    <button type="button" className="py-1 bg-transparent rounded-5">
                      <AddIcon />
                    </button>
                </div>
                <button type="button" className="btn bgColor rounded-0 my-4 py-3 px-5">add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
