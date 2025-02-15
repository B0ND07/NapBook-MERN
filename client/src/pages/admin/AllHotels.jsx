import AdminDashboard from "./AdminDashboard";
import { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import LaunchIcon from "@mui/icons-material/Launch";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  DialogContentText,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  deleteHotelAction,
  getAllHotelsAction,
} from "../../redux/actions/hotelActions";
import { Link } from "react-router-dom";
import Loader from "../../components/app/Loader";

const AllHotels = () => {
  const { allHotels, isLoading } = useSelector((state) => state.hotelState);
  const dispatch = useDispatch();
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [hotelRef, setHotelRef] = useState(undefined);

  useEffect(() => {
    dispatch(getAllHotelsAction());
  }, [dispatch]);

  const handleDelete = async (e) => {
    e.preventDefault();
    dispatch(deleteHotelAction(hotelRef._id));
    setIsDeleteOpen(!isDeleteOpen);
    dispatch(getAllHotelsAction());
  };

  return (
    <Fragment>
      <div title="All Hotels" />
      <div className="flex">
        <AdminDashboard />
        <Fragment>
          <div className="w-[80%] sm:w-[60%] md:w-[70%] mx-auto mt-3">
            <h2 className="text-2xl font-medium text-center my-8">
              All Hotels
            </h2>

            <TableContainer component={Paper}>
              <Table className="min-w-[700px]">
                <TableHead>
                  <TableRow className="bg-red-300">
                    <TableCell align="center">Id</TableCell>
                    <TableCell align="center">Name</TableCell>
                    <TableCell align="center">Rooms</TableCell>
                    <TableCell align="center">Update</TableCell>
                    <TableCell align="center">Delete</TableCell>
                    <TableCell align="center">Details</TableCell>
                  </TableRow>
                </TableHead>
                {isLoading ? (
                  <Loader />
                ) : (
                  <TableBody>
                    {allHotels?.map((hotel) => (
                      <TableRow key={hotel._id} style={{ height: 72.8 }}>
                        <TableCell align="center">{hotel._id}</TableCell>
                        <TableCell align="center">{hotel.name}</TableCell>
                        <TableCell align="center">
                          {hotel.rooms ? hotel.rooms.length : 0}
                        </TableCell>

                        <TableCell align="center">
                          <IconButton>
                            <Link to={`/admin/hotel/${hotel._id}/update`}>
                              <EditIcon />
                            </Link>
                          </IconButton>
                        </TableCell>
                        <TableCell align="center">
                          <IconButton
                            onClick={() => {
                              setIsDeleteOpen(!isDeleteOpen);
                              setHotelRef(hotel);
                            }}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </TableCell>

                        <TableCell align="center">
                          <IconButton>
                            <Link to={`/hotel/${hotel._id}`}>
                              <LaunchIcon />
                            </Link>
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                )}
              </Table>
            </TableContainer>

            <Dialog open={isDeleteOpen}>
              <DialogTitle className="text-center">Delete Hotel?</DialogTitle>
              <DialogContent className="m-8">
                <DialogContentText className="text-gray-900">
                  This will delete hotel's room and room's booking details also.
                </DialogContentText>
              </DialogContent>

              <DialogActions className="m-4">
                <button
                  onClick={() => {
                    setIsDeleteOpen(!isDeleteOpen);
                    setHotelRef(undefined);
                  }}
                  className="bg-red-400 hover:bg-red-500 py-2 rounded-lg w-24 text-center text-neutral-50  transition duration-200 font-semibold"
                >
                  Cancel
                </button>

                <button
                  className=" border-red-400 text-red-400 hover:text-red-500 hover:border-red-500 hover:bg-red-200 border-solid border py-2 rounded-lg w-24 text-center transition duration-200 box-border"
                  onClick={handleDelete}
                >
                  Delete
                </button>
              </DialogActions>
            </Dialog>
          </div>
        </Fragment>
      </div>
    </Fragment>
  );
};
export default AllHotels;
