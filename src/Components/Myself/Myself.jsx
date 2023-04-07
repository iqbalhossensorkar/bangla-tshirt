import React from 'react';
import Special from '../Special/Special';

const Myself = ({ring}) => {
    return (
        <div className=''>
            <h2>Myself</h2>
            <section className='flex'><Special ring={ring}></Special></section>
        </div>
    );
};

export default Myself;