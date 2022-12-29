import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";



export const fetchCartData=()=>
{
 return async dispatch=>{
   const fetchData=async()=>{
    
    const response =await fetch('https://shopping-cart-c7107-default-rtdb.firebaseio.com/cart.json');

    if(!response.ok)
    {
         throw new Error('Could not fetc cart data')
    }
    const data=await response.json()

    return data;
    
   }
    try{
       const cartData= await fetchData();
       dispatch(cartActions.replaceCart({
        items:cartData.items||[],
        totalQuantity:cartData.totalQuantity
       }))
    }catch(error)
    {
        dispatch(uiActions.showNotification({
            status:'error',
            title:'Error!',
            message:'Fetching data failed!'
          }))
    }
 }

}