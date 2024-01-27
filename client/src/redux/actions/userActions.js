import axios from "axios";
import { clearError, logoutUser, setError, setUser } from "../slices/userSlice";

axios.defaults.withCredentials = true;

//login
export const loginAction = (formData) => async (dispatch) => {

    try {
      
        const { data } = await axios.post('http://localhost:5006/api/auth/login', formData);
        console.log(data.user)
        if (data.user) {
        dispatch(setUser(data.user));
        dispatch(clearError());
     
    } else {
        dispatch(setError('Incorrect username or password'));
      }
        
    } catch (err) {
        console.log(err)
    }
}
//register
export const registerAction = (formData) => async (dispatch) => {
    try {
    
        const { data } = await axios.post('http://localhost:5006/api/auth/register', formData);
        console.log(data)
         dispatch(setUser(data.user));
     
    } catch (err) {
       
    }
}
//logout
export const logoutAction = () => async (dispatch) => {
    try {
       
        await axios.get('http://localhost:5006/api/auth/logout',);
       
        dispatch(logoutUser());
       
    } catch (err) {
        console.log(err)
       
    }
}

export const getUserAction = () => async (dispatch) => {
    try {
      
       
        const { data } = await axios.get('http://localhost:5006/api/auth/me');
        console.log(data)
        dispatch(setUser(data.user));
      
        
    } catch (err) {
        console.log(err)
    }
}

export const newBookingAction=(formData) => async () => {
   
    const { data } = await axios.post(`http://localhost:5006/api/bookings/book`,formData);
    console.log(data)
  
}



