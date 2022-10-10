import React from 'react'
import './product.css'

const Products = ({ state, dispatch }) => {
    const { products, cart } = state;

    // console.log(products)
    return (
        <div className="product_div" >
            {
                products.length && products?.map((prod) => (
                    <div className="product_thumbnail" key={prod.id}>
                        <img 
                            className="product_image" 
                            src={prod.thumbnail} 
                            alt={prod.title}
                        />
                        <div className="product_title">
                            <span>{prod.title}</span>
                            <b>${prod.price}</b>
                        </div>

                        {
                            cart.some(p => p.id === prod.id) ?
                                <button
                                    className="remove_product_button"
                                    onClick={() => dispatch({
                                        type: "REMOVE_FROM_CART",
                                        payload: {
                                            id: prod.id
                                        }
                                    })}
                                >
                                    remove from cart
                                </button> :
                                
                                <button
                                    className="add_product_button"
                                    onClick={() => dispatch({
                                        type: "ADD_TO_CART",
                                        payload: {
                                            id: prod.id,
                                            title: prod.title,
                                            thumbnail: prod.thumbnail,
                                            qty: 1,
                                            price: prod.price
                                        }
                                    })}
                                >
                                    add to cart
                                </button>
                        }
                    </div>
                ))
            }
        </div>
    );
};

export default Products;
