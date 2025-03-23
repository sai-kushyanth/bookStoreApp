import React, { useEffect, useState } from 'react'
import Cards from './Cards'
/*import list from '../../public/list.json'*/
import axios from 'axios';
import {Link} from 'react-router-dom'

function Course() {
  const [book,setbook]=useState([])
  useEffect(()=>{
    const getBook=async()=>{
      try {
       const res= await axios.get("http://localhost:4001/book");
       console.log(res.data)
       setbook(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getBook();
  },[])
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-30 text-center justify-center items-center'>
            <h1 className=' text-2xl font-semiold md:text-4xl'>
            📚 Explore Our Curated Books –{" "} 
            <span className='text-pink-500'>Learn & Grow!</span>
            </h1>
            <p className='text-xl mt-10'>
            Enhance your knowledge with our expert-led courses on literature, self-improvement, and more. Dive into engaging lessons, improve your skills, and transform your reading experience today! 🚀
            </p>
            <Link to='/'>
            <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
            </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
            {
                book.map((item)=>(<Cards key={item._id} item={item}/>))
            }
        </div>

    </div>
    </>
  )
}

export default Course