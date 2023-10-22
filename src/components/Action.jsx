import React from 'react';

const Action = ({ moveRight, moveLeft }) => {
    return (
        <div className='flex actions'>
            <button onClick={moveRight}>&gt;</button>
            <button onClick={moveLeft}>&lt;</button>
        </div>
    )
}

export default Action;