import React, { useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getHotelAction } from "../redux/actions/hotelActions";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Hotel = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { hotel } = useSelector((state) => state.hotelState);
  
  useEffect(() => {
    dispatch(getHotelAction(id));
  }, [id, dispatch]);
  const navigate = useNavigate();
  return (
    <div className="h-[89vh] bg-gray-200">
      <div className=" flex flex-col md:min-h-60 gap-8 bg-gray-200 pt-4 md:items-center pb-36">
        <div className="h-60 md:w-7/12">
          <div className="h-60 -mr-[22.34px]">
            <img
              src={hotel?.photos}
              alt=""
              className="md:w-full w-[98vw] h-full object-fill"
            />
          </div>
        </div>
        <div className="md:w-7/12 mx-4 md:my-6 mb-6">
          <div className="flex justify-between">
            <h2 className="text-xl capitalize font-semibold">{hotel?.name}</h2>
            <button
              onClick={() => navigate(`/room/${id}/book`)}
              className="bg-red-400 text-gray-50 p-3 rounded hover:bg-red-500"
            >
              Reserve
            </button>
          </div>
          <span>
          <LocationOnIcon className="mb-1" />{hotel?.city}</span>
          <p className="my-3">{hotel?.description}</p>

          <div className="flex gap-4 flex-wrap mt-6">
            {hotel?.specification?.map((spec, index) => (
              <div key={index} className="py-2 px-3 bg-gray-100 rounded-lg">
                <AddIcon className="mr-2" />
                <span>{spec}</span>
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className=" bg-gray-200 mx-auto px-4 md:px-10 lg:px-20 xl:px-48  ">
       

       {" "}
       <div className="flex gap-5 md:gap-40 justify-center w-full">
         <div className="">
           <h2 className="font-semibold text-xl">About Us</h2>
           <ul>
             <li>Our Company</li>
             <li>Culture and Values</li>
             <li>Contact Us</li>
             <li>Delivery</li>
           </ul>
         </div>
         <div className="">
           <h2 className="font-semibold text-xl">About Us</h2>
           <ul>
             <li>Our Company</li>
             <li>Culture and Values</li>
             <li>Contact Us</li>
             <li>Delivery</li>
           </ul>
         </div>
         <div className="">
           <h2 className="font-semibold text-xl">About Us</h2>
           <ul>
             <li>Our Company</li>
             <li>Culture and Values</li>
             <li>Contact Us</li>
             <li>Delivery</li>
           </ul>
         </div>
       </div>
       <div
         className="flex justify-center gap-15 md:gap-20 my-6"
        
       >
         <p>Privacy Notice</p>
         <p>Terms of use</p>
         <p>CA Supply Chain</p>
         <p>Cookie Preference</p>
       </div>
       <hr />
       <br></br>
       <p className="text-center pb-6"
       >
         © 2024 NapBook Company. All rights reserved.
       </p>
     </div>
    </div>
  );
};

export default Hotel;
