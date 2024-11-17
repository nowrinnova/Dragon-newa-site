import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form className="card-body">
          <h1 className="font-semibold text-xl text-center font-poppins">
            Login your account
          </h1>
          <div className="form-control mt-5">
            <label className="label">
              <span className="label-text font-semibold">Email Address</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-gray-600 text-white hover:text-black ">
              Login
            </button>
          </div>
        </form>
        <p className="text-xs text-center mb-5">
          Don't Have An Account ?{" "}
          <Link end to={"register"} className="text-red-400">
            Register
          </Link>{" "}
        </p>
      </div>
    </div>
  );
}
