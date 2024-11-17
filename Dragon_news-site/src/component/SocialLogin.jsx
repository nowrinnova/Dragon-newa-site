import React from 'react'
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
export default function SocialLogin() {
  return (
    <div className='space-y-3' >
      <h1 className='font-semibold'>Login With</h1>
      <div className='btn w-full bg-base-100 border-1 border-blue-300 hover:bg-blue-200 rounded-lg p-2'><FaGoogle /> Login with Google</div>
      <button className='btn w-full bg-base-100 border-1 border-black rounded-lg p-2'><FaGithub /> Login with Github</button>
    </div>
  )
}
