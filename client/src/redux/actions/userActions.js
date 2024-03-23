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
import toast from "react-hot-toast";

axios.defaults.withCredentials = true;

//login
export const loginAction = (formData) => async (dispatch) => {
  try {
    toast.loading("signing in", { id: "login" });
    const { data } = await axios.post("/api/auth/login", formData);

    if (data.user) {
      dispatch(setLoading(true));
      dispatch(setUser(data.user));
      dispatch(clearError());
      dispatch(setLoading(false));
      toast.success("signed in success", { id: "login" });
    } else {
      dispatch(setError("Incorrect username or password"));
    }
  } catch (err) {
    toast.error("signing error", { id: "login" });
    // console.log(err);
  }
};
//register
export const registerAction = (formData) => async (dispatch) => {
  try {
    toast.loading("signing up", { id: "login" });
    dispatch(setLoading(true));
    const { data } = await axios.post("/api/auth/register", formData);
    if (data.user) {
      dispatch(setUser(data.user));
      dispatch(setLoading(false));
      toast.success("signup success", { id: "login" });
    }else{
      dispatch(setError("User already exists"));
    }
  } catch (err) {
    toast.error("signing error", { id: "login" });
  }
};

//gauth
export const GloginAction = (formData) => async (dispatch) => {
  try {
    const { data } = await axios.post("/api/auth/gauth", formData);

    if (data.user) {
      dispatch(setLoading(true));
      dispatch(setUser(data.user));
      dispatch(clearError());
      dispatch(setLoading(false));
      toast.success("signed in success", { id: "login" });
    } else {
      dispatch(setError("Incorrect username or password"));
    }
  } catch (err) {
    toast.error("signing error", { id: "login" });
    // console.log(err);
  }
};

//logout
export const logoutAction = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    await axios.post("/api/auth/logout");

    dispatch(logoutUser());
    dispatch(setLoading(false));
    toast.success("logged out", { id: "login" });
  } catch (err) {
    console.log(err);
  }
};

export const getUserAction = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/auth/me");

    if (data.user) {
      dispatch(setUser(data.user));
    }
  } catch (err) {
    // console.log(err);
  }
};

// export const newBookingAction = (formData) => async (dispatch) => {
//   try{
//   await axios.post(
//     `/api/bookings/book`,
//     formData
//   );
// } catch (err) {
//   dispatch(setError(err.response.data.message));
// }

// };

export const getBookingsAction = (username) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const { data } = await axios.get(`/api/bookings/${username}`);
    const sortedData = data.bookings.sort((a, b) => {
      const dateAInMillis = new Date(a.createdAt).getTime();
      const dateBInMillis = new Date(b.createdAt).getTime();
      return dateBInMillis - dateAInMillis;
    });

    dispatch(setBooking(sortedData));
    dispatch(setLoading(false));
  } catch (err) {
    dispatch(setError(err.response.data.message));
  }
};

export const getAllUsersAction = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const { data } = await axios.get("/api/users/");
    dispatch(setUsers(data));
    dispatch(setLoading(false));
  } catch (err) {
    dispatch(setError(err.response.data.message));
  }
};

export const updateUserRoleAction = (id, role) => async (dispatch) => {
  try {
    await axios.put(`/api/users/${id}`, {
      isAdmin: role,
    });
  } catch (err) {
    dispatch(setError(err.response.data.message));
  }
};

export const getAllBookingsAction = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));

    const { data } = await axios.get("/api/bookings/allbookings/booked");

    const sortedData = data.bookings.sort((a, b) => {
      const dateAInMillis = new Date(a.createdAt).getTime();
      const dateBInMillis = new Date(b.createdAt).getTime();
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
    try {
      const { data } = await axios.put(
        `/api/users/updateprofile/${oldusername}`,
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

export const deleteUserAction = (username) => async (dispatch) => {
  try {
    await axios.delete(`/api/users/delete/${username}`);
  } catch (err) {
    dispatch(setError(err.response.data.message));
  }
};
