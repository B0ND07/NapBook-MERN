import React from "react";

const DisplayHotels = () => {
  return (
    <div className=" bg-gray-200">
    <div className="ml-8 flex flex-wrap gap-20 rounded-md my-4 py-8 md:items-center w-full">
      <div className=" md:w-1/5">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
          alt=""
          className="w-full h-full object-cover"
        />
        <span>Aparthotel Stare Miasto</span>
        <span>Madrid</span>
        <span>Starting from $120</span>
        <div>
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="w-full  md:w-1/5">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
          className="w-full h-full object-cover"
          alt=""
        />
        <span className="">Comfort Suites Airport</span>
        <span className="">Austin</span>
        <span className="">Starting from $140</span>
        <div className="">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="w-full  md:w-1/5">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
          className="w-full h-full object-cover"
          alt=""
        />
        <span className="">Four Seasons Hotel</span>
        <span className="">Lisbon</span>
        <span className="">Starting from $99</span>
        <div className="">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="w-full  md:w-1/5">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
          className="w-full h-full object-cover"
          alt=""
        />
        <span className="">Hilton Garden Inn</span>
        <span className="">Berlin</span>
        <span className="">Starting from $105</span>
        <div className="">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="w-full md:w-1/5 ">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
          className="w-full h-full object-cover"
          alt=""
        />
        <span className="">Hilton Garden Inn</span>
        <span className="">Berlin</span>
        <span className="">Starting from $105</span>
        <div className="">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default DisplayHotels;
