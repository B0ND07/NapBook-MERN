import React, { useEffect, useState } from "react";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import DisplayHotels from "./DisplayHotels";
import { useDispatch, useSelector } from "react-redux";
import {
  getFeaturedHotels,
  getSearchAction,
} from "../redux/actions/hotelActions";
import {  useNavigate } from "react-router-dom";
import Loader from "./Loader";



const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { hotels,isLoading } = useSelector(
    (state) => state.hotelState
  );
  const [query, setQuery] = useState("");
  useEffect(() => {
    try {
      dispatch(getFeaturedHotels());
    } catch (err) {
      console.error('Error fetching featured hotels:', err.message);
    }
  }, [dispatch, query]);
  

  const handleSearch = () => {
    if (query) {
      dispatch(getSearchAction(query));
    }
    navigate("/search");
  };


  return (
    <div>
      <div className="mx-auto px-4 md:px-10 lg:px-20 xl:px-48 mt-4">
        <h1 className="text-4xl font-[500] text-red-500">Where are you Going?</h1>
        <div className="flex flex-col md:flex-row gap-4 mt-4 mb-6">
          <div className="md:w-full h-16 rounded border transition duration-200 cursor-pointer border-gray-400 flex items-center px-6 gap-4 hover:border-red-400 bg-white">
            <FmdGoodIcon
              fontSize="large"
              className="rounded-full text-red-500 cursor-pointer hover:bg-neutral-200 transition duration-200 p-1 "
            />
            <input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              className=" bg-white outline-none w-full h-full"
              type="text"
              placeholder="Search Location"
            />
          </div>
          <div className="flex justify-center mt-3 md:mt-0 items-center">
            <button
              onClick={handleSearch}
              className=" bg-red-500 rounded font-medium hover:bg-red-600 w-72 !text-orange-50 md:w-24 lg:w-32 md:h-full h-12 "
            >
              search
            </button>
          </div>
        </div>


        <div
          className="rounded-3xl"
          style={{
            position: "relative",
            height: "50vh",

            background:
              'url("https://res.cloudinary.com/db6qtb2bu/image/upload/f_auto,q_auto/v1/upload/amltsyvusixdbquksqi4") center/cover no-repeat',
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
              textAlign: "center",
            }}
          >
            <h1 className="text-8xl">Explore</h1>
            <hr className="border" />
            <h2 className="font-[500]">PLACES YOU'LL LOVE</h2>
            <h3 className="font-[400] mt-20 ">
              RESTAURANTS AVAILABLE | BOOK NOW
            </h3>
          </div>
        </div>

        <h1 className="text-4xl font-[500] text-red-500 mt-4">
          Popular Hotels
        </h1>
        {isLoading?<Loader/>:(<>
        {hotels && (
          <div className="flex flex-wrap">
            {hotels.map((hotel) => (
              <div key={hotel._id} className="w-full md:w-1/2 p-2">
                <DisplayHotels hotel={hotel} />
              </div>
            ))}
          </div>
        )}</>)}
      </div>
    </div>
  );
};

export default Home;
