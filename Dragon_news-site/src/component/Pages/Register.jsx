import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Provider/AuthProvider'
import { ToastContainer, toast } from "react-toastify";
export default function Register() {
  //use the context
  const {createNewUser}=useContext(AuthContext)
  // console.log(createNewUser)

  //show the user login successfully
  const[success,setSuccess]=useState('')

  const handleFromSubmit=(event)=>{
    event.preventDefault()
    
    const email=event.target.email.value;
    const password= event.target.password.value;
    console.log(email,password)
    createNewUser(email,password)
    .then((result) => {
      console.log(result.user);
      setSuccess('user added successfully')
      toast("user added")
    })
    .catch((error) => {
      // setErrorMessage(error.message);
      console.log(error);
    });
  }
  return (
    <div>
      <div className="flex justify-center items-center mt-10 font-poppins">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form className="card-body" onSubmit={handleFromSubmit}>
          <h1 className="font-semibold text-xl text-center font-poppins">
          Register your account
          </h1>
          
          <div className="form-control mt-2">
            <label className="label">
              <span className="label-text font-semibold">Your Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input  text-xs h-10 bg-[#F3F3F3]"
              required
            />
          </div>
          <div className="form-control mt-2">
            <label className="label">
              <span className="label-text font-semibold">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Enter your photo Url"
              className="input  text-xs h-10 bg-[#F3F3F3]"
              required
            />
          </div>
          <div className="form-control mt-2">
            <label className="label">
              <span className="label-text font-semibold">Email Address</span>
            </label>
            <input
              type="email"
              name='email'
              placeholder="Enter your Email"
              className="input  text-xs h-10 bg-[#F3F3F3]"
              required
            />
          </div>
          <div className="form-control mb-2">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
              type="password"
              name='password'
              placeholder="password"
              className="input  text-xs h-10 bg-[#F3F3F3]"
              required
            />
            <label className="label mt-2">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control ">
            <Link className="btn bg-gray-600 text-white hover:text-black ">
              Register
            </Link>
          </div>
        </form>
        <p className="text-xs text-center mb-5">
        Already have an account?  <Link end to={"/auth"} className="text-red-400">
            Login
          </Link>{" "}
          
        </p>
        {
          success && <p className="text-xs text-center mb-5 text-green-600">{success}</p>
        }
        {/* <ToastContainer></ToastContainer> */}
       {
        success &&  <div className="toast">
        <div className="alert alert-info">
          <span>{success}</span>
        </div>
      </div>
       }
      </div>
    </div>
   
    </div>
  )
}
