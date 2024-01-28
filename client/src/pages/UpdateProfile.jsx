import { Link } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useSelector } from "react-redux";
import { useState } from "react";

const UpdateProfile = () => {
  return (
    <>
      <div title="Account Setting" />

      <div className="mx-auto px-4 md:px-10 lg:px-20 xl:px-48 mt-4 flex flex-col md:flex-row justify-between pb-6 ">
        <div className="w-full h-full mb-6 flex flex-col border-r border-solid border-gray-200">
          <Link to="/account" className="text-blue-500 hover:text-blue-700">
            <ArrowBackIosNewIcon fontSize="small" /> <span>Go Back</span>
          </Link>
          <h2 className="text-2xl font-semibold my-5 text-gray-800 ml-3">
            Update Your Account Settings
          </h2>
          <p className=" font-semibold text-gray-700 mb-1 ml-5">
            Name: <input type="text" />
          </p>

          <p className=" font-semibold text-gray-700 ml-5">
            Email: <input type="text" />
          </p>
          <br></br>
          <div className="mx-5">
            <button className="text-gray-50 bg-red-500 hover:text-white-50 hover:bg-red-600 border-solid border py-1 px-2 rounded-lg w-18 text-center transition duration-200 box-border font-medium">
              Update
            </button>
          </div>
          <hr className="mt-6 border-t border-dashed border-gray-300" />
          <div className="h-12 flex items-center justify-between px-6 border-b border-solid border-gray-400">
            <button className=" text-blue-600">Change Password</button>
            <ArrowForwardIosIcon fontSize="small" className="text-blue-600" />
          </div>
          <div className="h-12 flex items-center justify-between px-6 border-b border-solid border-gray-400">
            <button className=" text-blue-600">Delete Account</button>
            <ArrowForwardIosIcon fontSize="small" className="text-blue-600" />
          </div>
        </div>
      </div>
    </>
  );
};
export default UpdateProfile;
