import axios from "axios";
import { setError } from "../slices/userSlice";
import { setHotels } from "../slices/hotelSlice";
axios.defaults.withCredentials = true;

export const getFeturedHotels = () => async (dispatch) => {
    try {
       
        const { data } = await axios.get(`/api/v1/hotels`);
        dispatch(setHotels(data.hotels));
       
    } catch (err) {
        dispatch(setError(err.response.data.message));
    }
}