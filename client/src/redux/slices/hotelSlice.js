import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 
    hotels: undefined,
    hotel: undefined
   
}

const hotelSlice = createSlice({
    name: 'hotel',
    initialState,
    reducers: {
        setHotels: (state, action) => {
            state.hotels = action.payload;
        },
        setHotel: (state, action) => {
            state.hotel = action.payload;
        }
    }
});

export const {  setHotels,setHotel} = hotelSlice.actions;

export default hotelSlice.reducer;