import axios from "axios";
import { setError } from "../slices/userSlice";
import {
  SetSearch,
  setAllHotels,
  setHasSearched,
  setHotel,
  setHotels,
  setIsHotelUpdated,
} from "../slices/hotelSlice";
axios.defaults.withCredentials = true;

export const getFeturedHotels = () => async (dispatch) => {
  try {
    const { data } = await axios.get("http://localhost:5006/api/hotels/");
    const popular = data.slice(0, 4);
    dispatch(setHotels(popular));
  } catch (err) {
    dispatch(setError(err.response.data.message));
  }
};

export const getHotelAction = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`http://localhost:5006/api/hotels/${id}`);

    dispatch(setHotel(data));
  } catch (err) {
    dispatch(setError(err.response.data.message));
  }
};

export const getSearchAction = (query) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `http://localhost:5006/api/hotels/search/${query}`
    );

    dispatch(SetSearch(data));
    dispatch(setHasSearched(true));
  } catch (err) {
    dispatch(setError(err.response.data.message));
  }
};

export const getAllHotelsAction = () => async (dispatch) => {
  const { data } = await axios.get("http://localhost:5006/api/hotels/");
  dispatch(setAllHotels(data));
};

export const updateHotelAction = (id, url) => async (dispatch) => {
  const { data } = await axios.put(
    `http://localhost:5006/api/hotels/${id}`,
    url,
    { headers: { "Content-Type": "application/json" } }
  );
  dispatch(setIsHotelUpdated(true));
};

export const deleteHotelAction = (id) => async () => {
  const { data } = await axios.delete(`http://localhost:5006/api/hotels/${id}`);
};

export const createHotelAction = (url) => async (dispatch) => {
  const { data } = await axios.post(`http://localhost:5006/api/hotels/`, url, {
    headers: { "Content-Type": "application/json" },
  });
  dispatch(setIsHotelUpdated(true));
};

export const bookedHotelAction=(formData)=>async()=>{
  await axios.post('http://localhost:5006/api/hotels/booked',formData);
}
