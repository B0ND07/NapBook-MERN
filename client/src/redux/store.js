import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import hotelSlice from './slices/hotelSlice';

const reducer = {
    userState: userSlice,
    hotelState: hotelSlice
}

export const store = configureStore({
    reducer
})