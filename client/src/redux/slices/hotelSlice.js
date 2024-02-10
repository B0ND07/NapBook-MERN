import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 
    hotels: undefined,
    hotel: undefined,
    searchHotel:undefined,
    hasSearched:false,
    allhotels:undefined,
    isHotelUpdated: false,
   isLoading:true
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
        },
        setAllHotels: (state, action) => {
            state.allhotels = action.payload;
        },
        setIsHotelUpdated: (state, action) => {
            state.isHotelUpdated = action.payload;
        },
        setLoading: (state,action)=>{
            state.isLoading=action.payload
        }

    }
});

export const {  setHotels,setHotel,SetSearch,setHasSearched,setAllHotels,setIsHotelUpdated,setLoading} = hotelSlice.actions;

export default hotelSlice.reducer;