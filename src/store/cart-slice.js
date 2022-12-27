import {createSlice} from '@reduxjs/toolkit';
const initialState={cartItems:[],totalQuantity:0}
const cartslice=createSlice({
    name:'cart',
    initialState:initialState,
    reducers:{
        addcart(state)
        {
           state.amount=state.amount+1; 

        },
        addCartItem(state,action)
        { const item=action.payload;
           const existingitem=state.cartItems.find(i=>i.id===item.id) 
           state.totalQuantity++
           if(!existingitem)
           {
            state.cartItems.push(
                {
                  id:item.id,
                  price:item.price,
                  quantity:1,
                  totalPrice:item.price,
                  name:item.title  
                }
              )
           }
           else{
            existingitem.quantity++;
            existingitem.totalPrice=existingitem.totalPrice+item.price;
           }
          
        },
        removeItemFromCart(state,action)
        {
         const id=action.payload;
         const existingitem=state.cartItems.find(i=>i.id==id) 
         state.totalQuantity--;
         if(existingitem.quantity===1)
         {
            state.cartItems=state.cartItems.filter(item=>item.id!==id);
         }
         else{
            existingitem.quantity--;
            existingitem.totalPrice=existingitem.totalPrice-existingitem.price;
         }
        }
       
    }
})
export default cartslice;
export const cartActions=cartslice.actions;