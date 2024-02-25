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
import { setLoading } from "../slices/hotelSlice";



axios.defaults.withCredentials = true;

//login
export const loginAction = (formData) => async (dispatch) => {

  try {
    
    const { data } = await axios.post(
      "http://localhost:5006/api/auth/login",
      formData
    );
    
    if (data.user) {
      dispatch(setLoading(true))
      dispatch(setUser(data.user));
      dispatch(clearError());
      dispatch(setLoading(false))

    } else {
      dispatch(setError("Incorrect username or password"));
    }
  } catch (err) {
    // console.log(err);
  }
};
//register
export const registerAction = (formData) => async (dispatch) => {
  try {
    dispatch(setLoading(true))
    const { data } = await axios.post(
      "http://localhost:5006/api/auth/register",
      formData
    );
      if(data.user){
    dispatch(setUser(data.user));
    dispatch(setLoading(false))}
  } catch (err) {
    dispatch(setError("User already exists"));
  }
};

//gauth
export const GloginAction = (formData) => async (dispatch) => {

  try {
    
    const { data } = await axios.post(
      "http://localhost:5006/api/auth/gauth",
      formData
    );
    
    if (data.user) {
      dispatch(setLoading(true))
      dispatch(setUser(data.user));
      dispatch(clearError());
      dispatch(setLoading(false))

    } else {
      dispatch(setError("Incorrect username or password"));
    }
  } catch (err) {
    // console.log(err);
  }
};


//logout
export const logoutAction = () => async (dispatch) => {
  try {
    dispatch(setLoading(true))
    await axios.post("http://localhost:5006/api/auth/logout");

    dispatch(logoutUser());
    dispatch(setLoading(false))
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
    // console.log(err);
  }
};

// export const newBookingAction = (formData) => async (dispatch) => {
//   try{
//   await axios.post(
//     `http://localhost:5006/api/bookings/book`,
//     formData
//   );
// } catch (err) {
//   dispatch(setError(err.response.data.message));
// }
  
// };

export const getBookingsAction = (username) => async (dispatch) => {
  try{
    dispatch(setLoading(true))
  const { data } = await axios.get(
    `http://localhost:5006/api/bookings/${username}`
  );
  const sortedData = data.bookings.sort((a, b) => {
    const dateAInMillis = (new Date(a.createdAt)).getTime();
    const dateBInMillis = (new Date(b.createdAt)).getTime();
    return dateBInMillis - dateAInMillis;
  });

  dispatch(setBooking(sortedData));
  dispatch(setLoading(false))
} catch (err) {
  dispatch(setError(err.response.data.message));
}
 
};

export const getAllUsersAction = () => async (dispatch) => {
  try{
    dispatch(setLoading(true))
  const { data } = await axios.get("http://localhost:5006/api/users/");
  dispatch(setUsers(data));
  dispatch(setLoading(false))
} catch (err) {
  dispatch(setError(err.response.data.message));
}
  
};

export const updateUserRoleAction = (id, role) => async (dispatch) => {
  try{
  await axios.put(`http://localhost:5006/api/users/${id}`, {
    isAdmin: role,
  });
} catch (err) {
  dispatch(setError(err.response.data.message));
}
  
};

export const getAllBookingsAction = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));

    const { data } = await axios.get("http://localhost:5006/api/bookings/allbookings/booked");

    
    const sortedData = data.bookings.sort((a, b) => {
      const dateAInMillis = (new Date(a.createdAt)).getTime();
      const dateBInMillis = (new Date(b.createdAt)).getTime();
      return dateBInMillis - dateAInMillis;
    });

   
    dispatch(setAllBookings(sortedData));
    dispatch(setLoading(false));
  } catch (err) {
    dispatch(setError(err.response.data.message));
  }
};

export const updateUserAction =
  (oldusername, username, email) => async (dispatch) => {
    try{
    const { data } = await axios.put(
      `http://localhost:5006/api/users/updateprofile/${oldusername}`,
      {
        username: username,
        email: email,
      }
    );
    
    dispatch(setUser(data.user));
  } catch (err) {
    dispatch(setError(err.response.data.message));
  }
  };

  export const deleteUserAction =
  (username) => async (dispatch) => {
    try{
    await axios.delete(
      `http://localhost:5006/api/users/delete/${username}`,
      
    );
  } catch (err) {
    dispatch(setError(err.response.data.message));
  }
   
  };
