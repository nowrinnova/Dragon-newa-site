import React from 'react'
import logo from "../assets/logo.png"
import moment from "moment"
export default function Header() {
  const today = new Date();

  // Get day, date, month, and year
  const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-US', options);
  return (
    <div className='flex flex-col justify-center items-center gap-2 py-2'>
      <div>
        <img className='w-[300px]' src={logo} alt="" />
      </div>
      <h1 className='text-gray-400 '>Journalism Without Fear or Favour</h1>
      <p className='text-gray-600'>{moment().format('dddd, MMMM Do ,YYYY')}</p>
    </div>
  )
}
