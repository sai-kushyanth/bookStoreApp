import React from 'react';
import banner from "../../public/Banner.jpg";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row items-center">
        <div className='order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32 space-y-6'>
          <h1 className='text-4xl font-bold'>
            Hello, welcomes here to learn something{" "}
            <span className="text-pink-500">new everyday!!!</span>
          </h1>
          <p className='text-lg text-gray-700'>
            "Welcome to our online bookstore, where knowledge meets convenience! Explore a vast collection of books across various genres, from fiction to self-improvement. Discover new releases, bestsellers, and timeless classics. Enjoy a seamless shopping experience with easy navigation, secure payments, and fast delivery. Start your reading journey today!"
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input type="text" className="input input-bordered flex-1 p-2 rounded-md border-gray-300" placeholder="Email" />
            <button className="btn bg-pink-500 text-white px-5 py-2 rounded-md">Subscribe</button>
          </div>
        </div>
        <div className='order-1 w-full md:w-1/2 flex justify-center'>
          <img src={banner} alt="Books" className="max-w-full h-auto" />
        </div>
      </div>
    </>
  );
}

export default Banner;
