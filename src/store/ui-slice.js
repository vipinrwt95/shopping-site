import {createSlice} from '@reduxjs/toolkit';

const uislice=createSlice({
    name:'ui',
    initialState:{cartIsvisible:false,notification:null},
    reducers:{
        toggle(state)
        {
           state.cartIsvisible=!state.cartIsvisible; 
        },
        showNotification(state,action)
        {
            state.notification={
                status:action.payload.status,
                title:action.payload.title,
                message:action.payload.message,
            }
        }
    }
})
export default uislice;
export const uiActions=uislice.actions;