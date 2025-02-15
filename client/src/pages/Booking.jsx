import CloseIcon from "@mui/icons-material/Close";
import { Button, Modal } from "@mui/material";
import { DateRange } from "react-date-range";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { getHotelAction } from "../redux/actions/hotelActions";
import { addDays, format } from "date-fns";
import axios from "axios";
import toast from "react-hot-toast";

const Booking = () => {
  const id = useParams().id;
  const user = useSelector((state) => state.userState.user);
  const { hotel } = useSelector((state) => state.hotelState);
  const [room, setRoom] = useState([]);
  const [roomNo, setRoomNo] = useState();

  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dates, setDates] = useState([]);

  const [isDateOpen, setIsDateOpen] = useState(false);
  const [disableDates] = useState([]);
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getHotelAction(id));

    setName(user?.username);
    setEmail(user?.email);
  }, [user, id, dispatch]);

  useEffect(() => {
    if (hotel?.rooms) {
      setRoom(hotel.rooms);
    }
  }, [hotel]);

  useEffect(() => {
    let tempDates = [];
    let startDate = dateRange[0].startDate;
    while (startDate <= dateRange[0].endDate) {
      tempDates.push(format(new Date(startDate), "yyyy-MM-dd"));
      startDate = addDays(new Date(startDate), 1);
    }

    setDates(tempDates);
  }, [isDateOpen, dateRange]);

  const dateRangeHanler = (item) => {
    setDateRange([item.selection]);
  };

  const handleCheckout = async () => {
    if (!roomNo) {
      alert("Please select a room number before checkout");
      return;
    }
    // stripe
    // toast.loading("loading payment page", { id: "payment" });
    await axios.post(`/api/bookings/payment/${hotel._id}`, {
      user: name,
      hotelId: hotel?._id,
      city: hotel?.city,
      hotel: hotel?.name,
      roomNo: roomNo,
      dates: dateRange,
    });

    // if (res.data.session.url) {
    //   window.location.href = res.data.session.url;
    // }

    // dispatch(
    //   newBookingAction({
    //     user: name,
    //     city: hotel?.city,
    //     hotel: hotel?.name,
    //     roomno: roomno,
    //     dates: dateRange,

    //   })
    // );

    // dispatch(bookedHotelAction({
    //     hotelId: hotel?._id,
    //     roomNumber: roomno,
    // }))

    // alert("booked successfully");
    toast.success("booked successfully");
    navigate("/");
  };

  return (
    <Fragment>
      <div title="Book hotel" />
      <Fragment>
        <div className="mx-auto px-4 md:px-10 lg:px-20 xl:px-48 mt-4 flex flex-col md:flex-row  md:justify-between">
          <div className="flex flex-col items-center">
            <div className="px-1 sm:px-3">
              <h2 className="text-xl font-medium mb-4">Your details:</h2>

              <div className="ml-8 flex items-center mb-4">
                <label htmlFor="name" className="font-medium w-16">
                  Name:
                </label>

                <input
                  defaultValue={name}
                  disabled={true}
                  id="name"
                  type="text"
                  className="outline-none py-2 px-1 sm:px-2 rounded-md border border-solid border-gray-400 text-gray-700 font-mono"
                />
              </div>

              <div className="ml-8 flex items-center mb-4">
                <label htmlFor="email" className="font-medium w-16">
                  Email:
                </label>

                <input
                  defaultValue={email}
                  id="email"
                  type="email"
                  className="outline-none py-2 px-1 sm:px-2  rounded-md border border-solid border-gray-400 text-gray-700 font-mono"
                  disabled={true}
                />
              </div>

              <div className="ml-8 flex items-center mb-4">
                <label htmlFor="phone" className="font-medium w-16">
                  Mobile:
                </label>

                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Your phone number"
                  id="phone"
                  type="number"
                  className="outline-none py-2 px-1 sm:px-2 rounded-md border border-solid border-gray-400  font-mono"
                />
              </div>
            </div>

            <div className="px-1 sm:px-3">
              <h2 className="text-xl font-medium mb-4 mt-16">hotel details:</h2>

              <div className="ml-8 flex  mb-4">
                <span className="font-medium inline-block  w-28">
                  hotel Name:
                </span>

                <span className="font-mono">{hotel?.name}</span>
              </div>

              <div className="ml-8 flex mb-4">
                <span className="font-medium inline-block  w-28">Rating:</span>
                <span className="font-mono">Good</span>
              </div>

              <div className="ml-8 flex items-center mb-4">
                <span className="font-medium inline-block  w-28">
                  hotel city:
                </span>

                <span className="font-mono">{hotel?.city}</span>
              </div>

              <div className="ml-8 flex mb-4">
                <span className="font-medium inline-block w-28">
                  Restaurant:
                </span>

                <span className="font-mono"> Available</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="px-1 sm:px-3">
              <h2 className="text-xl font-medium mb-4 mt-16">
                Booking details:
              </h2>

              <div className="ml-8 flex  mb-4">
                <span className="font-medium inline-block  w-28">
                  hotel ID:
                </span>
                <span className="font-mono break-all">{hotel?._id}</span>
              </div>

              <div className="ml-8 flex mb-4">
                <span className="font-medium inline-block  w-28">Dates:</span>
                <button onClick={() => setIsDateOpen(!isDateOpen)}>
                  <textarea
                    defaultValue={dates?.toString()}
                    id="phone"
                    rows={dates.length + 1}
                    cols={10}
                    className="py-2 px-1 sm:px-2 rounded-md border border-solid border-gray-400 text-gray-700 font-mono cursor-pointer break-all resize-none hover:bg-red-200 transition duration-200"
                  />
                </button>

                <Modal
                  disableAutoFocus={true}
                  open={isDateOpen}
                  onClose={() => setIsDateOpen(false)}
                  className="flex justify-center items-center mb-20"
                >
                  <div className="flex flex-col bg-white pb-8 rounded-md">
                    <CloseIcon
                      fontSize="large"
                      onClick={() => setIsDateOpen(false)}
                      className="rounded-full text-red-500 cursor-pointer hover:bg-neutral-200 transition duration-200 p-1 m-2"
                    />

                    <DateRange
                      onChange={dateRangeHanler}
                      showSelectionPreview={true}
                      moveRangeOnFirstSelection={false}
                      ranges={dateRange}
                      className="sm:px-12 sm:py-4 rounded-md"
                      minDate={new Date(Date.now())}
                      disabledDates={disableDates}
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
              </div>

              <div className="ml-8 flex mb-4">
                <span className="font-medium inline-block w-28">Price:</span>

                <span className="font-mono">billed</span>
              </div>

              <div className="ml-8 flex mb-4">
                <label className="font-medium inline-block  w-28">
                  Select Room:
                </label>

                <select
                  value={roomNo}
                  onChange={(e) => setRoomNo(e.target.value)}
                >
                  <option className="font-mono">room no</option>
                  {room.map((roomNumber) => (
                    <option
                      className="font-mono"
                      onChange={(e) => setRoomNo(e.target.value)}
                      key={roomNumber}
                      value={roomNumber}
                    >
                      {roomNumber}
                    </option>
                  ))}
                </select>
              </div>

              <div className="ml-8 flex mb-4">
                <span className="font-medium inline-block  w-28">
                  Total Price({dates?.length}Day):
                </span>
                <span className="font-mono">billed</span>
              </div>
            </div>

            <div className="px-1 sm:px-3 py-20 flex justify-center sm:justify-end items-center ">
              <button
                onClick={handleCheckout}
                className="py-4 w-60 block text-center rounded bg-red-400 hover:bg-red-500 transition duration-200 text-zinc-50 "
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </Fragment>
    </Fragment>
  );
};
export default Booking;
