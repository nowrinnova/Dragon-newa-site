import React from 'react'
import { Link } from 'react-router-dom'
import userLogo from '../assets/user.png'
export default function Nav() {
  return (
    <div className='flex justify-between items-center'>
      <div></div>
      <div className='md:pl-32'>
        <ul className='flex gap-2 text-gray-500' >
          <li><Link to={'/'}>Home |</Link></li>
          <li><Link to={'/about'}>About |</Link></li>
          <li><Link to={'/career'}>Career</Link></li>
        </ul>
      </div>
      <div className='flex items-center gap-1'>
        <div>
          <img src={userLogo} alt="" />
        </div>
        <button className='btn rounded-lg bg-black text-white'>Login</button>
      </div>
    </div>
  )
}
