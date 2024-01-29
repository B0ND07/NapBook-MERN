import axios from "axios";
import { setError } from "../slices/userSlice";
import { SetSearch, setAllHotels, setHasSearched, setHotel, setHotels } from "../slices/hotelSlice";
axios.defaults.withCredentials = true;

export const getFeturedHotels = () => async (dispatch) => {
    try {
       
        const { data } = await axios.get('http://localhost:5006/api/hotels/');
        console.log("hotel",data)
        dispatch(setHotels(data));
       
    } catch (err) {
        dispatch(setError(err.response.data.message));
    }
}

export const getHotelAction = (id) => async (dispatch) => {
    try {
      
        const { data } = await axios.get(`http://localhost:5006/api/hotels/${id}`);
            console.log("hotel",data)
        dispatch(setHotel(data));
      
    } catch (err) {
       
        dispatch(setError(err.response.data.message));
    }
}


export const getSearchAction = (query) => async (dispatch) => {
    try {
      
        const { data } = await axios.get(`http://localhost:5006/api/hotels/search/${query}`);
            console.log("search",data)
        dispatch(SetSearch(data));
        dispatch(setHasSearched(true));
        console.log("search",data)
      
    } catch (err) {
       
        dispatch(setError(err.response.data.message));
    }
}

export const getAllHotelsAction=()=>async(dispatch)=>{
    const {data}=await axios.get("http://localhost:5006/api/hotels/");
    dispatch(setAllHotels(data))
    console.log(data)
  
  }

  export const updateHotelAction=(id,url)=>async()=>{
    const {data}=await axios.put(`http://localhost:5006/api/hotels/${id}`,url);
    console.log(data)
  }


