import React from 'react'
import AddIcon from '@mui/icons-material/Add';

const Hotel = () => {
  return (
    <div>
        <div className='flex flex-col md:min-h-60 gap-8 bg-gray-200 pt-4 md:items-center'>
            <div className='h-60 md:w-7/12'>
                <div className='h-60 -mr-[22.34px]'>
                    <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1" alt="" className='w-full h-full object-cover'/>
                </div>
            </div>
            <div className='md:w-7/12 mx-4 md:my-6 mb-6'>
                <div className='flex justify-between'>
                    <h2 className='text-xl capitalize font-semibold'>hotel hyat</h2>
                    <a href="whg3e" className='bg-red-400 text-gray-50 p-3 rounded hover:bg-red-500'>Reserve Room</a>
                </div>
                <h4 className='font-medium'>hotel location</h4>
                <p className='my-3'>description</p>

                <div className="flex gap-4 flex-wrap mt-6">
                                    {/* {hotel?.specification?.map((spec) => ( */}
                                        <div className="py-2 px-3 bg-gray-100 rounded-lg">
                                            <AddIcon className="mr-2" />
                                            <span>spec</span>
                                        </div>
                                        </div>
            </div>

            <div id='rooms' className='mx-4 md:mx-0 -mt-4 mb-8 md:w-9/12'>
                <span className='text-2xl mx-auto w-52 pb-2 block font-medium text-center border-b-2 border-gray-400'>Choose room</span>

            </div>


        </div>
    </div>
  )
}

export default Hotel