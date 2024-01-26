import axios from "axios";
import { setError } from "../slices/userSlice";
import { setHotel, setHotels } from "../slices/hotelSlice";
axios.defaults.withCredentials = true;

export const getFeturedHotels = () => async (dispatch) => {
    try {
       
        const { data } = await axios.get('http://localhost:5006/api/hotels/');
        console.log(data)
        dispatch(setHotels(data));
       
    } catch (err) {
        dispatch(setError(err.response.data.message));
    }
}

export const getHotelAction = (id) => async (dispatch) => {
    try {
      
        const { data } = await axios.get(`http://localhost:5006/api/hotels/${id}`);
            console.log(data.name)
        dispatch(setHotel(data));
      
    } catch (err) {
       
        dispatch(setError(err.response.data.message));
    }
}
