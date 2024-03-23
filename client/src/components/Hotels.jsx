import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DisplayHotels from "./DisplayHotels";
import Loader from "./Loader";
import { getAllHotelsAction } from "../redux/actions/hotelActions";

const Hotels = () => {
  const { allhotels, isLoading } = useSelector((state) => state.hotelState);
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      dispatch(getAllHotelsAction());
    } catch (err) {
      console.error("Error fetching featured hotels:", err.message);
    }
  }, []);
 
  return (
    <div className="mx-auto px-4 md:px-10 lg:px-20 xl:px-48 mt-4">
      <h1 className="text-4xl font-[500] text-red-500 mt-4">All Hotels</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {allhotels && (
            <div className="flex flex-wrap">
              {allhotels.map((hotel) => (
                <div key={hotel._id} className="w-full md:w-1/2 p-2">
                  <DisplayHotels hotel={hotel} />
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Hotels;
