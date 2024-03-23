import axios from "axios";
import { setError } from "../slices/userSlice";
import {
  SetSearch,
  setAllHotels,
  setHasSearched,
  setHotel,
  setHotels,
  setIsHotelUpdated,
  setLoading,
} from "../slices/hotelSlice";
import toast from "react-hot-toast";
axios.defaults.withCredentials = true;

export const getFeaturedHotels = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const { data } = await axios.get("/api/hotels/");
    if (data) {
      const popular = data.slice(0, 4);
      dispatch(setHotels(popular));
    }
    dispatch(setLoading(false));
  } catch (err) {
    // dispatch(setError(err.response.data.message));
    // console.log(err)
  }
};

export const getHotelAction = (id) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const { data } = await axios.get(`/api/hotels/${id}`);

    dispatch(setHotel(data));
    dispatch(setLoading(false));
  } catch (err) {
    dispatch(setError(err.response.data.message));
  }
};

export const getSearchAction = (query) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const { data } = await axios.get(`/api/hotels/search/${query}`);

    dispatch(SetSearch(data));
    dispatch(setLoading(false));
    dispatch(setHasSearched(true));
  } catch (err) {
    // dispatch(setError(err.response.data.message));
  }
};

export const getAllHotelsAction = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const { data } = await axios.get("/api/hotels/");
    dispatch(setAllHotels(data));
    dispatch(setLoading(false));
  } catch (err) {
    dispatch(setError(err.response.data.message));
  }
};

export const updateHotelAction = (id, formData) => async (dispatch) => {
  try {
    toast.loading("updating", { id: "hotel" });
    await axios.put(`/api/hotels/${id}`, formData, {
      headers: { "Content-Type": "application/json" },
    });
    dispatch(setIsHotelUpdated(true));
    toast.success("success", { id: "hotel" });
  } catch (err) {
    dispatch(setError(err.response.data.message));
    toast.error("error", { id: "hotel" });
  }
};

export const deleteHotelAction = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/hotels/${id}`);
  } catch (err) {
    dispatch(setError(err.response.data.message));
  }
};

export const createHotelAction = (url) => async (dispatch) => {
  try {
    toast.loading("updating", { id: "hotel" });
    await axios.post(`/api/hotels/`, url, {
      headers: { "Content-Type": "application/json" },
    });
    dispatch(setIsHotelUpdated(true));
    toast.success("success", { id: "hotel" });
  } catch (err) {
    dispatch(setError(err.response.data.message));
    toast.error("error", { id: "hotel" });
  }
};

// export const bookedHotelAction = (formData) => async (dispatch) => {
//   try {
//     await axios.post("/api/hotels/booked", formData);
//   } catch (err) {
//     dispatch(setError(err.response.data.message));
//   }
// };
