import axios from "axios";
import { clearError, logoutUser, setError, setUser } from "../slices/userSlice";

//login
export const loginAction = (formData) => async (dispatch) => {

    try {
        const { data } = await axios.post('http://localhost:5006/api/auth/login', formData);
        if (data.details) {
        dispatch(setUser(data.details));
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
         dispatch(setUser(data.details));
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


