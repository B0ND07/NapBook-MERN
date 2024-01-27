import { createSlice } from '@reduxjs/toolkit';

const initialState={
    user:undefined,
    isAuthenticated: false,

    error: undefined,
    success: undefined,
    bookings: undefined
}

const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        setUser: (state,action)=>{
            state.user=action.payload;
            state.isAuthenticated = true;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        clearError: (state, action) => {
            state.error = undefined;
        },
        logoutUser: (state, action) => {
            state.user = undefined;
            state.isAuthenticated = false;
        },
        setBooking: (state, action) => {
            state.bookings = action.payload;
        }
       
    }
})
export const { setUser,setError,clearError,logoutUser,setBooking } = userSlice.actions;
export default userSlice.reducer;