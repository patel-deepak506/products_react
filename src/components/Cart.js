import React, { useState , useEffect } from 'react'
import './cart.css';

const Cart = ({ state, dispatch }) => {

  const { cart } = state;
  const [total, setTotal] = useState();
  const changeQty = ( id, qty)=>{
    dispatch({
      type:"CHANGE_CART_QTY",
      payload:{
       id: id ,
       qty: qty,
      }
    })
  }

  useEffect(()=>{
    setTotal(cart.reduce((acc , curr)=>acc+Number(curr.price)*curr.qty , 0))
  }, [cart])

  return (
    <div className="cart_main_div">
      <b className="cart" >Cart</b>
      <b className="sub_total">subtotal ${total}</b>
      {
        cart.length > 0 ?
          (cart.map((item) => (
            <div className="cart_div" key={item.id} >
              <div className="cart_image" >
                <img className="image_icon" src={item.thumbnail} alt={item.title} />
                <div className="title_price">
                  <span>{item.title}</span>
                  <b>${item.price}</b>
                </div>
              </div>
              <div className="button_div" >
                <button onClick={()=>changeQty(item.id , item.qty-1)}>-</button>
                <span>{item.qty}</span>
                <button onClick={()=>changeQty(item.id , item.qty+1)} >+</button>
              </div>
            </div>
          )))
          :
        (<span className="button_title" >"cart is empty"</span>)
      }

    </div>
  )
}

export default Cart
