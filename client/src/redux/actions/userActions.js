import axios from "axios";
import { setError, setUser } from "../slices/userSlice";


export const loginAction = (formData) => async (dispatch) => {

    try {
        const { data } = await axios.post('http://localhost:5006/api/auth/login', formData);
        if (data.details) {
        dispatch(setUser(data.details));
        dispatch(setError(undefined));
    } else {
        dispatch(setError('Incorrect username or password'));
      }
        
    } catch (err) {
        console.log(err)
    }
}

export const registerAction = (formData) => async (dispatch) => {
    try {
        const { data } = await axios.post('http://localhost:5006/api/auth/register', formData);
        console.log(data)
         dispatch(setUser(data.details));
    } catch (err) {
        console.log(err)
    }
}

