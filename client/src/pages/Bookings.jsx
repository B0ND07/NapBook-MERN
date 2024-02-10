import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBookingsAction } from "../redux/actions/userActions";
import Loader from "../components/Loader";

const Bookings = () => {
  const user = useSelector((state) => state.userState.user);
  const {isLoading} = useSelector((state) => state.hotelState);
  const bookings = useSelector((state) => state.userState.bookings);


  const dispatch = useDispatch();
  useEffect(() => {
  
    if (user?.username) {
      dispatch(getBookingsAction(user.username));
      
    }
  }, [user, dispatch]);


  return (
 
    <div>
       
      <div className="mx-auto px-4 md:px-10 lg:px-20 xl:px-48 mt-4">
       
        <h2 className="text-2xl font-medium text-center my-8">All Bookings</h2>
        <TableContainer>
          <Table className="">
            <TableHead>
              <TableRow className="bg-red-300">
                <TableCell align="center">id</TableCell>
                <TableCell align="center">name</TableCell>
                <TableCell align="center">city</TableCell>
                <TableCell align="center">room no</TableCell>
                <TableCell align="center">From</TableCell>
                <TableCell align="center">To</TableCell>
              </TableRow>
            </TableHead>
            {isLoading?<Loader/>:
            <TableBody>
            {bookings?.map((booking) => (
    <React.Fragment key={booking._id}>
      {booking.dates.map((date) => (
        <TableRow key={date._id}>
          <TableCell align='center'>{booking._id}</TableCell>
          <TableCell align='center'>{booking.hotel}</TableCell>
          <TableCell align='center'>{booking.city}</TableCell>
          <TableCell align='center'>{booking.roomno}</TableCell>
          <TableCell align='center'>{new Date(date.startDate).toLocaleDateString()}</TableCell>
          <TableCell align='center'>{new Date(date.endDate).toLocaleDateString()}</TableCell>
        </TableRow>
      ))}
    </React.Fragment>
  ))}
            </TableBody>}
          </Table>
        </TableContainer>
      </div>

    </div>
  );
};

export default Bookings;
