import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const products = useLoaderData();
    return (
        <div>
            <h2>Home Page Items Are: {products.length}</h2>
        </div>
    );
};

export default Home;