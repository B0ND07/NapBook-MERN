import React, { useEffect, useState } from "react";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import DisplayHotels from "./DisplayHotels";
import { useDispatch, useSelector } from "react-redux";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import {
  getFeturedHotels,
  getSearchAction,
} from "../redux/actions/hotelActions";
import { Link } from "react-router-dom";
import { setHasSearched } from "../redux/slices/hotelSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { hotels, searchHotel, hasSearched } = useSelector(
    (state) => state.hotelState
  );
  const [query, setQuery] = useState("");
  useEffect(() => {
    dispatch(getFeturedHotels(query));
  }, [dispatch]);

  const handleSearch = () => {
    if (query) {
      dispatch(getSearchAction(query));
    }
  };
  const handleBack = () => {
    dispatch(setHasSearched(false));
    setQuery("");
  };

  return (
    <>
      <div className="mx-auto px-4 md:px-10 lg:px-20 xl:px-48 mt-4">
        <h1 className="text-3xl text-grey-400">Where are you Going?</h1>
        <div className="flex flex-col md:flex-row gap-4 mt-4 mb-6">
          <div className="md:w-full h-16 rounded border transition duration-200 cursor-pointer border-gray-400 flex items-center px-6 gap-4 hover:border-red-400">
            <FmdGoodIcon
              fontSize="large"
              className="rounded-full text-red-500 cursor-pointer hover:bg-neutral-200 transition duration-200 p-1 "
            />
            <input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              className=" bg-slate-50 outline-none w-full h-full"
              type="text"
              placeholder="search location"
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
        {hasSearched ? (
          <>
            <Link to="/" className="text-blue-500 hover:text-blue-700">
              <ArrowBackIosNewIcon fontSize="small" />{" "}
              <span onClick={handleBack}>Home</span>
            </Link>
            <h3 className="my-2">Search Results for {query}:</h3>
            {Array.isArray(searchHotel) && searchHotel.length > 0 ? (
              searchHotel.map((hotel) => (
                <DisplayHotels key={hotel._id} hotel={hotel} />
              ))
            ) : (
              <p className="flex justify-center items-center h-[50vh] font-medium text-xl md:text-2xl">
                No hotels found for the specified query.
              </p>
            )}
          </>
        ) : (
          hotels &&
          hotels.map((hotel) => <DisplayHotels key={hotel._id} hotel={hotel} />)
        )}
      </div>
    </>
  );
};

export default Home;
