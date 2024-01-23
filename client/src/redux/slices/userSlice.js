import { createSlice } from '@reduxjs/toolkit';

const initialState={
    user:undefined,
    isAuthenticated: false,

    error: undefined,
    success: undefined
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
        setSuccess: (state, action) => {
            state.success = action.payload;
        },
        clearSuccess: (state, action) => {
            state.success = undefined;
        }
    }
})
export const { setUser,setError, setSuccess, clearError, clearSuccess } = userSlice.actions;
export default userSlice.reducer;