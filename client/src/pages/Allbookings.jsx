import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect } from "react";
import AdminDashboard from "./AdminDashboard";
import { useDispatch, useSelector } from "react-redux";
import { getAllBookingsAction } from "../redux/actions/userActions";
import Loader from "../components/Loader";

const Allbookings = () => {
  const bookings = useSelector((state) => state.userState.allbookings);
  const {isLoading} = useSelector((state) => state.hotelState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBookingsAction());
  }, [dispatch]);

  return (
    <div>
      <div className="flex">
        <AdminDashboard />

        <div className="w-[80%] sm:w-[60%] md:w-[70%] mx-auto mt-3">
          <h2 className="text-2xl font-medium text-center my-8">
            All Bookings
          </h2>
          <TableContainer>
            <Table className="">
              <TableHead>
                <TableRow className="bg-red-300">
                  <TableCell align="center">id</TableCell>
                  <TableCell align="center">user</TableCell>
                  <TableCell align="center">hotel name</TableCell>
                  <TableCell align="center">room no</TableCell>
                  <TableCell align="center">From</TableCell>
                  <TableCell align="center">To</TableCell>
                </TableRow>
              </TableHead>
              {isLoading?<Loader/>:
              <TableBody>
                {Array.isArray(bookings) &&
                  bookings?.map((booking) => (
                    <React.Fragment key={booking._id}>
                      {booking.dates.map((date) => (
                        <TableRow key={date._id}>
                          <TableCell align="center">{booking._id}</TableCell>
                          <TableCell align="center">{booking.user}</TableCell>
                          <TableCell align="center">{booking.hotel}</TableCell>
                          <TableCell align="center">{booking.roomno}</TableCell>
                          <TableCell align="center">
                            {new Date(date.startDate).toLocaleDateString()}
                          </TableCell>
                          <TableCell align="center">
                            {new Date(date.endDate).toLocaleDateString()}
                          </TableCell>
                        </TableRow>
                      ))}
                    </React.Fragment>
                  ))}
              </TableBody>}
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default Allbookings;
