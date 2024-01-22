import React, { useEffect, useState } from "react";
import axios from "axios";

const DisplayHotels = () => {

  const [data, setData] = useState([])
  
  const fetchApi=async()=>{
  const res = await axios.get("http://localhost:5006/api/hotels/");
  console.log(res.data)
  setData(res.data)
  }
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className=" bg-gray-200">
      {data.map((display)=>(
      <div className="ml-8 flex flex-wrap gap-20 rounded-md my-4 py-8 md:items-center w-full">
        <div className=" md:w-1/5">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
            alt=""
            className="w-full h-full object-cover"
          />
          <span>{display.name}</span><br></br>
          <span>Madrid</span>
          <span>Starting from $120</span>
          <div>
            <button>8.9</button>
            <span>Excellent</span>
          </div>
        </div>
      </div>))}
    </div>
  );
};

export default DisplayHotels;
