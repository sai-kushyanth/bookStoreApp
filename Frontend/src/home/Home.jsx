import React from 'react'
import Navbar from '../components/Navbar'
import FreeBook from '../components/FreeBook'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
        <div className="min-h-screen flex flex-col justify-between pt-16">
      <Navbar/>
      <Banner />
      <FreeBook/>
      <Footer />
   </div>
    </>
  )
}

export default Home