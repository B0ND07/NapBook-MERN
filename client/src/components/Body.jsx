import React from 'react'
import { GooglePlayButton, AppStoreButton } from "react-mobile-app-button";

const Body = () => {
  return (
    <div className='mx-auto px-4  lg:px-20 xl:px-48'>
    <div className='flex flex-col justify-center items-center md:flex-row  '>
        <div className='w-1/2 md:py-10 '>
        <img alt=""
              src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/57382e9feb53d08237fa988a570efdff1602d6ff-912x1267.png?w=650&q=80&fit=max&auto=format" className='h-[60vh] md:mx-28 hidden md:block'
              
            ></img>
            <img alt=""
              src="https://appinventiv.com/wp-content/uploads/2022/07/How-to-Develop-a-Hotel-Booking-App.webp" height={190} className='h-[40vh] md:mx-28 md:hidden object-cover '
              
            ></img>
            </div>
            <div className='w-1/2  md:py-20'>
            <h1 className='text-[50px] font-bold text-red-600'>
              Save $$$
              <br /> With Offers On Demand
            </h1>
            <div className="flex flex-col md:flex-row gap-6 my-3">
              <AppStoreButton theme={"dark"} />
              <GooglePlayButton theme={"dark"} />
            </div>
            <br />
          
            </div>
            
    </div>
    <div className='mb-10 h-[250px] flex justify-center items-center  bg-red-500 pb-4'>
          <div>
        <h1 className="text-2xl mx-28 md:mx-0 md:text-4xl font-semibold  ">Save time, save money!</h1>
        <p className="my-2 mx-28 md:mx-10">Sign up and we'll send the best deals to you</p>
        <div className="h-10">
        <input className="h-10 mx-20 md:mx-0 border-neutral-600 rounded px-2" type="text" placeholder="Email address"/>
        <button className=" bg-black rounded font-medium w-24 !text-white md:w-24 lg:w-32 md:h-full h-10 mx-40 md:mx-2 mt-1">Subscribe </button>
        </div>

        </div>
        
    </div>
    </div>
  )
}

export default Body