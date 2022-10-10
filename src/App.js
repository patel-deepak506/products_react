import './App.css';
import axios from 'axios'
import { useEffect , useReducer } from 'react';
import {cartReducer} from './reducer/cartReducer'
import Products from './components/Product'
import Cart from './components/Cart'

function App() {

  const [state, dispatch] = useReducer(cartReducer , {products:[] , cart:[]})

    const fetchProducts = async()=>{
        const {data} = await axios.get('https://dummyjson.com/products')
        dispatch({
          type:'ADD_PRODUCT',
          payload:data.products , 
        })
    }


    useEffect(()=>{
        fetchProducts();
    },[] )

  return (
    <div className="main_div">
      <Products state={state} dispatch={dispatch}/>
      <Cart state={state} dispatch={dispatch}/>
    </div>
  );
}

export default App;
