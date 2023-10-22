import React from 'react';
import Item from './Item';

const List = ({ items, handleToogle }) => {
    return (
        <div className='flex list'>
            {items.map((item) => {
                return (
                    <Item
                        key={item}
                        item={item}
                        handleToogle={handleToogle}
                    />
                )
            })}
        </div>
    )
}

export default List;