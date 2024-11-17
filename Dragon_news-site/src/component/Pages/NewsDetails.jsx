import React from 'react'
import { Link, Outlet, useLoaderData } from 'react-router-dom'
import Header from '../Header'
import RightNav from '../Layout-component/RightNav'

export default function NewsDetails() {
  const data=useLoaderData()
  const details=(data.data[0])
  console.log(details.title)
  return (
    <div className="max-w-6xl mx-auto py-4 font-poppins">
      <header>
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto md:pt-5 md:grid md:grid-cols-12 gap-4">
      <section className="col-span-9">
        <h1 className='font-semibold'>Dragon News</h1>
        <div className=''>
          <img src={details.image_url} className='h-[350px] w-full py-5' alt="" />
        </div>
        <h1 className='text-xl font-bold py-5'>{details.title}</h1>
        <p>{details.details}</p>
        <Link to={'/'} className='btn bg-red-600 p-4 my-5 text-white'>All news in this category</Link>
      </section>
      <aside className="col-span-3"><RightNav></RightNav></aside>
      </main>
    </div>
  )
}
