import * as React from "react";
import { Link } from "react-router-dom";

import "./login.css";
function LogIn() {
  //   const [values, setValues] = React.useState({
  //     amount: "",
  //     password: "",
  //     weight: "",
  //     weightRange: "",
  //     showPassword: false,
  //   });

  //   const handleChange = (prop) => (event) => {
  //     setValues({ ...values, [prop]: event.target.value });
  //   };

  //   const handleClickShowPassword = () => {
  //     setValues({
  //       ...values,
  //       showPassword: !values.showPassword,
  //     });
  //   };

  //   const handleMouseDownPassword = (event) => {
  //     event.preventDefault();
  //   };
  return (
    <>
      <div className=" loginBg">
        <div className="container">
          <div className=" d-flex justify-content-center">
          <div className="col-xl-6 col-lg-8 my-5 ">
              <div className="mt-4">
                <div className="bg-white shadow-lg p-5  d-flex  flex-column justify-content-center item">
                  <header className="text-center mb-2">
                    <h1 className="">Login</h1>
                    <p className="opacity-75">
                      Enter Login details to get access
                    </p>
                  </header>
                  <form>
                    <div className="mb-3">
                      <label
                        for="exampleFormControlInput1"
                        className="form-label h5"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="form-control rounded-0 p-2"
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        for="exampleFormControlInput1"
                        className="form-label h5"
                      >
                        Password{" "}
                      </label>
                      <input
                        type="password"
                        className="form-control rounded-0 p-2"
                        id="exampleFormControlInput2"
                      />
                    </div>
                    <div className="d-flex flex-row flex-flex-wrap justify-content-between align-items-center mt-5">
                      <div>
                        <small className="opacity-75">
                          Don’t have an account?{" "}

                          <a  className="textColor opacity-100">
                           <Link to="/signup"> Sign Up</Link>
                          </a>
                          here
                        </small>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="btn bgColor  rounded-0 text-white px-5 py-3"
                        >
                          Log in
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogIn;
