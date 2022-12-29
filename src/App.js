import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useSelector,useDispatch} from 'react-redux'
import { uiActions } from './store/ui-slice';
import {useEffect} from 'react'
import {Fragment} from 'react';
import Notification from './components/UI/Notification';
import { fetchCartData } from './store/cart-action';

let isInitial=true;
function App() {
  const dispatch=useDispatch();
  const showCart =  useSelector((state)=>state.ui.cartIsvisible)
  const cart=useSelector((state)=>state.cart);
  const notification=useSelector((state=>state.ui.notification))
  useEffect(()=>
  {
    dispatch(fetchCartData());
    
  },[dispatch])
  useEffect(()=>
  {
    if(isInitial)
    { isInitial=false;
      return;
    }
    const sendCartData=async()=>{
      dispatch(uiActions.showNotification({
        status:'pending',
        title:'Sending...',
        message:'Sending cart data!'
      }))
     const response= await fetch('https://shopping-cart-c7107-default-rtdb.firebaseio.com/cart.json',
      {
        method:'PUT',
        body:JSON.stringify(cart),
      });
      if(!response.ok)
      {
        throw new Error('Sendind data failed')
      }
      dispatch(uiActions.showNotification({
        status:'success',
        title:'Success',
        message:'Cart Data sent successfully'
      }))

    }  
    sendCartData().catch(error=>{
      dispatch(uiActions.showNotification({
        status:'error',
        title:'Error!',
        message:'Sending data failed!'
      }))
    })
  },[cart,dispatch]);
  
  return (
    <Fragment>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
    <Layout>
     {showCart && <Cart />}
      <Products />
    </Layout>
    </Fragment>
  );
}

export default App;
