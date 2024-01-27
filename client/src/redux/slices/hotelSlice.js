import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 
    hotels: undefined,
    hotel: undefined,
    searchHotel:undefined,
    hasSearched:false
   
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
        },
        SetSearch: (state, action) => {
            state.searchHotel = action.payload;
        },
        setHasSearched: (state, action) => {
            state.hasSearched = action.payload;
        }
    }
});

export const {  setHotels,setHotel,SetSearch,setHasSearched} = hotelSlice.actions;

export default hotelSlice.reducer;