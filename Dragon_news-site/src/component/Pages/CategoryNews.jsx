import React from 'react'
import { useLoaderData } from 'react-router-dom'
import NewsCart from '../NewsCart'

export default function CategoryNews() {
  const {data}=useLoaderData()
  console.log(data)
  return (
    <div>
      <h1 className='font-semibold'>Dragon News Home</h1>
      <p className='text-xs text-gray-400'>{data.length} is founded in this category</p>
      {
        data.map((category,index)=><NewsCart key={index} news={category}></NewsCart>)
      }
    </div>
  )
}
