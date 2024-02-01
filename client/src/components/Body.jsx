import React from 'react'
import { GooglePlayButton, AppStoreButton } from "react-mobile-app-button";

const Body = () => {
  return (
    <div className='mx-auto px-4  lg:px-20 xl:px-48'>
    <div className='flex flex-col justify-center items-center md:flex-row  '>
        <div className='w-1/2 py-10 '>
        <img alt=""
              src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/57382e9feb53d08237fa988a570efdff1602d6ff-912x1267.png?w=650&q=80&fit=max&auto=format" className='h-[60vh] mx-28'
              
            ></img></div>
            <div className='w-1/2 py-5 md:py-20'>
            <h1 className='text-[50px] font-bold text-red-600'>
              Save $$$
              <br /> With Offers On Demand
            </h1>
            <div className="flex gap-6 my-3">
              <AppStoreButton theme={"dark"} />
              <GooglePlayButton theme={"dark"} />
            </div>
            <br />
            {/* <p className='font-semibold'>
              Apple and the Apple logo are trademarks of Apple Inc., registered
              in the U.S. and other countries. App Store is a service mark of
              Apple Inc. Google Play is a trademark of Google Inc. Terms apply.
            </p> */}
          
            </div>
            
    </div>
    <div className='mb-10 h-[250px] flex justify-center items-center  bg-red-500'>
          <div>
        <h1 className="text-4xl font-semibold my-6 ">Save time, save money!</h1>
        <p className="my-2 mx-6">Sign up and we'll send the best deals to you</p>
        <div className="h-10 ">
        <input className="h-10 border-neutral-600 rounded px-2" type="text" placeholder="Email address"/>
        <button className=" bg-black mx-2 rounded font-medium w-72 !text-white md:w-24 lg:w-32 md:h-full h-12 ">Subscribe </button>
        </div>

        </div>
        
    </div>
    </div>
  )
}

export default Body