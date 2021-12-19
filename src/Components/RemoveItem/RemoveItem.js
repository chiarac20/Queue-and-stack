const RemoveItem = ({removefromQueue, removefromStack, lastRemovedItem}) => {
    return <div>
        <div>
            Last item removed: {lastRemovedItem}
        </div>
        <div>
            <button onClick={removefromQueue}>Remove from the queue</button>
            <button onClick={removefromStack}>Remove from the stack</button>
        </div>    
    </div>
}

export default RemoveItem;