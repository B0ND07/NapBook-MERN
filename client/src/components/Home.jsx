import React, { useState } from "react";
import { DateRange } from "react-date-range";
import { addDays, format } from "date-fns";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import PersonIcon from "@mui/icons-material/Person";
import DateRangeIcon from "@mui/icons-material/DateRange";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Button, Modal } from "@mui/material";
import DisplayHotels from "./DisplayHotels";

const Home = () => {
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(Date.now()),
      endDate: addDays(Date.now(), 1),
      key: "selection",
    },
  ]);
  const [isDateOpen, setIsDateOpen] = useState(false);
  const [openOption, setOpenOption] = useState(false);
  const [option, setOption] = useState({
    person: 1,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOption((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? option[name] + 1 : option[name] - 1,
      };
    });
  };

  const dateRangeHanler = (item) => {
    setDateRange([item.selection]);
  };
  return (
    <>
      <div className="mx-auto px-4 md:px-10 lg:px-20 xl:px-48 mt-4">
        <h1 className="text-3xl text-grey-400">Where are you Going?</h1>
        <div className="flex flex-col md:flex-row gap-4 mt-4 mb-6">
          <div className="md:w-4/12 h-16 rounded border transition duration-200 cursor-pointer border-gray-400 flex items-center px-6 gap-4 hover:border-red-400">
            <FmdGoodIcon
              fontSize="large"
              className="rounded-full text-red-500 cursor-pointer hover:bg-neutral-200 transition duration-200 p-1 "
            />
            <input
              className=" bg-slate-50 outline-none w-[162px]"
              type="text"
              placeholder="search location"
            />
          </div>
          {/* ------------------------------------date----------------------------- */}
          <div
            open={isDateOpen}
            onClick={() => setIsDateOpen(!isDateOpen)}
            className="md:w-4/12 h-16 rounded border transition duration-200 cursor-pointer border-gray-400 flex items-center px-6 gap-4 hover:border-red-400"
          >
            <DateRangeIcon className="text-red-400 text-xl" />
            <div className="flex flex-col">
              <span>Dates</span>
              <span className="text-gray-600 text-sm">
                {format(dateRange[0].startDate, "MMM dd")} -{" "}
                {format(dateRange[0].endDate, "MMM dd")}
              </span>
            </div>
          </div>
          <Modal
            disableAutoFocus={true}
            open={isDateOpen}
            onClose={() => setIsDateOpen(false)}
            className="flex justify-center items-center mb-20"
          >
            <div className="flex flex-col bg-white pb-8 rounded-md">
              <DateRange
                onChange={dateRangeHanler}
                showSelectionPreview={true}
                moveRangeOnFirstSelection={false}
                ranges={dateRange}
                className="sm:px-12 sm:py-4 rounded-md"
                minDate={new Date(Date.now())}
              />
              <div className="flex justify-center">
                <Button
                  variant="contained"
                  className="w-72 h-12 "
                  onClick={() => setIsDateOpen(false)}
                >
                  Done
                </Button>
              </div>
            </div>
          </Modal>

          <div className="md:w-4/12 h-16 rounded border transition duration-200 cursor-pointer border-gray-400 flex items-center  gap-4 px-2 hover:border-red-400 text-gray-600">
            <PersonIcon className="text-red-400 text-xl" />
            <span onClick={()=>setOpenOption(!openOption)}>{option.person} Person {option.room} Room</span>
            {openOption && 
            <div className="w-[94%] md:w-[23%] absolute md:top-[238px] bg-red-400 shadow text-gray rounded top-[415px] ">
              <div className=" flex gap-10 mx-2 ">
                <span>Person</span>
                <div className="flex items-center gap-5">
                  <button disabled={option.person<=1} onClick={() => handleOption("person", "d")}>-</button>
                  <span>{option.person}</span>
                  <button onClick={() => handleOption("person", "i")}>+</button>
                </div>
              </div>
              <div className=" flex gap-10 mx-2">
                <span>Room</span>
                <div className=" flex items-center gap-5 mx-2">
                  <button disabled={option.room<=1}
                    className=""
                    onClick={() => handleOption("room", "d")}
                  >
                    -
                  </button>
                  <span>{option.room}</span>
                  <button  onClick={() => handleOption("room", "i")}>+</button>
                </div>
              </div>
            </div>}
          </div>
          <div className="flex justify-center mt-3 md:mt-0 items-center">
            <button className=" bg-red-500 rounded font-medium hover:bg-red-600 w-72 !text-orange-50 md:w-24 lg:w-32 md:h-full h-12 ">
              search
            </button>
          </div>
        </div>
        <DisplayHotels/>
      </div>
    </>
  );
};

export default Home;
