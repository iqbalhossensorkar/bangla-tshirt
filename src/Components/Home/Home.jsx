import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './Home.css'
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import toast from 'react-hot-toast';

const Home = () => {
    const products = useLoaderData();
    const [cart, setCart] = useState([]);
    const handleAddToCart = tShirt => {
        const addedToast = cart.find(t => t._id === tShirt._id)
        if (addedToast) {
            toast.error('You cant add more')
        }
        else {
            const newCart = [...cart, tShirt];
            setCart(newCart);
        }
    }

    const handleRemoveCart = id => {
        const remaining = cart.filter(t => t._id !== id);
        setCart(remaining);
    }
    return (
        <div className='home-container'>
            <div className='tShirts-container'>
                {
                    products.map(tShirt =>
                        <Tshirt
                            key={tShirt._id}
                            tShirt={tShirt}
                            handleAddToCart={handleAddToCart}>
                        </Tshirt>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} handleRemoveCart={handleRemoveCart}></Cart>
            </div>
        </div>
    );
};

export default Home;