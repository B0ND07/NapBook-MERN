import axios from "axios";
import {
  clearError,
  logoutUser,
  setAllBookings,
  setBooking,
  setError,
  setUser,
  setUsers,
} from "../slices/userSlice";



axios.defaults.withCredentials = true;

//login
export const loginAction = (formData) => async (dispatch) => {

  try {
    const { data } = await axios.post(
      "http://localhost:5006/api/auth/login",
      formData
    );
    
    if (data.user) {

      dispatch(setUser(data.user));
      dispatch(clearError());

    } else {
      dispatch(setError("Incorrect username or password"));
    }
  } catch (err) {
    console.log(err);
  }
};
//register
export const registerAction = (formData) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      "http://localhost:5006/api/auth/register",
      formData
    );
 
    dispatch(setUser(data.user));
  } catch (err) {}
};
//logout
export const logoutAction = () => async (dispatch) => {
  try {
    await axios.get("http://localhost:5006/api/auth/logout");

    dispatch(logoutUser());
  } catch (err) {
    console.log(err);
  }
};

export const getUserAction = () => async (dispatch) => {
  try {
    const { data } = await axios.get("http://localhost:5006/api/auth/me");
   
    if(data.user){
    dispatch(setUser(data.user));}
  } catch (err) {
    console.log(err);
  }
};

export const newBookingAction = (formData) => async () => {
  const { data } = await axios.post(
    `http://localhost:5006/api/bookings/book`,
    formData
  );
  
};

export const getBookingsAction = (username) => async (dispatch) => {
  const { data } = await axios.get(
    `http://localhost:5006/api/bookings/${username}`
  );

  dispatch(setBooking(data.bookings));
 
};

export const getAllUsersAction = () => async (dispatch) => {
  const { data } = await axios.get("http://localhost:5006/api/users/");
  dispatch(setUsers(data));
  
};

export const updateUserRoleAction = (id, role) => async () => {
  const { data } = await axios.put(`http://localhost:5006/api/users/${id}`, {
    isAdmin: role,
  });
  
};

export const getAllBookingsAction = () => async (dispatch) => {
  const { data } = await axios.get(
    "http://localhost:5006/api/bookings/allbookings/booked"
  );

  dispatch(setAllBookings(data.bookings));
};

export const updateUserAction =
  (oldusername, username, email) => async (dispatch) => {
    const { data } = await axios.put(
      `http://localhost:5006/api/users/updateprofile/${oldusername}`,
      {
        username: username,
        email: email,
      }
    );
    
    dispatch(setUser(data.user));
  };

  export const deleteUserAction =
  (username) => async (dispatch) => {
    const { data } = await axios.delete(
      `http://localhost:5006/api/users/delete/${username}`,
      
    );
   
  };
