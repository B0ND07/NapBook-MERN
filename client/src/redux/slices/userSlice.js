import { createSlice } from '@reduxjs/toolkit';

const initialState={
    user:undefined,
    isAuthenticated: false,
}

const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        setUser: (state,action)=>{
            state.user=action.payload;
            state.isAuthenticated = true;
        }
    }
})
export const { setUser } = userSlice.actions;
export default userSlice.reducer;