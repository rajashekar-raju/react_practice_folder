import { createSlice } from "@reduxjs/toolkit";

const detailsSlice = createSlice({
    name:"details",
    initialState:{
        info:null,
    },
    reducers:{
        addInfo:(state,action)=>{
            state.info=action.payload;
        },
        removeInfo:(state)=>{
            state.info=null
        }
    }
})
export const {addInfo,removeInfo} = detailsSlice.actions;
export default detailsSlice.reducer;