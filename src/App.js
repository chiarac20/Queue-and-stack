import {useState} from 'react';

import Input from './Components/Input/Input';
import QueueStack from './Components/QueueStack/QueueStack';
import RemoveItem from './Components/RemoveItem/RemoveItem';

function App() {
  const [queueItems, setQueueItems] = useState([]);
  const [stackItems, setStackItems] = useState([]);
  const [lastRemovedItem, setLastRemovedItem] = useState('');

  const addToQueue = (value) => {
    setQueueItems([value, ...queueItems]);
  }

  const addToStack = (value) => {
    setStackItems([value, ...stackItems]);
  }

  const removefromQueue = () => {
    setLastRemovedItem(queueItems[queueItems.length - 1]);
    setQueueItems(queueItems => queueItems.slice(0, -1));
  }

  const removefromStack = () => {
    setLastRemovedItem(stackItems[0]);
    setStackItems(stackItems => stackItems.slice(1));
  }

  return <div>
    <h1>Queue and stack</h1>
    <Input addToQueue={addToQueue} addToStack={addToStack}/>
    <QueueStack listItems={queueItems} title="Queue"/>
    <QueueStack listItems={stackItems} title="Stack"/>
    <RemoveItem removefromQueue={removefromQueue} removefromStack={removefromStack} lastRemovedItem={lastRemovedItem}/>
  </div> 
  
}

export default App;
