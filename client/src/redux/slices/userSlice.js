import { createSlice } from '@reduxjs/toolkit';

const initialState={
    user:undefined,
    isAuthenticated: false,

    error: undefined,
    success: undefined,
    bookings: undefined,
    allbookings:undefined,
    users:undefined
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
        },
        setUsers:(state,action)=>{
            state.users=action.payload;
        },
        setAllBookings: (state, action) => {
            state.allbookings = action.payload;
        }
       
    }
})
export const { setUser,setError,clearError,logoutUser,setBooking,setAllBookings,setUsers } = userSlice.actions;
export default userSlice.reducer;