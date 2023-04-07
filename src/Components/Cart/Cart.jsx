import React from 'react';
import Tshirt from '../Tshirt/Tshirt';
import './Cart.css'

const Cart = ({ cart, handleRemoveCart }) => {
    let message;
    if(cart.length === 0) {
        message = <p>Please add some products</p>
    } else{
        message = <div>
            <h3>Taka Wala</h3>
            <p>Thanks for buying products</p>
        </div>
    }
    return (
        <div>
            <h2>Order Summery</h2>
            <h4 className={cart.length === 1 ? 'blue' : 'red'}>Total Added: {cart.length}</h4>
            <p className={`bold bordered ${cart.length === 3 ? 'yellow' : 'green'}`}>Something</p>
            {cart.length > 2 ? <span className='purple'>Aro kino</span> : <span>fokinni</span>}
            {message}
            <div>
                {
                    cart.map(tShirt => <p key={tShirt._id}>{tShirt.name} - ${tShirt.price} <button onClick={() =>handleRemoveCart(tShirt._id)}>X</button></p>)
                }
                {
                    cart.length == 2 && <p>Double !!!</p>
                }
                {
                    cart.length === 3 || <h3>Tinta kino</h3> 
                }
            </div>
        </div>
    );
};

export default Cart;