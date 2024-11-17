import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import userLogo from '../assets/user.png'
// import { AuthContext } from '../Provider/AuthProvider'
export default function Nav() {
  // const {user}=useContext(AuthContext)
  // console.log(user?.email)
  return (
    <div className='flex justify-between items-center '>
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
        <Link to={'/auth'}
         className='btn rounded-lg bg-black text-white'>Login</Link>
      </div>
    </div>
  )
}
