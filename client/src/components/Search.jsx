import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DisplayHotels from "./DisplayHotels";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Link } from "react-router-dom";
import { setHasSearched } from "../redux/slices/hotelSlice";

function Search() {
  const { searchHotel } = useSelector((state) => state.hotelState);
  const dispatch = useDispatch();
  const handleBack = () => {
    dispatch(setHasSearched(false));
   
  };
  return (
    <div className="w-full">
      <Link to="/" className="text-blue-500 hover:text-blue-700">
        <ArrowBackIosNewIcon fontSize="small" />{" "}
        <span onClick={handleBack}>Home</span>
      </Link>
      <h3 className="my-2">Search Results:</h3>

      <div className="w-full flex flex-wrap">
        {Array.isArray(searchHotel) && searchHotel.length > 0 ? (
          searchHotel.map((hotel) => (
            <div key={hotel._id} className="w-full md:w-1/2 p-2">
              <DisplayHotels key={hotel._id} hotel={hotel} />
            </div>
          ))
        ) : (
          <div className="w-full flex flex-col justify-center items-center h-[50vh] font-medium text-xl md:text-2xl">
            <p className="">No hotels found for the specified query.</p>
            <br></br>
            <button className="w-1/2 shrink-0 rounded-lg bg-red-500 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 hover:bg-red-600 sm:w-auto">
              <Link to="/">Take me home</Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
