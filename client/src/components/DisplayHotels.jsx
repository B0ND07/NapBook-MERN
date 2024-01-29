import React from "react";
import { Link } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddIcon from '@mui/icons-material/Add';

const DisplayHotels = ({hotel}) => {
  return (
   
<div>
  
    <div className="flex flex-col md:flex-row md:min-h-60 gap-8 bg-gray-200 rounded-md my-4 md:items-center">
            <div className="md:w-2/6 h-full">
              
                    <div className="h-60 md:-mr-[21.33px]">
                        <img src={hotel.photos} alt="Not available" className="w-full h-full object-fill" />
                    </div>
                
            </div >
            <div className="md:w-4/6 mx-4 md:my-6 mb-6">
                <Link to={`/hotel/${hotel._id}`} className="text-xl capitalize font-semibold">{hotel.name}</Link>
                <h4 className="font-medium">jt</h4>
                <p className="my-3">{hotel.description}</p>
                <span className="font-medium text-gray-700"><LocationOnIcon className="mb-1" />{hotel.city}</span>
                <div className="flex gap-4 flex-wrap mt-6">
                    {/* {hotel.specification?.map((spec) => ( */}
                        <div  className="py-2 px-3 bg-gray-100 rounded-lg">
                            <AddIcon className="mr-2" />
                            <span>dspec</span>
                        </div>
                    
                </div>
            </div>
            
        </div >
        
                
            </div>
      
        
  );
};

export default DisplayHotels;
