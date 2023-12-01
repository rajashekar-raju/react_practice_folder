import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"app",
    initialState:{
        items:[],
    },
    reducers:{
        addItems:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItems:(state)=>{
            state.items.pop();
        }
    }
})
export const {addItems,removeItems}= appSlice.actions;
export default appSlice.reducer;