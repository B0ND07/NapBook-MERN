import axios from "axios";
import { setUser } from "../slices/userSlice";

export const loginAction = (formData) => async (dispatch) => {
    try {
        const { data } = await axios.post('http://localhost:5006/api/auth/login', formData, { headers: { "Content-Type": "application/json" } });
    
        dispatch(setUser(data.details));
    } catch (err) {
        console.log(err)
    }
}