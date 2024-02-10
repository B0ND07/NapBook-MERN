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
axios.defaults.withCredentials = true;

export const getFeaturedHotels = () => async (dispatch) => {
  try {
    dispatch(setLoading(true))
    const { data } = await axios.get("http://localhost:5006/api/hotels/");
    if(data){
    const popular = data.slice(0, 4);
    dispatch(setHotels(popular));
  
  }
  dispatch(setLoading(false))
  } catch (err) {
    // dispatch(setError(err.response.data.message));
    // console.log(err)
  }
};

export const getHotelAction = (id) => async (dispatch) => {
  try {
    dispatch(setLoading(true))
    const { data } = await axios.get(`http://localhost:5006/api/hotels/${id}`);

    dispatch(setHotel(data));
    dispatch(setLoading(false))
  } catch (err) {
    dispatch(setError(err.response.data.message));
  }
};

export const getSearchAction = (query) => async (dispatch) => {
  try {
    dispatch(setLoading(true))
    const { data } = await axios.get(
      `http://localhost:5006/api/hotels/search/${query}`
    );

    dispatch(SetSearch(data));
    dispatch(setLoading(false))
    dispatch(setHasSearched(true));
  } catch (err) {
    // dispatch(setError(err.response.data.message));
  }
};

export const getAllHotelsAction = () => async (dispatch) => {
  try {
    dispatch(setLoading(true))
    const { data } = await axios.get("http://localhost:5006/api/hotels/");
    dispatch(setAllHotels(data));
    dispatch(setLoading(false))
  } catch (err) {
    dispatch(setError(err.response.data.message));
  }
};

export const updateHotelAction = (id, url) => async (dispatch) => {
  try {
    await axios.put(`http://localhost:5006/api/hotels/${id}`, url, {
      headers: { "Content-Type": "application/json" },
    });
    dispatch(setIsHotelUpdated(true));
  } catch (err) {
    dispatch(setError(err.response.data.message));
  }
};

export const deleteHotelAction = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:5006/api/hotels/${id}`);
  } catch (err) {
    dispatch(setError(err.response.data.message));
  }
};

export const createHotelAction = (url) => async (dispatch) => {
  try {
    await axios.post(`http://localhost:5006/api/hotels/`, url, {
      headers: { "Content-Type": "application/json" },
    });
    dispatch(setIsHotelUpdated(true));
  } catch (err) {
    dispatch(setError(err.response.data.message));
  }
};

export const bookedHotelAction = (formData) => async (dispatch) => {
  try {
    await axios.post("http://localhost:5006/api/hotels/booked", formData);
  } catch (err) {
    dispatch(setError(err.response.data.message));
  }
};
