import React from "react";
import { Link } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AddIcon from "@mui/icons-material/Add";
import Rating from '@mui/material/Rating';

const DisplayHotels = ({ hotel }) => {
  return (
    <div>
      <div className="md:min-h-60 gap-8 bg-white border rounded-2xl my-4 md:items-center">
        <div className="md:w-2/6 h-full">
          <div className="h-60 w-[100%] md:w-[300%] md:-mr-[21.33px] ">
            <img
              src={hotel.photos}
              alt="Not available"
              className="w-[108vw] h-full rounded-t-2xl"
            />
          </div>
        </div>
        <div className="md:w-4/6 mx-4 md:my-6 mb-6">
          <Link
            to={`/hotel/${hotel._id}`}
            className="text-xl capitalize font-semibold"
          >
            {hotel.name}
          </Link>
          <h4 className="font-medium">jt</h4>
     
      <Rating name="read-only" value={5} readOnly /><br/>

          {/* <p className="my-3">{hotel.description}</p> */}
          <span className="font-medium text-gray-700">
            <LocationOnIcon className="mb-1" />
            {hotel.city}
          </span>
          <div className="flex flex-row gap-4  mt-4 pb-6">
            {hotel.specification?.map((spec, index) => (
              <div key={index} className="py-2 px-3 bg-gray-100 rounded-lg">
                <AddIcon className="mr-2" />
                <span>{spec}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayHotels;
