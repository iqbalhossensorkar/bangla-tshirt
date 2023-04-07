import React, { useContext } from 'react';
import { MoneyContext, RingContext } from '../Grandpa/Grandpa';

const Sister = () => {
    const ring = useContext(RingContext)
    const [money] = useContext(MoneyContext)
    return (
        <div>
            <h2>Sister</h2>
            <p>{ring}</p>
            <p>Grandpa money: {money}</p>
        </div>
    );
};

export default Sister;