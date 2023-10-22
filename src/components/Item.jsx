import React from 'react';

const Item = ({ item, handleToogle }) => {
    return (
        <div>
            <input
                type='checkbox'
                onChange={() => handleToogle(item)}
            />
            {item}
        </div>
    )
}

export default Item;