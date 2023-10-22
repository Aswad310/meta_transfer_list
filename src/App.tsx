import { useState } from 'react';
import List from './components/List';
import Action from './components/Action';
import { items } from './data';
import { intersection, not } from './utils';

const App = () => {
  const [leftItems, setLeftItems] = useState(items);
  const [rightItems, setRightItems] = useState([]);
  const [checkedItems, setCheckItems] = useState([]);

  const leftCheckedItems = intersection(leftItems, checkedItems);
  const rightCheckedItems = intersection(rightItems, checkedItems);
  console.log('intersection: ', leftCheckedItems)

  // handling checkboxes 
  const handleToogle = (item) => {
    const currentIndex = checkedItems.indexOf(item);
    const newCheckedItems = [...checkedItems];

    if (currentIndex === -1) {
      newCheckedItems.push(item);
    } else {
      newCheckedItems.splice(currentIndex, 1);
    }

    setCheckItems(newCheckedItems);
  }

  console.log('checkedItems', checkedItems)

  // handling move to right button
  const moveRight = () => {
    setRightItems(rightItems.concat(leftCheckedItems));
    setLeftItems(not(leftItems, leftCheckedItems));
    setCheckItems(not(checkedItems, leftCheckedItems));
  }

  // handling move to left button
  const moveLeft = () => {
    setLeftItems(leftItems.concat(rightCheckedItems));
    setRightItems(not(rightItems, rightCheckedItems));
    setCheckItems(not(checkedItems, rightCheckedItems));
  }

  return (
    <div className='App flex'>
      <List
        items={leftItems}
        handleToogle={handleToogle}
      />
      <Action
        moveRight={moveRight}
        moveLeft={moveLeft}
      />
      <List
        items={rightItems}
        handleToogle={handleToogle}
      />
    </div>
  )
}

export default App;