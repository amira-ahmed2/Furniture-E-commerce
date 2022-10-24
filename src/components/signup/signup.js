import { useForm } from "react-hook-form";
import  React from "react";
import "../login/login.css";

function SignUp() {
  const { register,reset,error ,handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
   

  
  return (
    <>
      <div className=" loginBg">
        <div className="container">
          <div className=" d-flex justify-content-center">
            <div className="col-xl-6 col-lg-8 my-5 ">
              <div className="my-4">
                <div className="bg-white shadow-lg p-5  d-flex  flex-column justify-content-center item">
                  <header className="text-center mb-2">
                    <h1 className="">Sign up</h1>
                    <p className="opacity-75">
                      Create your account to get full access
                    </p>
                  </header>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                      <label
                        htmlFor="userName"
                        className="form-label h5"
                      >
                        Username{" "}
                      </label>
                      <input
                        type="text"
                        className="form-control rounded-0 p-2"
                        id="userName"
                        placeholder="name@example.com"
                        name="username"
                        {...register("username")} 
                                              />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="email"
                        className="form-label h5"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="form-control rounded-0 p-2"
                        id="email"
                        placeholder="name@example.com"
                        name="email"
                        {...register("email")} 
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="password"
                        className="form-label h5"
                      >
                        Password{" "}
                      </label>
                      <input
                        type="password"
                        className="form-control rounded-0 p-2"
                        id="password"
                        name="password"
                        {...register("password")} 
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="confirmPassword"
                        className="form-label h5"
                      >
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        className="form-control rounded-0 p-2"
                        id="confirmPassword"
                        name="confirmPassword"
                        {...register("confirmpassword")} 
                        />
                    </div>
                    <div className="d-flex flex-row flex-flex-wrap justify-content-between align-items-center mt-5">
                      <div>
                        <small className="opacity-75">
                        Already have an account? <a href="/SignUp" className="textColor opacity-100"> Login </a>here
                        </small>
                      </div>
                      <div>
                        <button
                          type="submit"
                          value="submit"
                          className="btn bgColor rounded-0 text-white px-5 py-3"
                        >
                          Sign Up
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

export default SignUp;
