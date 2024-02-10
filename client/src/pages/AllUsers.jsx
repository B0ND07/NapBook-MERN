import { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableFooter,
  IconButton,
  Tooltip,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import AdminDashboard from "./AdminDashboard";
import {
  deleteUserAction,
  getAllUsersAction,
  updateUserRoleAction,
} from "../redux/actions/userActions";
import Loader from "../components/Loader";

const AllUsers = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.userState);
  const { isLoading } = useSelector((state) => state.hotelState);
  const [open, setOpen] = useState(false);
  const [role, setRole] = useState("");
  const [userRef, setUserRef] = useState(undefined);

  useEffect(() => {
    dispatch(getAllUsersAction());
  }, [dispatch]);

  const editHandler = () => {
    dispatch(updateUserRoleAction(userRef._id, role));
    dispatch(getAllUsersAction());
    setOpen(!open);
  };
  const handleDelete = async (e) => {
  
    dispatch(deleteUserAction(userRef?.username));
    dispatch(getAllUsersAction());
  };

  return (
    <Fragment>
      <div title="All Users" />
      <div className="flex">
        <AdminDashboard />
        <Fragment>
        
          <div className="w-[80%] sm:w-[60%] md:w-[70%] mx-auto mt-3">
            <h2 className="text-2xl font-medium text-center my-8">All Users</h2>
            <TableContainer component={Paper}>
              <Table className="min-w-[700px]">
                <TableHead>
                  <TableRow className="bg-red-300">
                    <TableCell align="center">Id</TableCell>
                    <TableCell align="center">Name</TableCell>
                    <TableCell align="center">Email</TableCell>
                    <TableCell align="center">Admin Access</TableCell>
                    <TableCell align="center">Delete</TableCell>
                  </TableRow>
                </TableHead>
                {isLoading?<Loader/>:
                <TableBody>
                  {Array.isArray(users) &&
                    users?.map((user) => (
                      <TableRow key={user._id} style={{ height: 72.8 }}>
                        <TableCell align="center">{user._id}</TableCell>
                        <TableCell align="center">{user.username}</TableCell>
                        <TableCell align="center">{user.email}</TableCell>
                        <TableCell align="center">
                          {role || user.isAdmin.toString()}
                          <Tooltip placement="top" className="!ml-2">
                            <IconButton
                              onClick={() => {
                                setOpen(!open);
                                setRole(user.isAdmin.toString());
                                setUserRef(user);
                              }}
                              className="disabled:text-gray-600"
                            >
                              <EditIcon fontSize="medium" />
                            </IconButton>
                          </Tooltip>
                        </TableCell>
                        <TableCell align="center">
                          <Button onClick={(e)=>{setUserRef(user);handleDelete()
                          }}>Remove</Button>

                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>}
                <TableFooter>
                  <TableRow></TableRow>
                </TableFooter>
              </Table>
            </TableContainer>

            {/* dialog */}

            <Dialog open={open}>
              <div className="p-5">
                <DialogTitle className="text-center">
                  Change User's Role
                </DialogTitle>
                <DialogContent className="m-4 !overflow-visible">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Role</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={role}
                      label="Role"
                      onChange={(e) => setRole(e.target.value)}
                    >
                      <MenuItem value="false">False</MenuItem>
                      <MenuItem value="true">True</MenuItem>
                    </Select>
                  </FormControl>
                </DialogContent>
                <DialogActions className="mt-4">
                  <button
                    onClick={() => setOpen(!open)}
                    className="bg-red-400 hover:bg-red-500 py-2 rounded-lg w-24 text-center text-neutral-50  transition duration-200 font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    disabled={role === userRef?.role ? true : false}
                    onClick={editHandler}
                    className=" border-red-400 text-red-400 hover:text-red-500 hover:border-red-500 hover:bg-red-200 border-solid border py-2 rounded-lg w-24 text-center transition duration-200 box-border"
                  >
                    Update
                  </button>
                </DialogActions>
              </div>
            </Dialog>
          </div>
        </Fragment>
      </div>
    </Fragment>
  );
};
export default AllUsers;
