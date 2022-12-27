import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useSelector} from 'react-redux'
import { uiActions } from './store/ui-slice';

function App() {
  const showCart =  useSelector((state)=>state.ui.cartIsvisible)
  return (
    <Layout>
     {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
