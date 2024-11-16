import React, { useEffect, useState } from 'react'

export default function LeftNav() {
  const [categories,setCategories]=useState([])
  useEffect(()=>{
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res=>res.json())
    .then(data=>{
      setCategories(data.data.news_category)
      // console.log(data.data.news_category)
    })
  },[])
// console.log(categories)
// categories.map(category=>console.log(category.category_name))
  return (
    <div>
      <h1 className='font-semibold text-center pb-2'>All Category {categories.length}</h1>
      {categories?.map(category=> <button className='btn w-full my-2 bg-base-100' key={categories.categories_id}> {category.category_name}</button>
      )}
    </div>
  )
}
